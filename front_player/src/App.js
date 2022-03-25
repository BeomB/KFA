import React from 'react'
import './App.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import 'bootstrap/dist/css/bootstrap.css'; 

const App = () => {
  return (
    <div>
      <div className='left-side'>
      <LeftSide></LeftSide>
      </div>
      <div className='right-side'>
      <RightSide></RightSide>
      </div>
    </div>
  )
}

export default App