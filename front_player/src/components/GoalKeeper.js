import React, { useEffect, useState } from 'react'
import axios from 'axios';

const GoalKeeper = () => {

    const [keepers, setKeepers] = useState("")
    const [hello, setHello] = useState("DF")


    useEffect(() => {
        axios.get(`http://localhost:8080/getposition/${hello}`).then(({ data }) => setKeepers(data));
    }, [])


    let btnC = () => {
        setHello("GK")
    }


    return (
        <>
            <button onClick={()=>btnC()}></button>
        </>
    )
}

export default GoalKeeper