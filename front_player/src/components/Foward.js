import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';

const Foward = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        // fetchData란 비동기함수 생성
        const fetchData = async () => {
            const result = await axios(
                "http://localhost:8080/getposition/fw"
            );
            setPlayers(result.data);
        };
        fetchData();
    }, []);

    const Header =["이름","등번호","소속 팀","골","도움"]

    function score()
    {
        console.log("score");
    }

    function score_minus()
    {
        console.log("score-1");
    }

    function assist()
    {
        console.log("assist");
    }

    function assist_minus()
    {
        console.log("assist-1");
    }




    return (
        <Table className='player_table'>
        <thead>
          <tr>
            <th>{Header[0]}</th>
            <th>{Header[1]}</th>
            <th>{Header[2]}</th>
            <th>{Header[3]}</th>
            <th>{Header[4]}</th>
          </tr>
        </thead>
        <tbody>
          {players.map((playerList) => {
            return (
              <tr key={playerList.number}>
                <td>{playerList.name}</td>
                <td>{playerList.number}</td>
                <td>{playerList.team}</td>
                <td>{playerList.goal} <button onClick={()=> score()}>+</button> <button onClick={()=> score_minus()}>-</button> </td>
                <td>{playerList.assist} <button onClick={()=> assist()}>+</button> <button onClick={()=> assist_minus()}>-</button> </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
};

export default Foward