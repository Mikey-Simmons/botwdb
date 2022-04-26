import React, { useState, useEffect } from "react";
import './App.css';


//https://api.github.com/users/mikey-simmons
function App({ num }) {
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
        
        <h1>{data.data.name.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</h1>
        <img src={data.data.image}></img>
        <p>{data.data.description}</p>
        <h3>{data.data.common_locations.join(', ')}</h3>
        
        <footer>No. {data.data.id}</footer>
      </div>
    )
  }
  return (
    <div className="App">
      No Data
    </div>
  );
}

export default App;
