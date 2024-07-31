import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import userApi from 'apis/userApi';
import Register from './Register';

import * as Style from './style';

import { componentImages } from 'assets/images/imageConfig';

const Login = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSaveEmail, setIsSaveEamil] = useState(false);
    const [popupStep, setPopupStep] = useState(0);

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

    const submit = async () => {
        const res = await userApi.login({ email: email, password: password });
        if (res.result === "success") {
            sessionStorage.setItem("email", res.data.email);
            sessionStorage.setItem("loginToken", res.data.token);
            nav("/cooperation");
        }
    }

    return (
        <Style.Popoup>
            <div className="bg on"></div>
            <div className="content on">
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
                    <img src={isSaveEmail ? componentImages.checkbox_on : componentImages.checkbox_off} alt="체크" />
                    <p>아이디 저장</p>
                </div>

                <div className="buttons">
                    <button onClick={() => { setPopupStep(1) }}>가입하기</button>
                    <button onClick={submit}>로그인</button>
                </div>
            </div>

            {
                popupStep !== 0 &&
                <Register popupStep={popupStep} setPopupStep={setPopupStep}></Register>
            }
        </Style.Popoup>
    );
};

export default Login;