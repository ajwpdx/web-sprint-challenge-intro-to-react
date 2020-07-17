// Write your Character component here
import React from 'react'
import styled from 'styled-components'

//component styling
const StyledCharacter = styled.div`
    width: 70%;
    border: 1px solid gray;
    background-color: white;
    margin: 0 auto; 

`

const Character = props => {

    const { info } = props

    return (
        <StyledCharacter>
            <h2>{info.name}</h2>
            <div className='info-container'>
                <p>Gender: {info.gender}</p>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
                <p>Birth Year: {info.birth_year}</p>

            </div>
        </StyledCharacter>)
}

export default Character