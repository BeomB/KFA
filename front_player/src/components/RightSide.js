import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accordian from './Accordian_player';



const RightSide = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Accordian/>}>          {/* exact 는 정확히 일치할 경우에만 사용한다 */}</Route>
                    <Route path="/haha" element={<>gk</>}>    {/* 다이나믹한 주소창을 받아야할때는 클론으로 처리할 수 있다. */}
                    </Route>

                </Routes>                                     {/* 화면이 바뀌는 부분은 Switch 안 */}
            </BrowserRouter>
    )
}

export default RightSide
