import React, { useState } from 'react';

import { browserImage } from 'assets/images/imageConfig.js';

import * as Style from './style.js';

const Login = ({ setPopupLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSaveEmail, setIsSaveEamil] = useState(false);

    const onChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;

            default:
                break;
        }
    };

    return (
        <Style.Popoup>
            <div className="bg on" onClick={() => { setPopupLogin(false) }}></div>
            <div className="content on">
                <img src={browserImage.logo} alt="로고" />
                <div className="title">
                    <h3>로그인</h3>
                    <p>
                        안녕하세요. <br />
                        로그인을 부탁드려요!
                    </p>
                </div>

                <div className="input">
                    <input onChange={onChange} type="text" placeholder='이메일' name='email' value={email} />
                    <input onChange={onChange} type="password" placeholder='비밀번호' name='password' value={password} />
                </div>

                <div className="checkBox" onClick={() => { setIsSaveEamil(!isSaveEmail) }}>
                    <img src={isSaveEmail ? browserImage.checkbox_on : browserImage.checkbox_off} alt="체크" />
                    <p>아이디 저장</p>
                </div>

                <div className="buttons">
                    <button onClick={() => { setPopupLogin(false) }}>닫기</button>
                    <button>로그인</button>
                </div>
            </div>
        </Style.Popoup>
    );
};

export default Login;