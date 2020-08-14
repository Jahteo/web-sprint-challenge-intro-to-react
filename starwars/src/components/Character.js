import React from "react"
import styled from "styled-components"

const StyledDetails = styled.div`
    border: solid black 1px;
    /* display: flex;
    justify-content: space-evenly; */
    margin: 2% auto;
    padding: 2%;
    h1 {

    }
`


const Character = ({char}) => {

    return (
        <StyledDetails>
            <h2>Name: {char.name}</h2>
            <p>height:mass (ratio) = {char.height}:{char.mass} ({(char.height / char.mass).toPrecision(4)}) </p>
        </StyledDetails>

    )
}

export default Character;