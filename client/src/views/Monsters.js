import React, { useState, useEffect } from "react";
import NavBar  from "../components/navbar";



function Random({ num }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    
    setLoading(true);
    fetch(`https://botw-compendium.herokuapp.com/api/v2/category/monsters`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

if(loading) return <h1>Loading...</h1>;

if(error) return <pre>{JSON.stringify(error,null, 2)}</pre>;
if(!data) return null;

   {
    return (
      
      <div className="App">
        <NavBar></NavBar>
        <h1>Monsters</h1>
        {data.data.map(({name, image, description, common_locations, drops, id }) =>(
          <div>
          <h1>{name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</h1>
          <img src={image}></img>
          <p>{description}</p>
          <h2>Locations:</h2>
          <h3>{common_locations && common_locations.join(", ")}</h3>
          <h2>Drops:</h2>
          <h3>{drops && drops.join(", ")}</h3>
         <p>No. {id}</p> 
          </div>
        ))}
       
      </div>
    )

  }
  return (
    <div className="App">
      No Data
    </div>
  );
}

export default Random;
