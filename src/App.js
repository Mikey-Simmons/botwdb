import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  return (
    <div className="App">
     <h1>BOTWDB</h1>
    </div>
  );
}

export default App;
