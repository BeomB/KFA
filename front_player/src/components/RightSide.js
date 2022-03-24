import React from 'react'
import { Accordion } from 'react-bootstrap'
import GoalKeeper from './GoalKeeper'


const RightSide = () => {


    return (
        <>
            <Accordion >
                <Accordion.Item eventKey="0" className='accordion'>
                    <Accordion.Header>GoalKeeper</Accordion.Header>
                    <Accordion.Body><GoalKeeper/></Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" className='accordion'>
                    <Accordion.Header>Defender</Accordion.Header>
                    <Accordion.Body>-------------</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" className='accordion'>
                    <Accordion.Header>Midfielder</Accordion.Header>
                    <Accordion.Body>--------------</Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" className='accordion'>
                    <Accordion.Header>Foward</Accordion.Header>
                    <Accordion.Body>----------</Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </>
    )
}

export default RightSide
