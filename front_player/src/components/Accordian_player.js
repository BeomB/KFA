import React from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Defender from './Defender'
import Foward from './Foward'
import GoalKeeper from './GoalKeeper'
import Midfielder from './Midfielder'

const Accordian = () => {

    return (
        <Accordion>
            <Accordion.Item eventKey="0" className='accordion'>
                <Accordion.Header>GoalKeeper</Accordion.Header>
                <Accordion.Body><GoalKeeper /></Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1" className='accordion'>
                <Accordion.Header>Defender</Accordion.Header>
                <Accordion.Body><Defender /></Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2" className='accordion'>
                <Accordion.Header>Midfielder</Accordion.Header>
                <Accordion.Body><Midfielder /></Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className='accordion'>
                <Accordion.Header>Foward</Accordion.Header>
                <Accordion.Body><Foward /></Accordion.Body>
            </Accordion.Item>
            
            <div style={{textAlign:"right", marginRight:"40px"}}>
            <Link to="/information"><br />
                <Button id='btn_Link'> 정보보기 </Button>
            </Link>
            </div>
        </Accordion>
    )
}

export default Accordian