import React, { useState, useEffect } from "react";
import NavBar  from "../components/navbar";
import {RotateCircleLoading} from "react-loadingg"

function Treasure(){
    const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    
    setLoading(true);
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/treasure`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);
  if(loading) return <h1><RotateCircleLoading color="whitesmoke"/></h1>;
  if(error) return <pre>{JSON.stringify(error,null, 2)}</pre>;
  if(!data) return null;
  data.data.sort((a,b)=> (a.name > b.name) ? 1: -1)
  return(
    <div className="App">
      <NavBar></NavBar>
      <div className="MyTitle">
      <h1>Treasure</h1>
      </div>
      <div className="table">
      
        <table class="table table-bordered  table-striped">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Image</th>
            <th scope="col">Description</th>
            <th scope="col">Drops</th>
            
            
            <th scope="col">Common Locations</th>
          </tr>
        </thead>
        <tbody>
       
        {data.data.map(({name, image, description, common_locations,drops }) =>(
           <tr>
             
             <th scope="row">{name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</th>
             <td><img src={image}></img></td>
             <td>{description}</td>
             <td>{drops.join(', ').replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</td>
             
             

             
             <td>{common_locations&&common_locations.join(", ")&&common_locations.join(", ")}</td>
           </tr>
          
          
          
          
          
          
        ))}
        </tbody>
        </table>
       </div>
      </div>

  )}
export default Treasure;