import React from "react"
import Character from "./Character"


const makeCharacterCards = ({charactersList}) => {
    const createCards = (charactersList) = {
        charactersList.results.map((char) => {
            return <p>testing map </p>
        })
    }


    return (
        <div>
            {createCards }
        </div>
    )

}

export default makeCharacterCards