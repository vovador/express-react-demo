import React, {useEffect} from 'react';
import './App.css';
const API_URL = 'http://localhost:5000/api'

function App() {
  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(gotten => {
      console.log(gotten);
    })
  }, [])
  return (
    <h2>Home page 3</h2>
  );
}

export default App;
