import React, { useState } from 'react'
import { ProgressBar } from 'react-bootstrap'

const LeftSide = () => {


    const [certificates, setCertificates] = useState(["정보처리기사", "COS Pro Python"])
    const [name, setname] = useState("이범기")
    const [number, setNumber] = useState("010-9084-3455")
    const [mail, setMail] = useState("qjarl1119@naver.com")
    const [lang, setLang] = useState({ java: 80, nodejs: 60, python: 30, javascript: 70 })

    const certificateList = certificates.map((certicate) => (<>{certicate}<br /></>))

    return (

        <>
            <div>
                <img className="person_photo" />
            </div>
            <div className="person_id">
                <h5> 이름 : {name} </h5>
                <p>전화번호 : {number}<br />
                    메일 : {mail}</p><br /><br />
            </div>

            <div className="person_project">
                JAVA : <ProgressBar now={lang.java} variant="warning" />
                JavaScript :<ProgressBar now={lang.javascript} variant="warning" />
                node JS : <ProgressBar now={lang.nodejs} variant="warning" />
                Python : <ProgressBar now={lang.python} variant="warning" />
            </div>
            <div className="person_certificate">
                <h5> 자격증 </h5>
                {certificateList}
            </div>
        </>
    )
}

export default LeftSide
