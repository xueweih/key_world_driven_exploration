import sys
import pymysql
import pandas as pd
import csv
import json
from firebase import firebase


def to_csv(db_name,table_name,file_name):
    mysql_setting = {
    'host': 'localhost',
    'port': 3306,
    'user': 'root',
    'passwd': '13K89083',
    'db': db_name,
    'charset': 'utf8'
}
    conn = pymysql.connect(**mysql_setting)
    data_sql = pd.read_sql(f"select * from {table_name}", conn)
    data_sql.to_csv(file_name,index=False)
    print('finish...')

def to_json(csvname, jsonname, fieldnames, encoding):
    csvfile = open(csvname,'r',encoding = encoding)
    tempfile = open(csvname,'r',encoding = encoding)
    jsonfile = open(jsonname, 'w', encoding = encoding)
    reader = csv.DictReader(csvfile, fieldnames)
    jsonfile.write('[')
    i = 0
    a = list(tempfile)
    for row in reader:
        i = i+1
        if i > 1:
            json.dump(row, jsonfile,separators=(',',':'))
            if i < len(a):
                jsonfile.write(','+'\n')
    jsonfile.write(']')

#upload json to firebase
def upload(dic,json_name,node):
    with open(json_name,'r') as load_f:
        load_dict = json.load(load_f)
    data = {}
    data[dic] =  load_dict
    result = firebase.patch(node,data)
    
    
if __name__ == "__main__":
    db_name = sys.argv[1]
    firebase_db = sys.argv[2]

    firebase = firebase.FirebaseApplication('https://inf551-project-fccc4.firebaseio.com/', None)

    dic_str = ['hotel_city','hotel_info' ,'hotel_score','film_genre_level','film_company','film_info','world_city','world_country','world_countrylanguage']
    
    
    if firebase_db == 'hotel':

        to_csv('hotel',"hotel_city","hotel_city.csv")
        to_csv('hotel',"hotel_info","hotel_info.csv")
        to_csv('hotel',"hotel_score","hotel_score.csv")
        
        city_c = ["city_id", "city", "area"]
        to_json("hotel_city.csv","hotel_city.json",city_c,"utf-8")
        hotel_c = ["hotel_id","hotel_name","city_name","price_from","lon","lat"]
        to_json("hotel_info.csv","hotel_info.json",hotel_c,"utf-8")
        score_c = ["hid","atmosphere","cleanliness","facilities","location","security","staff","score"]
        to_json("hotel_score.csv","hotel_score.json",score_c,"utf-8")
        
        upload(dic_str[0],"hotel_city.json",'/{}'.format(firebase_db))
        upload(dic_str[1],"hotel_info.json",'/{}'.format(firebase_db))
        upload(dic_str[2],"hotel_score.json",'/{}'.format(firebase_db))

    if firebase_db == 'film':

        to_csv('film',"film_info","film_info.csv")
        to_csv('film',"film_genre_level","film_genre_level.csv")
        to_csv('film',"film_company","film_company.csv")
        
        film_c = ["film_id","name","company","director","genre_level","runtime","score","votes","star","writer","year"]
        to_json("film_info.csv","film_info.json",film_c,"utf-8")
        film_genre_level_c = ["id","genre","rating"]
        to_json("film_genre_level.csv","film_genre_level.json",film_genre_level_c,"utf-8")
        film_company_c = ["company_id","company","country"]
        to_json("film_company.csv","film_company.json",film_company_c,"utf-8")

        upload(dic_str[3],"film_genre_level.json",'/{}'.format(firebase_db))
        upload(dic_str[4],"film_company.json",'/{}'.format(firebase_db))
        upload(dic_str[5],"film_info.json",'/{}'.format(firebase_db))

    if firebase_db == 'world':

        to_csv('world',"city","world_city.csv")
        to_csv('world',"country","world_country.csv")
        to_csv('world',"countrylanguage","world_countrylanguage.csv")
        
        world_city_c = ['ID', 'Name', 'CountryCode', 'District', 'Population']
        to_json("world_city.csv", "world_city.json",world_city_c,"ISO-8859-1")
        world_country_c = ['Code', 'Name', 'Continent', 'Region', 'SurfaceArea', 'IndepYear', 'Population', 'LifeExpectancy', 'GNP', 'GNPOld', 'LocalName', 'GovernmentForm', 'HeadOfState', 'Capital', 'Code2']
        to_json("world_country.csv","world_country.json",world_country_c,"ISO-8859-1")
        world_countrylanguage_c = ['CountryCode', 'Language', 'IsOfficial', 'Percentage']
        to_json("world_countrylanguage.csv","world_countrylanguage.json",world_countrylanguage_c,"ISO-8859-1")
        
        upload(dic_str[6],"world_city.json",'/{}'.format(firebase_db))
        upload(dic_str[7],"world_country.json",'/{}'.format(firebase_db))
        upload(dic_str[8],"world_countrylanguage.json",'/{}'.format(firebase_db))
