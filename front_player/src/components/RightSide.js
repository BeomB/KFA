import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accordian from './Accordian_player';
import UpdateGame from './UpdateGame';




const RightSide = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Accordian/>}>          {/* exact 는 정확히 일치할 경우에만 사용한다 */}</Route>
                    <Route path="/information" element= {<UpdateGame/>}/> {/* 다이나믹한 주소창을 받아야할때는 클론으로 처리할 수 있다. */}
                </Routes>                                     {/* 화면이 바뀌는 부분은 Switch 안 */}
            </BrowserRouter>
    )
}

export default RightSide
