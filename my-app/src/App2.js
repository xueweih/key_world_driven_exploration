import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase';
import RawData2 from './RawData2';
import './css/bootstrap.css';
import './style.css'

//import axios from 'axios' ;
//import firebase from 'firebase/app';

export default class App2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue:"",
            selectOption: "world",
            database: ['film','hotel','world'],  
            lists_hotel_info: [],lists_hotel_city:[],lists_hotel_score:[],
            lists_film_info:[],lists_film_company:[],lists_film_genre_level:[],
            lists_world_city:[],lists_world_country:[],lists_world_countrylanguage:[],

            hotel_info:'',hotel_city:'',hotel_score:'',
            film_info:'',film_company:'',film_genre_level:'',
            world_city:'',world_country:'',world_countrylanguage:'', 
            linkRef:''


        }}

        getValue=(event)=>{
            console.log(event.target.value);
            this.setState({
              selectOption:event.target.value
            })
          }
        
            handleInput(e){
                this.setState({
                  inputValue:e.target.value,
                })
              } 

        componentDidMount(){
        const firebaseConfig = {
            //apiKey: "AIzaSyCh4Be6lAWO2P3JczmRJEg_0fhIPec3zis",
            //authDomain: "inf551-project-6c18d.firebaseapp.com",
            //databaseURL: "https://inf551-project-6c18d.firebaseio.com",
            //projectId: "inf551-project-6c18d",
            //storageBucket: "inf551-project-6c18d.appspot.com",
            //messagingSenderId: "569250123011",
            //appId: "1:569250123011:web:f573c623f448773ee42d36",
            //measurementId: "G-G531PW3WF1"
            apiKey: "AIzaSyBSn9JLrrFwfOn5Ky7SviIb9V6_45No-T0",
authDomain: "inf551-project-fccc4.firebaseapp.com",
databaseURL: "https://inf551-project-fccc4.firebaseio.com",
projectId: "inf551-project-fccc4",
storageBucket: "inf551-project-fccc4.appspot.com",
messagingSenderId: "588023437147",
appId: "1:588023437147:web:312734ea9adcb56ea2ac7e",
measurementId: "G-1NSNB3MSDC"
        } ;
        firebase.initializeApp(firebaseConfig);
        const linkRef_ = firebase.database().ref()
        this.setState({
          linkRef:linkRef_
        })

    }
    index(table,key){
        var dict = {}
        for(var row in table){
            for(var item in table[row] ){	
                for (var word in key){
                     if(table[row][item].toUpperCase().match(key[word].toUpperCase())){
                         if (dict[row]){
                              dict[row] += 1
                         }else{
                             dict[row] =1
                         }
             }
        }　　}}
    // Create items array
    var items = Object.keys(dict).map(function(key) {
      return [key, dict[key]];
    });
    // Sort the array based on the second element
    items.sort(function(first, second) {
      return second[1] - first[1];
    });
    var arr= []
    for (let [key, value] of Object.entries(items)) {
      arr.push(value[0])
    }
    // Create a new array with only the first 5 items
    var dict_new = []
    for(var row in table){
        for (var i in arr){
            if (arr[i] === row){
                dict_new[i] = table[row]
            }
        }
    }
    return(dict_new)
    
    }

    search(){
        const tableIndex_world = ['/city_invert_index/','/country_invert_index/','/countrylanguage_invert_index/','/hotel_city_invert_index/','/hotel_info_invert_index/','/film_company_invert_index/','/film_genre_level_invert_index/','/film_info_invert_index/'];
        let keyWords = this.state.inputValue.split(" ");
        var world_country_list = [];
        var world_city_list = [];
        var world_countrylanguage_list = [];

        var hotel_city_list = [];
        var hotel_info_list = [];

        var film_company_list = [];
        var film_genre_level_list = [];
        var film_info_list = []
        

        //keywords
        for (var j = 0;j <keyWords.length;j++){
            var keyWord = keyWords[j]
        
        for (var i in tableIndex_world){
        var ref = firebase.database().ref(this.state.selectOption+tableIndex_world[i]+keyWord);
        ref.on("value", function(snapshot) {               
            snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            

            //world_city
            if(childData.table === "world_city"){
                var rref = firebase.database().ref("world/"+childData.table);
                rref.orderByChild('ID').equalTo(String(childData.key)).on("value", function(snapshot) {
                    var childData_2 = snapshot.val();
                    
                    var start = Number(Object.keys(childData_2)[0]);var end = Number(Object.keys(childData_2)[0]) + Object.keys(childData_2).length-1
                    for (var j = start; j <= end;j++){
                        if(typeof(childData_2[j])!='undefined'){
                            world_city_list[j] = {'ID':childData_2[j].ID,'Name':childData_2[j].Name,'CountryCode':childData_2[j].CountryCode,'District':childData_2[j].District,'Population':childData_2[j].Population}
                            }
                }
                });}

            //world_country
            if(childData.table === "world_country"){
                var rref = firebase.database().ref("world/"+childData.table);
                rref.orderByChild('Code').equalTo(String(childData.key)).on("value", function(snapshot) {
                    var childData_2 = snapshot.val();
                    var start = Number(Object.keys(childData_2)[0]);var end = Number(Object.keys(childData_2)[0]) + Object.keys(childData_2).length-1
                    for (var j = start; j <= end;j++){
                        if(typeof(childData_2[j])!='undefined'){
                            world_country_list[j] = {Code:childData_2[j].Code,Name:childData_2[j].Name,Continent:childData_2[j].Continent,Region:childData_2[j].Region,SurfaceArea:childData_2[j].SurfaceArea,
                                IndepYear:childData_2[j].IndepYear,Population:childData_2[j].Population,LifeExpectancy:childData_2[j].LifeExpectancy,
                                GNP:childData_2[j].GNP,GNPOld:childData_2[j].GNPOld,LocalName:childData_2[j].LocalName,GovernmentForm:childData_2[j].GovernmentForm,HeadOfState:childData_2[j].HeadOfState,
                                Capital:childData_2[j].Capital,Code2:childData_2[j].Code2}
                            }
                }});}

            //world countrylanguage
            if(childData.table === "world_countrylanguage"){
                var rref = firebase.database().ref("world/"+childData.table);
                rref.orderByChild('CountryCode').equalTo(childData.key[0]).on("value", function(snapshot) {
                var childData_2 = snapshot.val();
                var start = Number(Object.keys(childData_2)[0]);var end = Number(Object.keys(childData_2)[0]) + Object.keys(childData_2).length-1
                    for (var j = start; j <= end;j++){
                        if(typeof(childData_2[j])!='undefined'){
                            var i = j
                            if(childData_2[i].Language===childData.key[1]){                          
                               world_countrylanguage_list[i] = {CountryCode:childData_2[i].CountryCode,Language:childData_2[i].Language,IsOfficial:childData_2[i].IsOfficial,Percentage:childData_2[i].Percentage};
            }}}}); }

            //hotel_city
            if(childData.table === "hotel_city"){
                var rref = firebase.database().ref("hotel/"+childData.table);
                rref.orderByChild('city_id').equalTo(String(childData.key)).on("value", function(snapshot) {
                var childData_2 = snapshot.val();
                var start = Number(Object.keys(childData_2)[0]);var end = Number(Object.keys(childData_2)[0]) + Object.keys(childData_2).length-1
                    for (var j = start; j <= end;j++){
                        if(typeof(childData_2[j])!='undefined'){
                            var i = j                
                            hotel_city_list[i] = {city_id:childData_2[i].city_id,city:childData_2[i].city,area:childData_2[i].area};
                          
            }}}); }

            //hotel_info
            if(childData.table === "hotel_info"){
                var rref = firebase.database().ref("hotel/"+childData.table);
                rref.orderByChild('hotel_id').equalTo(String(childData.key)).on("value", function(snapshot) {
                var childData_2 = snapshot.val();
                var start = Number(Object.keys(childData_2)[0]);var end = Number(Object.keys(childData_2)[0]) + Object.keys(childData_2).length-1
                    for (var j = start; j <= end;j++){
                        if((childData_2[j].length)!=0){
                            var i = j               
                            hotel_info_list[i] = {hotel_id:childData_2[i].hotel_id,hotel_name:childData_2[i].hotel_name,city_name:childData_2[i].city_name,price_from:childData_2[i].price_from,lon:childData_2[i].lon,lat:childData_2[i].lat};                      
            
                        }}
        }); }
        //film_company
        if(childData.table === "film_company"){
            var rref = firebase.database().ref("film/"+childData.table);
            rref.orderByChild('company_id').equalTo(String(childData.key)).on("value", function(snapshot) {
                var childData_2 = snapshot.val();
                var start = Number(Object.keys(childData_2)[0]);var end = Number(Object.keys(childData_2)[0]) + Object.keys(childData_2).length-1
                for (var j = start; j <= end;j++){
                    if(typeof(childData_2[j])!='undefined'){
                        film_company_list[j] = {company_id:childData_2[j].company_id,company:childData_2[j].company,country:childData_2[j].country}
                        }
            }
            });}

               //film_info
        if(childData.table === "film_info"){
            var rref = firebase.database().ref("film/"+childData.table);
            rref.orderByChild('film_id').equalTo(String(childData.key)).on("value", function(snapshot) {
                var childData_2 = snapshot.val();
                var start = Number(Object.keys(childData_2)[0]);var end = Number(Object.keys(childData_2)[0]) + Object.keys(childData_2).length-1
                for (var j = start; j <= end;j++){
                    if(typeof(childData_2[j])!='undefined'){
                        film_info_list[j] = {film_id:childData_2[j].film_id,name:childData_2[j].name,company:childData_2[j].company,director:childData_2[j].director,genre_level:childData_2[j].genre_level,runtime:childData_2[j].runtime,score:childData_2[j].score,
                        votes:childData_2[j].votes,star:childData_2[j].star,writer:childData_2[j].writer,year:childData_2[j].year}
                        }
            }
            });}

               //film_genre_level
        if(childData.table === "film_genre_level"){
            var rref = firebase.database().ref("film/"+childData.table);
            rref.orderByChild('id').equalTo(String(childData.key)).on("value", function(snapshot) {
                var childData_2 = snapshot.val();
                var start = Number(Object.keys(childData_2)[0]);var end = Number(Object.keys(childData_2)[0]) + Object.keys(childData_2).length-1
                for (var j = start; j <= end;j++){
                    if(typeof(childData_2[j])!='undefined'){
                        film_genre_level_list[j] = {id:childData_2[j].id,genre:childData_2[j].genre,rating:childData_2[j].rating}
                        }
            }
            });}


            })
        
    })}}
 
    if(world_city_list.length !== 0){
    world_city_list = this.index(world_city_list,keyWords) 
     this.setState({ lists_world_city:world_city_list,
                     world_city:'world_city' }
     ); 
     }

    if(world_country_list.length !== 0){
        world_country_list = this.index(world_country_list,keyWords) 
        this.setState({ lists_world_country:world_country_list,
                        world_country:'world_country' }
         ); 
        }
    if(world_countrylanguage_list.length !== 0){
         world_countrylanguage_list = this.index(world_countrylanguage_list,keyWords) 
        this.setState({ lists_world_countrylanguage:world_countrylanguage_list,
                         world_countrylanguage:'world_countrylanguage' }
             ); 
            }
    
    if(hotel_city_list.length !== 0){
        hotel_city_list = this.index(hotel_city_list,keyWords) 
        this.setState({ lists_hotel_city:hotel_city_list,
            hotel_city:'hotel_city' }
        ); 
    }
    if(hotel_info_list.length !== 0){
         hotel_info_list = this.index(hotel_info_list,keyWords) 
        this.setState({ lists_hotel_info:hotel_info_list,
            hotel_info:'hotel_info' }
        ); console.log(hotel_info_list)
    }
    if(film_info_list.length !== 0){
        film_info_list = this.index(film_info_list,keyWords) 
        this.setState({ lists_film_info:film_info_list,
            film_info:'film_info' }
        ); 
    }
    if(film_company_list.length !== 0){
       film_company_list = this.index(film_company_list,keyWords) 
        this.setState({ lists_film_company:film_company_list,
            film_company:'film_company' }
        ); 
    }
    if(film_genre_level_list.length !== 0){
       film_genre_level_list = this.index(film_genre_level_list,keyWords) 
        this.setState({ lists_film_genre_level:film_genre_level_list,
            film_genre_level:'film_genre_level' }
        ); 
    }
                 
}
refreshPage() {
  window.location.reload(false);
}


    render() {
        let message_world_city
        let message_world_country
        let message_world_countrylanguage
        
        let message_hotel_info
        let message_hotel_city

        let message_film_info
        let message_film_company
        let message_film_genre_level

        if (this.state.world_city === 'world_city'){ 
        message_world_city = (
          
          <RawData2 lists={this.state.lists_world_city} key_1={this.state.world_city} fb={this.state.linkRef}/>
          
          
        )}
        if (this.state.world_country === 'world_country'){ 
          message_world_country = (
            <RawData2 lists={this.state.lists_world_country} key_1={this.state.world_country} fb={this.state.linkRef}/>
          )}
        if (this.state.world_countrylanguage === 'world_countrylanguage'){ 
            message_world_countrylanguage = (
              <RawData2 lists={this.state.lists_world_countrylanguage} key_1={this.state.world_countrylanguage} fb={this.state.linkRef}/>
            )}

         if (this.state.hotel_city === 'hotel_city'){
              message_hotel_city = (
                <RawData2 lists={this.state.lists_hotel_city} key_1={this.state.hotel_city} fb={this.state.linkRef}/>
              )}
         if (this.state.hotel_info === 'hotel_info'){
                message_hotel_info = (
                  <RawData2 lists={this.state.lists_hotel_info} key_1={this.state.hotel_info} fb={this.state.linkRef}/>
                )}
        if (this.state.film_info === 'film_info'){
                  message_film_info = (
                    <RawData2 lists={this.state.lists_film_info} key_1={this.state.film_info} fb={this.state.linkRef}/>
                  )}
       if (this.state.film_company === 'film_company'){
                    message_film_company = (
                      <RawData2 lists={this.state.lists_film_company} key_1={this.state.film_company} fb={this.state.linkRef}/>
                    )}
                    if (this.state.film_genre_level === 'film_genre_level'){
                      message_film_genre_level = (
                        <RawData2 lists={this.state.lists_film_genre_level} key_1={this.state.film_genre_level} fb={this.state.linkRef}/>
                      )}
    return(
<div className="container" style={{marginTop:'30px'}}>
<div className="header">
		<div className="container" >
			<div className="header-info navbar-left wow fadeInLeft animated" >
				<p style={{fontSize:'20px'}}><span className="glyphicon glyphicon-search" aria-hidden="false"></span>Keyword-Driven Exploration of Relational Data Using Firebase</p>
			</div>				
			
		</div>	
	</div>
<br/>
<h5>Select Database</h5><br/>
              <select className="custom-select" value={this.state.selectOption} onChange={(e)=>this.getValue(e)}>
            {
              this.state.database.map((ele,index)=>{
                return(
                  <option key={index}>{ele}</option>
                )
              })
            }
          </select>
          <br/> <br/> 
              <input placeholder="please enter key words" type="text" name="name" className="form-control"
                      value={ this.state.inputValue }
                      onChange={ this.handleInput.bind(this) } 
              />
              <button className="btn btn-success" onClick={this.search.bind(this)}>submit</button>   
  
              <button className="btn btn-primary" style={{margin:'20px'}} onClick={this.refreshPage} >refresh</button>   
                      {message_world_city}
                      {message_world_country}
                      {message_world_countrylanguage}
                      {message_hotel_city}  
                      {message_hotel_info} 
                      {message_film_company} 
                      {message_film_info}  
                      {message_film_genre_level}
                     
              </div>   

    )}
}
