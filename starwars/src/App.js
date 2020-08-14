import React, { useState, useEffect } from 'react';
import axios from "axios"
import './App.css';
// import makeCharacterCards from "./components/MakeCharacterCards"
import Character from "./components/Character"

const App = () => {

  const [charactersList, setCharactersList] = useState([])

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then(res => {
      setCharactersList(res.data.results)
      console.log("results:", res.data)
    })
    .catch(err => {
      console.log(err)
    })
    // return () => {does it make sense to clean up?}
  }, [])

  // console.log("charList:", charactersList)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {charactersList.map(char => {
        return <Character key={char} />
      })}
    </div>
  );
}

export default App;
