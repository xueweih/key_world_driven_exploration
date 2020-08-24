import json
import pandas as pd
from firebase import firebase


def csv_to_dict(file_name):
    df = pd.read_csv(file_name)
    df.fillna(0, inplace = True)
    js = df.to_json(orient='records')
    return json.loads(js)

def invert_index(rows,primarykey,tablename):
    index = {}

    for row in rows:
#             print(type(row))
        for k, v in row.items():
            if isinstance(v,str):
                for w in v.split(" "):
                    key = w.lower()  # case insensitive

                    # check if it's alpha
                    if not key.isalpha():
                        continue
                    else:
                        loc = {}
#                         if table == 'hotel_info':
                        if key not in index:
                            index[key] = []
                        loc = {
                            "key": row[primarykey],
                            "column": k,
                            "table": tablename,
                        }
                        index[key].append(loc)
    
    return index


def invert_index_world(dic):
    country_index = {}
    city_index = {}
    countrylanguage_index = {}
    for table, rows in dic.items():
#         print(table)
        for row in rows:
#             print(type(row))
            for k, v in row.items():
                if type(v) != str:
                    continue
#                 if type(v) == float or type(v) == int:
#                     continue
                else:
                    for w in v.split(" "):
                        key = w.lower()  # case insensitive

                        # check if it's alpha
                        if not key.isalpha():
                            continue


                        loc = {}
                        if table == 'world_country':
                            if key not in country_index:
                                country_index[key] = []
                            loc = {
                                "key": row["Code"],
                                "column": k,
                                "table": 'world_country',
                            }
                            country_index[key].append(loc)
                        elif table == 'world_city':
                            if key not in city_index:
                                city_index[key] = []
                            loc = {
                                "key": row["ID"],
                                "column": k,
                                "table": 'world_city',
                            }
                            city_index[key].append(loc)
                        elif table == 'world_countrylanguage':
                            if key not in countrylanguage_index:
                                countrylanguage_index[key] = []
                            loc = {
                                "key": [row["CountryCode"],row["Language"]],
                                "column": k,
                                "table": 'world_countrylanguage',
                            }
                            countrylanguage_index[key].append(loc)

    #                    index[key].append(loc)

    return country_index, city_index, countrylanguage_index


#because the primary key of world is a tuple，“key”：row[],row[]. We cannot use the same function here.


if __name__ =="__main__":
    
    firebase = firebase.FirebaseApplication('https://inf551-project-fccc4.firebaseio.com/', None)

    dic_world = {
        "world_country": csv_to_dict('world_country.csv'),
        "world_city": csv_to_dict('world_city.csv'),
        "world_countrylanguage": csv_to_dict('world_countrylanguage.csv'),
    }

    dict_2_world = {}
    dict_2_world["country_invert_index"] = invert_index_world(dic_world)[0]
    dict_2_world["city_invert_index"] = invert_index_world(dic_world)[1]
    dict_2_world["countrylanguage_invert_index"] = invert_index_world(dic_world)[2]


    firebase.patch('/world', dict_2_world)

    dict_original = {
        "hotel_info": csv_to_dict('hotel_info.csv'),
        "hotel_city": csv_to_dict('hotel_city.csv'),
        "hotel_score": csv_to_dict('hotel_score.csv'),
        "film_info": csv_to_dict('film_info.csv'),
        "film_genre_level": csv_to_dict('film_genre_level.csv'),
        "film_company": csv_to_dict('film_company.csv')
    }

    dict_hotel_invert = {}
    dict_hotel_invert["hotel_info_invert_index"] = invert_index(dict_original["hotel_info"], "hotel_id", "hotel_info")
    dict_hotel_invert["hotel_city_invert_index"] = invert_index(dict_original["hotel_city"], "city_id", "hotel_city")
    dict_hotel_invert["hotel_score_invert_index"] = invert_index(dict_original["hotel_score"], "hid", "hotel_score")
    firebase.patch('/hotel', dict_hotel_invert)

    dict_film_invert = {}
    dict_film_invert["film_info_invert_index"] = invert_index(dict_original["film_info"], "film_id", "film_info")
    dict_film_invert["film_genre_level_invert_index"] = invert_index(dict_original["film_genre_level"], "id", "film_genre_level")
    dict_film_invert["film_company_invert_index"] = invert_index(dict_original["film_company"], "company_id", "film_company")
    firebase.patch('/film', dict_film_invert)
