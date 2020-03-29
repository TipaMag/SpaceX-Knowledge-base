import React from 'react'
import styled from 'styled-components'
import LaunchCard from './LaunchCard/LaunchCard'

const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
`


const Launches = (props) => {

    return(
        <CardsContainer>
            {props.launches.map((item, index) =>
                <LaunchCard key={index} item={item}/>)
            }
        </CardsContainer>
    )
}

export default Launches