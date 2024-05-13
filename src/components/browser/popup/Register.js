import React, { useEffect, useState } from 'react';

import { comma } from 'utils/commaReplace';
import { formatCompanyNumber } from 'utils/formatCompanyNumber.js';

import { browserImage } from 'assets/images/imageConfig.js';

import * as Style from './style.js';

// 나중에 약관 추가 해야함
// 나중에 약관 추가 해야함
// 나중에 약관 추가 해야함
// 나중에 약관 추가 해야함
// 나중에 약관 추가 해야함
// 나중에 약관 추가 해야함
const Register = ({ popupStep, setPopupStep }) => {
    const [companyName, setCompanyName] = useState("");
    const [companyNumber, setCompanyNumber] = useState("");
    const [isCompanyNumber, setIsCompanyNumber] = useState(false);
    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");
    const [isEmail, setIsEmail] = useState(false);
    const [personnel, setPersonnel] = useState(10);
    const [isService, setIsService] = useState(false);
    const [isPersonalInfo, setIsPersonalInfo] = useState(false);

    // 가입하기 다음으로 넘어갈때 텍스트 체크 후 다음으로
    const nextJoinInfo = () => {
        const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        if (companyName.length <= 0) {
            alert("회사명을 입력해주세요.");
            return
        } else if (companyNumber.length <= 11) {
            alert("사업자번호를 입력해주세요.");
            return;
        } else if (name.length <= 0) {
            alert("담당자명을 입력해주세요.");
            return;
        } else if (department.length <= 0) {
            alert("부서명을 입력해주세요.");
            return;
        } else if (email.length <= 0) {
            alert("이메일을 입력해주세요");
            return;
        } else if (emailRegex.test(email)) {
            alert("이메일 형식이 아닙니다");
            return;
        } else if (!isCompanyNumber) {
            alert("사업자번호 중복확인을 해주세요.");
            return;
        } else if (!isEmail) {
            alert("이메일 중복검사를 해주세요.");
            return;
        } else {
            setPopupStep(2);
        }
    }

    // 인원 감소
    const decrement = () => {
        if (personnel <= 0) {
            alert("0보다 작을 수 없습니다.");
            return;
        }
        setPersonnel(personnel - 1);
    }

    // 인원 증가
    const increment = () => {
        setPersonnel(personnel + 1);
    }

    // 가입하기 창 닫으면 초기화
    useEffect(() => {
        if (popupStep === 0) {
            setCompanyName("");
            setCompanyNumber("");
            setName("");
            setDepartment("");
            setEmail("");
        }
    }, [popupStep])

    const onChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "companyName":
                setCompanyName(value);
                break;
            case "companyNumber":
                setCompanyNumber(formatCompanyNumber(value));
                break;
            case "name":
                setName(value);
                break;
            case "department":
                setDepartment(value);
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
            <div className={popupStep !== 0 ? "bg on" : "bg"} onClick={() => { setPopupStep(0) }}></div>
            {/* 가입하기 step 1 */}
            <div className={popupStep === 1 ? "content on" : "content"}>
                <img src={browserImage.logo} alt="로고" />
                <div className="title">
                    <h3>우리회사 가입하기</h3>
                    <p>
                        리워디 멤버십 가입을 환영합니다. <br />
                        아래의 내용을 입력해 주세요.
                    </p>
                </div>

                <div className="input">
                    <input onChange={onChange} type="text" placeholder='회사명' name='companyName' value={companyName} />
                    <div className="flex">
                        <input onChange={onChange} type="text" placeholder='사업자번호를 입력해주세요.' name='companyNumber' value={companyNumber} maxLength={12} />
                        <button>중복확인</button>
                    </div>
                    <div className="flex">
                        <input onChange={onChange} type="text" placeholder='담당자명' name='name' value={name} />
                        <input onChange={onChange} type="text" placeholder='부서명' name='department' value={department} />
                    </div>
                    <div className="flex">
                        <input onChange={onChange} type="text" placeholder='이메일을 입력해주세요.' name='email' value={email} />
                        <button>중복확인</button>
                    </div>
                </div>

                <div className="buttons">
                    <button onClick={() => { setPopupStep(0) }}>닫기</button>
                    <button onClick={nextJoinInfo}>다음(1/2)</button>
                </div>
            </div>

            {/* 가입하기 step 2 */}
            <div className={popupStep === 2 ? "content on" : "content"}>
                <img src={browserImage.logo} alt="로고" />
                <div className="title">
                    <h3>멤버십 결제하기</h3>
                </div>

                <div className="count">
                    <h5>
                        우리 회사는 총 몇명의 구성원이 <br />
                        리워디 서비스를 사용하나요?
                    </h5>

                    <div className="box">
                        <button onClick={decrement}>-</button>
                        <span>{personnel}명</span>
                        <button onClick={increment}>+</button>
                    </div>

                    <p>
                        ※멤버십 결제는 매월 추가/삭제된 멤버수에 따라서 금액이 달라지며, <br />
                        매월 <u>오늘날짜(24일)</u>에 자동으로 결제됩니다
                    </p>
                </div>

                <div className="totalPay">
                    <p>총 결제금액<span>(VAT 별도)</span></p>

                    <b>{comma(personnel * 100)}<span>원</span></b>
                </div>

                <div className="agreement">
                    <div>
                        <img onClick={() => { setIsService(!isService) }} src={isService ? browserImage.checkOn : browserImage.checkOff} alt="체크" />
                        <p>(필수) 서비스 이용약관 동의</p>
                        <button>보기</button>
                    </div>
                    <div>
                        <img onClick={() => { setIsPersonalInfo(!isPersonalInfo) }} src={isPersonalInfo ? browserImage.checkOn : browserImage.checkOff} alt="체크" />
                        <p>(필수) 개인정보 수집 및 동의</p>
                        <button>보기</button>
                    </div>
                </div>

                <div className="buttons">
                    <button onClick={() => { setPopupStep(0) }}>닫기</button>
                    <button>멤버십 결제하기(2/2)</button>
                </div>

                <div className="prev">
                    <button onClick={() => { setPopupStep(1) }}>이전으로</button>
                </div>
            </div>
        </Style.Popoup>
    );
};

export default Register;