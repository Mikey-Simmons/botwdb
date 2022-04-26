import React, { useState, useEffect } from "react";
import './App.css';
import {Router} from "@reach/router";
import Random from "./views/Random";
import Test1 from "./views/testing";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var myRandomNum = getRandomInt(387);
const App = () => {
  return (
    <Router>
      <Test1 path= "/" />
      <Random num={myRandomNum} path="/random"/>
    </Router>
  );
};



export default App;
