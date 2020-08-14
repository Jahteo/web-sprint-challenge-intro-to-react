import React, { useState, useEffect } from 'react';
import axios from "axios"
import styled from "styled-components"
import './App.css';
import Character from "./components/Character"

const StyledDetails = styled.div`
/* * {border: solid black 1px;} */

   display: flex;
   flex-wrap: wrap;
   /* flex-direction: column; */

`

const App = () => {
  const [charactersList, setCharactersList] = useState([])

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/")
    .then(res => {
      setCharactersList(res.data.results)
      // console.log("results:", res.data.results)
    })
    .catch(err => {console.log(err)})
  }, [])

  console.log("charList:", charactersList)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <StyledDetails >
      {charactersList.map(char => {
        return <Character key={char.name} char={char} />
      })}
      </StyledDetails>
    </div>
  );
}

export default App;
