import React, { Component } from 'react'
import Amount from './amount'

export default class Pk extends Component {
    render() {
        let world_city_c = ['ID', 'Name', 'CountryCode', 'District', 'Population']
        let world_country_c = ['Code', 'Name', 'Continent', 'Region', 'SurfaceArea', 'IndepYear', 'Population', 'LifeExpectancy', 'GNP', 'GNPOld', 'LocalName', 'GovernmentForm', 'HeadOfState', 'Capital', 'Code2']
        let world_countrylanguage_c = ['CountryCode', 'Language', 'IsOfficial', 'Percentage']
        let hotel_info_c = ["hotel_id","hotel_name","city_name","price_from","lon","lat"]
        let hotel_city_c = ["city_id", "city","area"]

        let film_info_c = ["film_id" ,"name","company", "director", "genre_level" ,"runtime","score","votes","star","writer","year"]
        let film_genre_level_c = ["id","genre","rating"]
        let film_company_c = ["company_id","company","country"]
        if(this.props.key_1 === 'world_city'){
            return (
              <div>
              <div className="container" style={{marginTop:'30px'}}>
              <h4 className="text-center ">Table: {this.props.key_1}</h4>  
                <h6 className="text-center ">Primary key:&nbsp;ID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Foreign key:&nbsp;CountryCode</h6>
                <h6 className="text-center ">The amount of data:&nbsp;<Amount lists ={this.props.lists} /></h6>
                <br/><table className="table table-striped table-hover">
                  <thead>
                  <tr className='warning'>
                        { world_city_c.map((v,i)=>
                          <th  className="info" key = {i} className="text-center">{v}</th>)  }
                        </tr>
                    </thead>
                  <tbody>
                    {this.props.lists.map((list,i)=>{
                    return (         
                        <tr key={i} className="text-center">
                          <td>{list.ID}</td>
                          <td>{list.Name}</td>
                          <td><a href="#">{list.CountryCode }</a></td>
                          <td>{list.District}</td>
                          <td>{list.Population}</td>     
                        </tr>
                    )       
                  })}
                 
                  </tbody>
                  </table>
                      
              
      </div></div>)}
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
                <td><a href="#">{list.Code}</a></td>
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
                  <th  className="info" key = {i} className="text-center">{v}</th>)  }
                </tr>
            </thead>
          <tbody>
            {this.props.lists.map((list,i)=>{
             return (         
              <tr key={i} className="text-center">
                <td><a href="#">{list.CountryCode}</a></td>
                <td>{list.Language}</td>
                <td>{list.IsOfficial}</td>
                <td>{list.Percentage}</td>
              </tr>
          )       
          })}
         
          </tbody>
          </table>

      
</div><br/></div>)}
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
              <td><a href="#">{list.city_name}</a></td>
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
                  <td><a href="#" >{list.city}</a></td>
                  <td>{list.area}</td>
                </tr>
            )       
            })}
           
            </tbody>
            </table>
</div><br/></div>
      )}
     
      if(this.props.key_1 === 'film_info'){
          console.log('kaka')
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
                  <td><a href="#">{list.company}</a></td>
                  <td>{list.director}</td>
                  <td><a href="#">{list.genre_level}</a></td>
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
                      <td><a href="#" >{list.company}</a></td>
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
                  <td><a href="#">{list.id}</a></td>
                  <td>{list.genre}</td>
                  <td>{list.rating}</td>
                </tr>
              )       
              })}
             
              </tbody>
              </table>
  </div><br/></div>
        )}
        }

    }

