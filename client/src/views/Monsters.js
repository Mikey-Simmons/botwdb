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
     data.data.sort((a,b)=> (a.name > b.name) ? 1: -1)
    return (
    <div className="App">
      <NavBar></NavBar>
      
      <div className="table">
      <h1>Monsters</h1>
        <table class="table  table-striped">
        <thead>
          <tr>
            <th scope="col">Monster</th>
            <th scope="col">Image</th>
            <th scope="col">Description</th>
            <th scope="col">Drops:</th>
            <th scope="col">Common Locations</th>
          </tr>
        </thead>
        <tbody>
       
        {data.data.map(({name, image, description, common_locations, drops, id }) =>(
           <tr>
             
             <th scope="row">{name}</th>
             <td><img src={image}></img></td>
             <td>{description}</td>
             <td>{drops}</td>
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

export default Random;
