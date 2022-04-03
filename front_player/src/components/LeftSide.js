import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProgressBar } from 'react-bootstrap'
import KFA_photo from '../../src/images/KFA_photo.jpeg'

const LeftSide = () => {

    const [games, setGames] = useState([])


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // const result = await axios("http://localhost:8080/getgames");
        const result = await axios("http://3.34.181.38:8080/getgames");
        setGames(result.data);
        console.log(games)
    };

    
        const del = async (id) => {
            if (window.confirm("정말 삭제하시겠습니까??") == true){    //확인
                // axios.delete(`http://localhost:8080/deletegame/${id}`);
                axios.delete(`http://3.34.181.38:8080/deletegame/${id}`);
                window.location.reload();           
            }else{   //취소
                return false;
            }
            
        }
            
       
          


    return (
        <div style={{marginLeft:"30px"}}>
            <div>
                <img className="person_photo" src={KFA_photo} />
            </div>
            <div className="person_id">
                <h2>  KFA </h2>
                <br /><br /><br />
            </div>
            <div className='person_project'>
                {games.map((gameList) => {
                    return (
                        <div key={gameList.id}>
                            <div className="ha" style={{textAlign : "center", marginLeft: "-200px"} }>
                            <h5>{gameList.homeTeamName} VS  {gameList.awayTeamName}</h5> 
                            <h5>{gameList.homeTeamScore} : {gameList.awayTeamScore}</h5>
                            <button className='btn_del' onClick={()=> del(gameList.id)}>삭제</button>
                            <hr/>
                            </div>
                        </div>

                    );
                })}
            </div>
        </div>
    )
}

export default LeftSide
