import React, { useState, useEffect } from "react";
import './App.css';
import {Router} from "@reach/router";
import Random from "./views/Random";
import Home from "./views/HomePage";
import Monsters from "./views/Monsters";
import Equipment from "./views/Equipment";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var myRandomNum = getRandomInt(387);
const App = () => {
  return (
    <div>
      
    <Router>
      <Home num={myRandomNum} path= "/" />
      <Random num={myRandomNum} path="/random"/>
      <Monsters path="/monsters"></Monsters>
<Equipment path="/equipment"/>
    </Router>
    </div>
  );
};



export default App;
