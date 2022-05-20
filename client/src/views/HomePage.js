import React, { useState, useEffect } from "react";
import {Link} from "@reach/router";
import NavBar from "../components/navbar";
import {RotateCircleLoading} from 'react-loadingg';
import botwPic from "../botw.png";
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
  
  if(loading) return <RotateCircleLoading color="whitesmoke"/> ;
  
  if(error) return <pre>{JSON.stringify(error,null, 2)}</pre>;
  if(!data) return null;
     {
      
    }
    return (
      <div className="App">
        No Data
      </div>
    );
  }
function HomePage(){
    return(
      
        <div className="App">
          <NavBar></NavBar>
          <div className="home"> 
          
          </div>
          <div className="home">
<h1>Welcome to BOTWDB!</h1>
</div>
<div className="home">
<p>Here you can find all the data from the popular Nintendo Switch game: "The Legend of Zelda: Breath of the Wild".  This application was created using the Hyrule Compendium API.   </p>
</div>

        </div>
    )
};
export default HomePage;