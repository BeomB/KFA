import React, { useState } from 'react'
import { ProgressBar } from 'react-bootstrap'
import KFA_photo from '../../src/images/KFA_photo.jpeg'

const LeftSide = () => {

    const [lang, setLang] = useState({ korea: 80, Iran :70 })
    
    return (
        <>
            <div>
                <img className="person_photo" src={KFA_photo}/>
            </div>
            <div className="person_id">
                <h5>  KFA </h5>
                <br/>
                <p>대한민국 vs 이란<br/></p><br /><br />
            </div>
            <div className="person_project">
                대한민국 : <ProgressBar now={lang.korea} variant="warning" />
                이란 :<ProgressBar now={lang.Iran} variant="warning" />
            </div>
        </>
    )
}

export default LeftSide
