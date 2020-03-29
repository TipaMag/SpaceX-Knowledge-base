import React, { useState } from 'react'
import styled from 'styled-components'


const LounchCard = styled.div`
    padding: 5px;
    border: 2px solid #ccc;
    color: #fff;
    font-size: 14px;
`
const CardHeader = styled.div`
    display: flex;
    flex-flow: row nowrap;
`
const CardHeaderInfo = styled.div`
    display: flex;
    flex-flow: column;
    flex: 2 2;
    span {
        display: flex;
    }
`
const CardHeaderImgContainer = styled.div`
    flex: 1 1;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const StyledStrong = styled.strong`
    color: ${props => props.success ? 'lightgreen' : 'red'};
`
const CardBody = styled.div`
    
`
const CardDetails = styled.div`
    
`
const CardBtn = styled.button`
    display: block;
    width: 100%;
    background-color: lightblue;
    border: none;
    padding: 5px;
    outline: none;
    cursor: pointer;
`
const DetailsBtn = styled(CardBtn)`

`
const DetailsBody = styled.div`
    max-height: ${props => props.scrollHeight ? null : props.scrollHeight + 'px'};
    /* transform: ${props => props.show ? 'scaleY(1)' : 'scaleY(0)'}; */
    overflow: hidden;
    padding: 5px;
    transition: all 0.3s;
`


const LaunchCard = (props) => {
    const [details, setDetails] = useState({
        isOpen: false,
        scrollHeight: 0
    })

    let isOpen = (e) => {
        setDetails({
            isOpen: !details.isOpen,
            scrollHeight: e.target.scrollHeight
        })
        console.log(details)
    }

    return (
        <LounchCard>
            <CardHeader>
                <CardHeaderInfo>
                    <span><strong>Flight #:</strong>{props.item.flight_number}</span>
                    <span><strong>Launch Year:</strong>{props.item.launch_year}</span>
                    <span><strong>Rocket Name:</strong>{props.item.rocket.rocket_name}</span>
                    <span><strong>Rocket Type:</strong>{props.item.rocket.rocket_type}</span>
                    <StyledStrong success={props.item.launch_success}>{props.item.launch_success ? 'Launch Successful'
                        : (props.item.launch_success === null) ? 'No Launch'
                            : 'Launch Failure'}
                    </StyledStrong>
                </CardHeaderInfo>
                <CardHeaderImgContainer>
                    <img src={props.item.links.mission_patch} alt='mission_patch'></img>
                </CardHeaderImgContainer>
            </CardHeader>
            <CardBody>
                <CardDetails>
                    <DetailsBtn onClick={(e) => isOpen(e)}>Details</DetailsBtn>
                    <DetailsBody show={details.scrollHeight}>{props.item.details}</DetailsBody>
                </CardDetails>
            </CardBody>
        </LounchCard>
    )
}

export default LaunchCard