import React, { useState, useEffect } from "react";
import NavBar from "../components/navbar";



function Random({ num }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (!num) return;
    setLoading(true);
    fetch(`https://botw-compendium.herokuapp.com/api/v2/entry/${num}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [num]);

if(loading) return <h1>Loading...</h1>;

if(error) return <pre>{JSON.stringify(error,null, 2)}</pre>;
if(!data) return null;
console.log(data.data.name)
   {
    return (
      <div className="App">
        <NavBar></NavBar>
        <h1>{data.data.name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</h1>
        <img src={data.data.image}></img>
        <p>{data.data.description}</p>
        <h3>{data.data.common_locations.join(', ')}</h3>
        
        <footer>No. {data.data.id}</footer>
        <form action="/random">
<button type="submit" >Random</button>
</form>
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
