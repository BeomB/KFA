import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import GoalKeeper from './GoalKeeper'
import axios from 'axios';
import Defender from './Defender';
import Midfielder from './Midfielder';
import Foward from './Foward';



const RightSide = () => {

    const [position, setPosition] = useState("DF")
    const [players, setPlayers] = useState("")

   
    const setField = () =>
    {
        setPosition(position => "GK");
    }

    return (
        <>
            <Accordion>
                <Accordion.Item eventKey="0" className='accordion'>
                    <Accordion.Header onClick={() => { setField() }}>GoalKeeper</Accordion.Header>
                    <Accordion.Body><GoalKeeper/></Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className='accordion'>
                    <Accordion.Header onClick={() => { setPosition((position => "DF")); }}>Defender</Accordion.Header>
                    <Accordion.Body><Defender/></Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className='accordion'>
                    <Accordion.Header onClick={() => { setPosition((position => "MF")); }}>Midfielder</Accordion.Header>
                    <Accordion.Body><Midfielder/></Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className='accordion'>
                    <Accordion.Header onClick={() => { setPosition((position => "FW")); }}>Foward</Accordion.Header>
                    <Accordion.Body><Foward/></Accordion.Body>
                </Accordion.Item>

            </Accordion>
            
        </>
    )
}

export default RightSide
