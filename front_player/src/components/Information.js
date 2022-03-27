import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const information = () => {
  

return (
    <>
    <h3>information</h3>
    <Link to="/"><br /> <Button id='btn_Link'> 메인으로 </Button> </Link>
    </>
  )
}

export default information