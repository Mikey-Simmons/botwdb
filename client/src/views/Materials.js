import React, { useState, useEffect } from "react";
import NavBar  from "../components/navbar";
import {RotateCircleLoading} from 'react-loadingg';


function Materials() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    
    setLoading(true);
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/materials`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

if(loading) return <RotateCircleLoading color="whitesmoke"/> ;

if(error) return <pre>{JSON.stringify(error,null, 2)}</pre>;
if(!data) return null;

   {
    
     //Sort Data Alphabetically by name
     data.data.sort((a,b)=> (a.name > b.name) ? 1: -1)
     
    return (
    <div className="App">
      <NavBar></NavBar>
      <div className="MyTitle">
      <h1>Materials</h1>
      </div>
      <div className="table">
      
        <table class="table table-bordered  table-striped">
        <thead>
          <tr>
            <th scope="col">Monster</th>
            <th scope="col">Image</th>
            <th scope="col">Description</th>
            <th scope="col">Hearts Recovered</th>
            <th scope="col">Cooking Effect</th>
            <th scope="col">Common Locations</th>
            
          </tr>
        </thead>
        <tbody>
       
        {data.data.map(({name, image, description, common_locations, hearts_recovered, cooking_effect }) =>(
           <tr>
             
             <th scope="row">{name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</th>
             <td><img src={image}></img></td>
             <td>{description}</td>
             <td>{hearts_recovered}</td>
             <td>{cooking_effect.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</td>
             <td>{common_locations}</td>
           </tr>
          
          
          
          
          
          
        ))}
        </tbody>
        </table>
       </div>
       
      </div>
      
    )

  }
  return (
    <div className="App">
      No Data
    </div>
  );
}

export default Materials;
