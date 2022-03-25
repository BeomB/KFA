import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import GoalKeeper from './GoalKeeper'



const RightSide = () => {

    const [position, setPosition] = useState("Null")

    useEffect(() => {
        console.log(position)
    },)

    return (
        <>
            <Accordion>
                <Accordion.Item eventKey="0" className='accordion'>
                    <Accordion.Header onClick={() => { setPosition(position => "GK");}}>GoalKeeper</Accordion.Header>
                    <Accordion.Body><GoalKeeper /></Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className='accordion'>
                    <Accordion.Header onClick={() => { setPosition((position => "DF")); }}>Defender</Accordion.Header>
                    <Accordion.Body>-------------</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className='accordion'>
                    <Accordion.Header onClick={() => { setPosition((position => "MF")); }}>Midfielder</Accordion.Header>
                    <Accordion.Body>--------------</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className='accordion'>
                    <Accordion.Header onClick={() => { setPosition((position => "FW"));  }}>Foward</Accordion.Header>
                    <Accordion.Body>----------</Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </>
    )
}

export default RightSide
