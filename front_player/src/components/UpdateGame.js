import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UpdateGame = () => {

  const [state, setState] = useState([{ id: 0, homeTeamName: "", awayTeamName: "", homeTeamScore: 0, awayTeamScore: 0, homeTeamShare: 0, awayTeamShare: 0 }])

  const { id, homeTeamName, awayTeamName, homeTeamScore, awayTeamScore, homeTeamShare, awayTeamShare } = state;

  

  const updateGame = async () => {

    const data = {

      homeTeamName: homeTeamName,
      awayTeamName: awayTeamName,
      homeTeamScore: homeTeamScore,
      awayTeamScore: awayTeamScore,
      homeTeamShare: homeTeamShare,
      awayTeamShare: awayTeamShare
    }

    // axios.post(`http://localhost:8080/updategame`,JSON.stringify(data), {
    axios.post(`http://3.34.181.38:8080/updategame`,JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...'
      },
      data
    })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }




  const onChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  const UpdateGameForm = () => {
    if (window.confirm("경기를 추가하시겠습니까?") == true){    
      updateGame();
  }else{   
      return false;
  }
    
  }



  return (
    <>

      <form className='game_form'>
        <h3>경기 추가</h3>
        홈 팀: <input name="homeTeamName" value={homeTeamName || ''} placeholder="대한민국" onChange={onChange}></input>
        어웨이 팀: <input name="awayTeamName" value={awayTeamName || ''} onChange={onChange}></input><hr />
        홈 팀 득점: <input name="homeTeamScore" value={homeTeamScore || ''} onChange={onChange}></input>
        어웨이 팀 득점 :<input name="awayTeamScore" value={awayTeamScore || ''} onChange={onChange}></input><hr />
        홈 팀 점유율: <input name="homeTeamShare" value={homeTeamShare || ''} placeholder='단위 : %' onChange={onChange}></input><br />
        어웨이 팀 점유율 :<input name="awayTeamShare" value={awayTeamShare || ''} placeholder='단위 : %' onChange={onChange}></input><hr />
      </form>
    
      <div style={{ textAlign: "right", marginRight: "40px"}}>
      <Link to="/"><Button href="/"onClick={() => {UpdateGameForm(); window.location.href="/"}} >경기 결과 저장</Button></Link>
        <Link to="/"><Button style={{marginLeft:"10px"}} id='btn_Link'> 메인으로 </Button> </Link>
      </div>
    </>
  )
}

export default UpdateGame