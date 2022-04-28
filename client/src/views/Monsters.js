import React, { useState, useEffect } from "react";
import NavBar  from "../components/navbar";



function Random({ num }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortState, setSortState] = useState("none");
  const sortMethods = {
    none: { method: (a, b) => null },
    ascending: { method: undefined },
    descending: { method: (a, b) => (a > b ? -1 : 1) },
  };
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
      <div className="Monsters">
        
        
        
        {data.data.map(({name, image, description, common_locations, drops, id }) =>(
          
          <div className="Monster">
            <div class="card" >
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</h5>
    <p class="card-text">{description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
         
          
          
          
          
          </div>
        ))}
       
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

export default Random;
