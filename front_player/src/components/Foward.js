import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';

const Foward = () => {

  const [players, setPlayers] = useState([]);
  const [number, setNumber] = useState(0)

  useEffect(() => {
    fetchData();
  }, [number]);

  const fetchData = async () => {
    const result = await axios("http://localhost:8080/getposition/fw");
    setPlayers(result.data);
  };

  const Header = ["이름", "사진", "등번호", "소속 팀", "골", "도움"]
  
  const score= async (key) =>
  {
    await axios.put(`http://localhost:8080/score/${key}`, {})
    fetchData()
  }
  
  const score_cancel = async (key) => {
    await axios.put(`http://localhost:8080/score_cancel/${key}`, {})
    fetchData()
  };

  const assist = async (key) => {
    await axios.put(`http://localhost:8080/assist/${key}`, {})
    fetchData()
  };

  const assist_cancel = async (key) => {
    await axios.put(`http://localhost:8080/assist_cancel/${key}`, {})
    fetchData()
  };

  
  return (
    <Table className='player_table'>
      <thead>
        <tr>
          <th>{Header[0]}</th>
          <th>{Header[1]}</th>
          <th>{Header[2]}</th>
          <th>{Header[3]}</th>
          <th>{Header[4]}</th>
          <th>{Header[5]}</th>
        </tr>
      </thead>
      <tbody>
        {players.map((playerList) => {
          return (
            <tr key={playerList.number}>
              <td>{playerList.name}</td>
              <td><img src={playerList.photo}></img></td>
              <td>{playerList.number}</td>
              <td>{playerList.team}</td>
              <td>{playerList.goal} <button onClick={async () => score(playerList.number)}>+</button> <button onClick={async () => {  score_cancel(playerList.number) }}>-</button> </td>
              <td>{playerList.assist} <button onClick={async () => assist(playerList.number)}>+</button> <button onClick={async () => assist_cancel(playerList.number)}>-</button> </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Foward;  
