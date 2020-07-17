// Write your Character component here
import React, { useState } from 'react'
import styled from 'styled-components'

//component styling
const StyledMovie = styled.div`
    width: 30%;
    border: 1px solid gray;
    border-radius: 10px;
    background-color: white;
    margin: 0 auto; 

`

const Movie = props => {

    const { star } = props
    const [movie, setMovie] = useState('movie')


    if (star === "1") {
        return setMovie("A New Hope")
    } else if (star === "2") {
        setMovie("Empire Strikes Back")
    } else if (star === "3") {
        setMovie("Return of the Jedi")
    } else if (star === "4") {
        setMovie("The Phantom Menace")
    } else if (star === "5") {
        setMovie("Attack of the Clones")
    } else if (star === "6") {
        setMovie("Revenge of the Sith")
    }


    return (

        <StyledMovie>
            <h3>{movie}</h3>
        </StyledMovie>

    )
}

export default Movie