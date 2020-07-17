// Write your Character component here
import React from 'react'
import styled from 'styled-components'

//component styling
const StyledMovie = styled.div`
    width: 15%;
    border: 1px solid gray;
    border-radius: 10px;
    background-color: white;
    margin: 0 auto; 

`

const Movie = props => {

    const { star } = props

    return (
        
            <StyledMovie>
            <h2>movie</h2>
        </StyledMovie>
        
        )
}

export default Movie