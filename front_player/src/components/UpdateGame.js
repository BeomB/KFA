import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UpdateGame = () => {
  

return (
    <>
    <h3>information</h3>
    <div style={{textAlign:"right", marginRight:"40px"}}>
    <Link to="/"><br /> <Button id='btn_Link'> 메인으로 </Button> </Link>
    </div>
    </>
  )
}

export default UpdateGame