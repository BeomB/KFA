import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Table } from 'react-bootstrap';

const GoalKeeper = () => {

  const [players, setPlayers] = useState([]);
  const [number, setNumber] = useState(0)


  useEffect(() => {
    // fetchData란 비동기함수 생성
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:8080/getposition/gk"
      );
      setPlayers(result.data);
    };
    fetchData();

  }, [number]);

  const Header = ["이름", "사진", "등번호", "소속 팀", "골", "도움"]


  const score= (key) =>
  {
    console.log(key+"가 골 넣었어요")

  }

  const score_cancel = (key) => {
    console.log(key + "골 마이너스")
  };

  const assist = (key) => {
    console.log(key + "어시스트 추가")
  };

  const assist_cancel = (key) => {
    console.log(key + "어시스트 빼기")
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
              <td>{playerList.goal} <button onClick={() => score(playerList.number)}>+</button> <button onClick={() => { setNumber(playerList.number); score_cancel() }}>-</button> </td>
              <td>{playerList.assist} <button onClick={() => assist()}>+</button> <button onClick={() => assist_cancel()}>-</button> </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default GoalKeeper;  
