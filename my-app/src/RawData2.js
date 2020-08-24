import React, { Component } from 'react'
import Fk from './fk'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amount from './amount'

class RawData2 extends Component {
    constructor(props){
        super(props);
        this.state={
          lists_hotel_info: [],lists_hotel_city:[],lists_hotel_score:[],
            lists_film_info:[],lists_film_company:[],lists_film_genre_level:[],lists_film_info2:[],
            lists_world_city:[],lists_world_country:[],lists_world_countrylanguage:[],lists_world_country2:[],

            hotel_info:'',hotel_city:'',hotel_score:'',
            film_info:'',film_company:'',film_genre_level:'',film_info2:'',
            world_city:'',world_country:'',world_countrylanguage:'', world_country2:''
        }
        
      }
      
     
      toShopDetails = (id,table_name) => {
        var world_country_list = [];
        var world_country2_list = [];
        var world_city_list = [];
        var world_countrylanguage_list = [];

        var hotel_city_list = [];
        var hotel_info_list = [];

        var film_company_list = [];
        var film_genre_level_list = [];
        var film_info_list = []
        var film_info2_list = []

         var ref = this.props.fb
         if(table_name ==='world_country' ){
        var rref = ref.child('world/world_country')
        
         rref.orderByChild("Code").equalTo(String(id)).on("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData_2 = snapshot.val();
            var start = Number(Object.keys(childData_2)[0]);var end = Number(Object.keys(childData_2)[0]) + Object.keys(childData_2).length-1
            for (var j = start; j <= end;j++){
                if(typeof(childData_2[j])!='undefined'){
                    world_country_list[j] = {Code:childData_2[j].Code,Name:childData_2[j].Name,Continent:childData_2[j].Continent,Region:childData_2[j].Region,SurfaceArea:childData_2[j].SurfaceArea,
                        IndepYear:childData_2[j].IndepYear,Population:childData_2[j].Population,LifeExpectancy:childData_2[j].LifeExpectancy,
                        GNP:childData_2[j].GNP,GNPOld:childData_2[j].GNPOld,LocalName:childData_2[j].LocalName,GovernmentForm:childData_2[j].GovernmentForm,HeadOfState:childData_2[j].HeadOfState,
                        Capital:childData_2[j].Capital,Code2:childData_2[j].Code2}
                    }
        }
        });
      })}
      if(table_name ==='world_country2' ){
        var rref = ref.child('world/world_country')
        
         rref.orderByChild("Code").equalTo(String(id)).on("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData_2 = snapshot.val();
            var start = Number(Object.keys(childData_2)[0]);var end = Number(Object.keys(childData_2)[0]) + Object.keys(childData_2).length-1
            for (var j = start; j <= end;j++){
                if(typeof(childData_2[j])!='undefined'){
                    world_country2_list[j] = {Code:childData_2[j].Code,Name:childData_2[j].Name,Continent:childData_2[j].Continent,Region:childData_2[j].Region,SurfaceArea:childData_2[j].SurfaceArea,
                        IndepYear:childData_2[j].IndepYear,Population:childData_2[j].Population,LifeExpectancy:childData_2[j].LifeExpectancy,
                        GNP:childData_2[j].GNP,GNPOld:childData_2[j].GNPOld,LocalName:childData_2[j].LocalName,GovernmentForm:childData_2[j].GovernmentForm,HeadOfState:childData_2[j].HeadOfState,
                        Capital:childData_2[j].Capital,Code2:childData_2[j].Code2}
                    }
        }
        });
      })}
      if(table_name ==='world_city'){
        var rref = ref.child('world/world_city')
        rref.orderByChild("CountryCode").equalTo(String(id)).on("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData_2 = snapshot.val();
            var start = Number(Object.keys(childData_2)[0]);var end = Number(Object.keys(childData_2)[0]) + Object.keys(childData_2).length-1
            for (var j = start; j <= end;j++){
                if(typeof(childData_2[j])!='undefined'){
                    world_city_list[j] = {'ID':childData_2[j].ID,'Name':childData_2[j].Name,'CountryCode':childData_2[j].CountryCode,'District':childData_2[j].District,'Population':childData_2[j].Population}
                    }
        }
        });
      })

      }
      if(table_name ==='hotel_info'){
        var rref = ref.child('hotel/hotel_info')
        rref.orderByChild("city_name").equalTo(String(id)).on("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData_2 = snapshot.val();
            var start = Number(Object.keys(childData_2)[0]);var end = Number((Object.keys(childData_2)[Object.keys(childData_2).length-1]))
            for (var i = start; i <= end;i++){
                if(typeof(childData_2[i])!='undefined'){
                  hotel_info_list[i] = {hotel_id:childData_2[i].hotel_id,hotel_name:childData_2[i].hotel_name,city_name:childData_2[i].city_name,price_from:childData_2[i].price_from,lon:childData_2[i].lon,lat:childData_2[i].lat};                      
                }
        }
        });
      })

      }
      if(table_name ==='hotel_city'){
        var rref = ref.child('hotel/hotel_city')
        rref.orderByChild("city").equalTo(String(id)).on("value", function(snapshot) {
          console.log(id)
          snapshot.forEach(function(childSnapshot) {
            var childData_2 = snapshot.val();
            var start = Number(Object.keys(childData_2)[0]);var end = Number((Object.keys(childData_2)[Object.keys(childData_2).length-1]))
            console.log(start,end,Object.keys(childData_2))
            for (var i = start; i <= end;i++){
                if(typeof(childData_2[i])!='undefined'){
                  hotel_city_list[i] = {city_id:childData_2[i].city_id,city:childData_2[i].city,area:childData_2[i].area};
                }console.log(hotel_city_list)
        }
        });
      })

      }
      if(table_name ==='film_company'){
        var rref = ref.child('film/film_company')
        rref.orderByChild("company").equalTo(String(id)).on("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData_2 = snapshot.val();
            console.log(childData_2)
            var start = Number(Object.keys(childData_2)[0]);var end = Number((Object.keys(childData_2)[Object.keys(childData_2).length-1]))
            for (var j = start; j <= end;j++){
                if(typeof(childData_2[j])!='undefined'){
                  film_company_list[j] = {company_id:childData_2[j].company_id,company:childData_2[j].company,country:childData_2[j].country}
                }
        }
        });
      })

      }
      if(table_name ==='film_info'){
        var rref = ref.child('film/film_info')
        rref.orderByChild("company").equalTo(String(id)).on("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData_2 = snapshot.val();
            var start = Number(Object.keys(childData_2)[0]);var end = Number((Object.keys(childData_2)[Object.keys(childData_2).length-1]))
            for (var j = start; j <= end;j++){
                if(typeof(childData_2[j])!='undefined'){
                  film_info_list[j] = {film_id:childData_2[j].film_id,name:childData_2[j].name,company:childData_2[j].company,director:childData_2[j].director,genre_level:childData_2[j].genre_level,runtime:childData_2[j].runtime,score:childData_2[j].score,
                    votes:childData_2[j].votes,star:childData_2[j].star,writer:childData_2[j].writer,year:childData_2[j].year}                }
        }
        });
      })

      }
      if(table_name ==='film_info2'){
        var rref = ref.child('film/film_info')
        rref.orderByChild("genre_level").equalTo(String(id)).on("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData_2 = snapshot.val();
            var start = Number(Object.keys(childData_2)[0]);var end = Number((Object.keys(childData_2)[Object.keys(childData_2).length-1]))
            for (var j = start; j <= end;j++){
                if(typeof(childData_2[j])!='undefined'){
                  film_info2_list[j] = {film_id:childData_2[j].film_id,name:childData_2[j].name,company:childData_2[j].company,director:childData_2[j].director,genre_level:childData_2[j].genre_level,runtime:childData_2[j].runtime,score:childData_2[j].score,
                    votes:childData_2[j].votes,star:childData_2[j].star,writer:childData_2[j].writer,year:childData_2[j].year}                }
        }
        });
      })

      }
      if(table_name ==='film_genre_level'){
        var rref = ref.child('film/film_genre_level')
        console.log(rref)
        rref.orderByChild("id").equalTo(String(id)).on("value", function(snapshot) {
          snapshot.forEach(function(childSnapshot) {
            var childData_2 = snapshot.val();
            var start = Number(Object.keys(childData_2)[0]);var end = Number((Object.keys(childData_2)[Object.keys(childData_2).length-1]))
            for (var j = start; j <= end;j++){
                if(typeof(childData_2[j])!='undefined'){
                  film_genre_level_list[j] = {id:childData_2[j].id,genre:childData_2[j].genre,rating:childData_2[j].rating}
                }
        }
        });
      })

      }
      if(world_country_list.length!== 0){
        this.setState({ lists_world_country:world_country_list,
                        world_country:'world_country' }
         ); 
        }
        if(world_country2_list.length!== 0){
          this.setState({ lists_world_country2:world_country2_list,
                          world_country2:'world_country2' }
           ); 
          }
        if(world_city_list.length!== 0){
          this.setState({ lists_world_city:world_city_list,
                          world_city:'world_city' }
           ); 
          }
          if(hotel_info_list.length !== 0){
           this.setState({ lists_hotel_info:hotel_info_list,
               hotel_info:'hotel_info' }
           ); 
       }
       if(hotel_city_list.length !== 0){
        this.setState({ lists_hotel_city:hotel_city_list,
            hotel_city:'hotel_city' }
        ); 
    }
    if(film_company_list.length !== 0){
      this.setState({ lists_film_company:film_company_list,
        film_company:'film_company' }
      ); 
  }
  if(film_info_list.length !== 0){
    this.setState({ lists_film_info:film_info_list,
      film_info:'film_info' }
    ); 
}
if(film_info2_list.length !== 0){
  this.setState({ lists_film_info2:film_info2_list,
    film_info2:'film_info2' }
  ); 
}
if(film_genre_level_list.length !== 0){
  this.setState({ lists_film_genre_level:film_genre_level_list,
    film_genre_level:'film_genre_level' }
  ); 
}
    }


      render(){
        
        let world_city_c = ['ID', 'Name', 'CountryCode', 'District', 'Population']
        let world_country_c = ['Code', 'Name', 'Continent', 'Region', 'SurfaceArea', 'IndepYear', 'Population', 'LifeExpectancy', 'GNP', 'GNPOld', 'LocalName', 'GovernmentForm', 'HeadOfState', 'Capital', 'Code2']
        let world_countrylanguage_c = ['CountryCode', 'Language', 'IsOfficial', 'Percentage']
        
        let hotel_info_c = ["hotel_id","hotel_name","city_name","price_from","lon","lat"]
        let hotel_city_c = ["city_id", "city","area"]

        let film_info_c = ["film_id" ,"name","company", "director", "genre_level" ,"runtime","score","votes","star","writer","year"]
        let film_genre_level_c = ["id","genre","rating"]
        let film_company_c = ["company_id","company","country"]

        if (this.state.world_country === 'world_country'){   
          return(
                  <Fk lists={this.state.lists_world_country} key_1={this.state.world_country } fb={this.props.fb}/>
                    
                )       
                }
                if (this.state.world_country2 === 'world_country2'){   
                  return(
                          <Fk lists={this.state.lists_world_country2} key_1={this.state.world_country2 } fb={this.props.fb}/>
                            
                        )       
                        }

        if (this.state.world_city === 'world_city'){   
          return(
            <Fk lists={this.state.lists_world_city} key_1={this.state.world_city} fb={this.props.fb}/>
          )       
          }
          if (this.state.hotel_info === 'hotel_info'){   
            return(
              <Fk lists={this.state.lists_hotel_info} key_1={this.state.hotel_info} fb={this.props.fb}/>
            )       
            }
            if (this.state.hotel_city === 'hotel_city'){   
              return(
                <Fk lists={this.state.lists_hotel_city} key_1={this.state.hotel_city} fb={this.props.fb}/>
              )       
              }
              if (this.state.film_company === 'film_company'){   
                return(
                  <Fk lists={this.state.lists_film_company} key_1={this.state.film_company} fb={this.props.fb}/>
                )       
                }
                if (this.state.film_info === 'film_info'){   
                  return(
                    <Fk lists={this.state.lists_film_info} key_1={this.state.film_info} fb={this.props.fb}/>
                  )       
                  }
                  if (this.state.film_info2 === 'film_info2'){   
                    return(
                      <Fk lists={this.state.lists_film_info2} key_1={'film_info'} fb={this.props.fb}/>
                    )       
                    }
                  if (this.state.film_genre_level === 'film_genre_level'){   
                    return(
                      <Fk lists={this.state.lists_film_genre_level} key_1={this.state.film_genre_level} fb={this.props.fb}/>
                    )       
                    }
      

      if (this.props.key_1 === 'hotel_info'){
      return (
        <div>
        <div className="container" style={{marginTop:'30px'}}>
            <h4 className="text-center ">Table: {this.props.key_1}</h4>  
            <h6 className="text-center ">Primary key:&nbsp;hotel_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Foreign key:&nbsp;city_name</h6>
            <h6 className="text-center ">The amount of data:&nbsp;<Amount lists ={this.props.lists} /></h6>
            <br/><table className="table table-striped table-hover">
     
                  <thead>
                  <tr className='warning'>
                  { hotel_info_c.map((v,i)=>
                    <th className="info" key = {i} className="text-center">{v}</th>)  }
                  </tr>
              </thead>
            <tbody>
              {this.props.lists.map((list,i)=>{
              return (         
                <tr key={i} className="text-center">
                <td>{list.hotel_id}</td>
                <td>{list.hotel_name}</td>
                <td><a style={{color:'CornflowerBlue'}} onClick={() => this.toShopDetails(list.city_name,"hotel_city")}>{list.city_name}</a></td>
                <td>{list.price_from}</td>
                <td>{list.lon}</td>
                <td>{list.lat}</td>
              </tr>
              )       
            })}
           
            </tbody>
            </table>
</div><br/></div>
      )
      }
      if(this.props.key_1 === 'hotel_city'){
        return (
          <div>
          <div className="container" style={{marginTop:'30px'}}>
              <h4 className="text-center">Table: {this.props.key_1}</h4>  
              <h6 className="text-center">Primary key:&nbsp;city_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Foreign key:&nbsp;city</h6>
              <h6 className="text-center ">The amount of data:&nbsp;<Amount lists ={this.props.lists} /></h6>
              <br/><table className="table table-striped table-hover">
              
                  <thead>
                  <tr className='warning'>
                    { hotel_city_c.map((v,i)=>
                      <th className="info" key = {i} className="text-center">{v}</th>)  }
                    </tr>
                </thead>
              <tbody>
                {this.props.lists.map((list,i)=>{
                return (         
                  <tr key={i} className="text-center">
                    <td>{list.city_id}</td>
                    <td><a style={{color:'CornflowerBlue'}}  onClick={() => this.toShopDetails(list.city,"hotel_info")}>{list.city}</a></td>
                    <td>{list.area}</td>
                  </tr>
              )       
              })}
             
              </tbody>
              </table>
  </div><br/></div>
        )}
       
        if(this.props.key_1 === 'film_info'){
          return (
            <div>
            <div className="container" style={{marginTop:'30px'}}>
                <h4 className="text-center">Table: {this.props.key_1}</h4>  
                <h6 className="text-center">Primary key:&nbsp;film_id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Foreign key:&nbsp;company&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Foreign key:&nbsp;genre_level</h6>
                <h6 className="text-center ">The amount of data:&nbsp;<Amount lists ={this.props.lists} /></h6>
                <br/><table className="table table-striped table-hover">
              
                  <thead>
                  <tr className='warning'>
                      { film_info_c.map((v,i)=>
                        <th className="info" key = {i} className="text-center">{v}</th>)  }
                      </tr>
                  </thead>
                <tbody>
                  {this.props.lists.map((list,i)=>{
                  return (         
                    <tr key={i} className="text-center">
                    <td>{list.film_id}</td>
                    <td>{list.name}</td>
                    <td><a style={{color:'CornflowerBlue'}}  onClick={() => this.toShopDetails(list.company,"film_company")}>{list.company}</a></td>
                    <td>{list.director}</td>
                    <td><a style={{color:'CornflowerBlue'}}  onClick={() => this.toShopDetails(list.genre_level,"film_genre_level")}>{list.genre_level}</a></td>
                    <td>{list.runtime}</td>
                    <td>{list.score}</td>
                    <td>{list.votes}</td>
                    <td>{list.star}</td>
                    <td>{list.writer}</td>
                    <td>{list.year}</td>
                  </tr>
                )       
                })}
               
                </tbody>
                </table>
    </div><br/></div>
          )}

        if(this.props.key_1 === 'film_company'){
          return (
            <div>
            <div className="container" style={{marginTop:'30px'}}>
                <h4 className="text-center">Table: {this.props.key_1}</h4>  
                <h6 className="text-center">Primary key:&nbsp;company</h6>
                <h6 className="text-center ">The amount of data:&nbsp;<Amount lists ={this.props.lists} /></h6>
                <br/><table className="table table-striped table-hover">
               
                  <thead>
                  <tr className='warning'>
                      { film_company_c.map((v,i)=>
                        <th className="info" key = {i} className="text-center">{v}</th>)  }
                      </tr>
                  </thead>
                <tbody>
                  {this.props.lists.map((list,i)=>{
                  return (         
                    <tr key={i} className="text-center">
                        <td>{list.company_id}</td>
                        <td><a style={{color:'CornflowerBlue'}}  onClick={() => this.toShopDetails(list.company,"film_info")}>{list.company}</a></td>
                        <td>{list.country}</td>
                      </tr>
                )       
                })}
               
                </tbody>
                </table>
    </div><br/></div>
          )}
        if(this.props.key_1 === 'film_genre_level'){
          return (
            <div>
            <div className="container" style={{marginTop:'30px'}}>
                <h4 className="text-center">Table: {this.props.key_1}</h4>  
                <h6 className="text-center">Primary key:&nbsp;id</h6>
                <h6 className="text-center ">The amount of data:&nbsp;<Amount lists ={this.props.lists} /></h6>
                <br/><table className="table table-striped table-hover">
                
                  <thead>
                  <tr className='warning'>
                      { film_genre_level_c.map((v,i)=>
                        <th className="info" key = {i} className="text-center">{v}</th>)  }
                      </tr>
                  </thead>
                <tbody>
                  {this.props.lists.map((list,i)=>{
                  return (         
                    <tr key={i} className="text-center">
                    <td><a style={{color:'CornflowerBlue'}} onClick={() => this.toShopDetails(list.id,"film_info2")}>{list.id}</a></td>
                    <td>{list.genre}</td>
                    <td>{list.rating}</td>
                  </tr>
                )       
                })}
               
                </tbody>
                </table>
    </div><br/></div>
          )}
        
        if(this.props.key_1 === 'world_city'){
          return (
            <div className="container" style={{marginTop:'30px'}}>
                <h4 className="text-center ">Table: {this.props.key_1}</h4>  
                <h6 className="text-center ">Primary key:&nbsp;ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Foreign key:&nbsp;CountryCode</h6>
                <h6 className="text-center ">The amount of data:&nbsp;<Amount lists ={this.props.lists} /></h6>
                <br/><table className="table table-striped table-hover">
                
                  <thead>
                    <tr className='warning'>
                      { world_city_c.map((v,i)=>
                        <th className="info" key = {i} className="text-center">{v}</th>)  }
                      </tr>
                  </thead>
                <tbody>
                  {this.props.lists.map((list,i)=>{
                  return (         
                      <tr key={i} className="text-center">
                        <td>{list.ID}</td>
                        <td>{list.Name}</td>
                        <td><a style={{color:'CornflowerBlue'}} onClick={() => this.toShopDetails(list.CountryCode,"world_country")}>{list.CountryCode }</a></td>
                        <td>{list.District}</td>
                        <td>{list.Population}</td>     
                      </tr>
                  )       
                })}
               
                </tbody>
                </table>
    <br/></div>)}

        if(this.props.key_1 === 'world_country'){
          return (
            <div>
            <div className="container" style={{marginTop:'30px'}}>
                <h4 className="text-center ">Table: {this.props.key_1}</h4>  
                <h6 className="text-center ">Primary key:&nbsp;Code</h6>
                <h6 className="text-center ">The amount of data:&nbsp;<Amount lists ={this.props.lists} /></h6>
                <br/><table className="table table-striped table-hover">
                
                  <thead>
                  <tr className='warning'>
                      { world_country_c.map((v,i)=>
                        <th className="info" key = {i} className="text-center">{v}</th>)  }
                      </tr>
                  </thead>
                <tbody>
                  {this.props.lists.map((list,i)=>{
                  return (         
                    <tr key={i} className="text-center">
                    <td><a  style={{color:'CornflowerBlue'}}  onClick={() => this.toShopDetails(list.Code,"world_city")}>{list.Code}</a></td>
                    <td>{list.Name}</td>
                    <td>{list.Continent}</td>
                    <td>{list.Region}</td>
                    <td>{list.SurfaceArea}</td>
                    <td>{list.IndepYear}</td>
                    <td>{list.Population}</td>
                    <td>{list.LifeExpectancy}</td>
                    <td>{list.GNP}</td>
                    <td>{list.GNPOld}</td>
                    <td>{list.LocalName	}</td>
                    <td>{list.GovernmentForm}</td>
                    <td>{list.HeadOfState}</td>
                    <td>{list.Capital}</td>
                    <td>{list.Code2}</td>
                  </tr>
                  )       
                })}
               
                </tbody>
                </table>
                    
            
    </div><br/></div>)}
       
        if(this.props.key_1 === 'world_countrylanguage'){
          return (<div>
            <div className="container" style={{marginTop:'30px'}}>
                <h4 className="text-center ">Table: {this.props.key_1}</h4> 
                <h6 className="text-center ">Primary key:&nbsp;[CountryCode,Language]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Forgien key:&nbsp;CountryCode</h6> 
                <h6 className="text-center ">The amount of data:&nbsp;<Amount lists ={this.props.lists} /></h6>
                <br/><table className="table table-striped table-hover">
                  <thead>
                  <tr className='warning'>
                      { world_countrylanguage_c.map((v,i)=>
                        <th className="info" key = {i} className="text-center">{v}</th>)  }
                      </tr>
                  </thead>
                <tbody>
                  {this.props.lists.map((list,i)=>{
                   return (         
                    <tr key={i} className="text-center">
                      <td><a style={{color:'CornflowerBlue'}}  onClick={() => this.toShopDetails(list.CountryCode,"world_country2")}>{list.CountryCode}</a></td>
                      <td>{list.Language}</td>
                      <td>{list.IsOfficial}</td>
                      <td>{list.Percentage}</td>
                    </tr>
                )       
                })}
               
                </tbody>
                </table>

            
    </div><br/></div>)}
              }
}
export default RawData2;