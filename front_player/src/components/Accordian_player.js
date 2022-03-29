import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Accordion, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Defender from './Defender'
import Foward from './Foward'
import GoalKeeper from './GoalKeeper'
import Midfielder from './Midfielder'

const Accordian = () => {

    
    const [topGoal, setTopGoal] = useState("")
    const [topAssist, setTopAssist] = useState("")

    useEffect(() => {
        fetchtopGoal()
        fetchtopassist()
    },[])

    const fetchtopGoal = async () => {
        const result = await axios("http://localhost:8080/topgoal");
        setTopGoal(result.data)
      };

      const fetchtopassist = async () => {
        const result = await axios("http://localhost:8080/topassist");
        setTopAssist(result.data)
      };
    

    return (
        <>
        <h3 style={{margin:"10px",marginBottom:"20px"}}>KFA PLAYER 정보</h3>
        <div style={{textAlign:"right", marginRight:"60px", marginBottom :"20px"}}><h5>최다 골 선수 : {topGoal},  최다 도움 선수 : {topAssist}</h5> </div>
        
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
                <Button id='btn_Link'> 경기 추가하기 </Button>
            </Link>
            </div>
        </Accordion>
        
        </>
    )
}

export default Accordian