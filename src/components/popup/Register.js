import React, { useEffect, useState } from 'react';

import * as Style from './style';
import userApi from 'apis/userApi';

const Register = ({ popupStep, setPopupStep }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [invitationCode, setInvitationCode] = useState("");
    const [isInvitationCode, setIsInvitationCode] = useState(false);
    const [email, setEmail] = useState("");
    const [isEmail, setIsEmail] = useState(false);

    // 초대코드 검사
    const invitationCodeCheck = async () => {
        const api = await userApi.invitationCodeCheck({ code: invitationCode });
        if (api.result === "success") {
            alert("초대코드 검증 완료");
            setIsInvitationCode(true);
        } else {
            alert("초대코드 검증 실패");
            setIsInvitationCode(false);
        }
    }

    // 이메일 중복 검사 
    const emailCheck = async () => {
        const api = await userApi.emailCheck({ email: email });
        if (api.result === "success") {
            alert("이메일 중복 안됨");
            setIsEmail(true);
        } else {
            alert("이메일 중복");
            setIsEmail(false);
        }
    }

    // 가입하기 다음으로 넘어갈때 텍스트 체크 후 다음으로
    const submit = async () => {
        const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        if (name.length <= 0) {
            alert("이름을 입력해주세요.");
            return
        } else if (password.length <= 0) {
            alert("비밀번호를 입력해주세요.");
            return;
        } else if (invitationCode.length <= 0) {
            alert("초대코드를 입력해주세요.");
            return;
        } else if (email.length <= 0) {
            alert("이메일을 입력해주세요");
            return;
        } else if (emailRegex.test(email)) {
            alert("이메일 형식이 아닙니다");
            return;
        } else if (!isInvitationCode) {
            alert("초대코드 확인해주세요.");
            return;
        } else if (!isEmail) {
            alert("이메일 중복검사를 해주세요.");
            return;
        }

        const res = await userApi.createUser({
            name: name,
            email: email,
            password: password,
            invitationCode: invitationCode
        })

        if (res.result === "success") {
            alert("회원가입 완료 로그인 해주세요");
            setPopupStep(0);
        }
    }

    // 가입하기 창 닫으면 초기화
    useEffect(() => {
        if (popupStep === 0) {
            setName("");
            setInvitationCode("");
            setEmail("");
        }
    }, [popupStep])

    const onChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "invitationCode":
                setInvitationCode(value);
                break;
            case "email":
                setEmail(value);
                break;

            default:
                break;
        }
    };

    return (
        popupStep !== 0 &&
        <Style.Popoup>
            {/* 가입하기 step 1 */}
            <div className={popupStep === 1 ? "content on" : "content"}>
                <div className="title">
                    <h3>회원가입</h3>
                    <p>
                        가입을 환영합니다. <br />
                        아래의 내용을 입력해 주세요.
                    </p>
                </div>

                <div className="input">
                    <input onChange={onChange} type="text" placeholder='이름' name='name' value={name} />
                    <input onChange={onChange} type="password" placeholder='비밀번호를 입력해주세요' name='password' value={password} />
                    <div className="flex">
                        <input onChange={onChange} type="text" placeholder='초대코드를 입력해주세요.' name='invitationCode' value={invitationCode} maxLength={12} />
                        <button onClick={invitationCodeCheck}>코드확인</button>
                    </div>
                    <div className="flex">
                        <input onChange={onChange} type="text" placeholder='이메일을 입력해주세요.' name='email' value={email} />
                        <button onClick={emailCheck}>중복확인</button>
                    </div>
                </div>

                <div className="buttons">
                    <button onClick={() => { setPopupStep(0) }}>닫기</button>
                    <button onClick={() => { submit() }}>가입하기</button>
                </div>
            </div>
        </Style.Popoup>
    );
};

export default Register;