import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Register from 'components/browser/popup/Register.js';
import Login from 'components/browser/popup/Login.js';

import { browserImage } from 'assets/images/imageConfig.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import * as Style from './style.js';

const Header = () => {
    const nav = useNavigate();
    const [isMobile, setIsMobile] = useState(false);
    const [mobileMenu, setMobileMenu] = useState("");
    const [popupStep, setPopupStep] = useState(0);
    const [popupLogin, setPopupLogin] = useState(false);

    // 모바일 하위메뉴 스위치
    const handleSetMenu = (menuName) => {
        if (mobileMenu !== "" && mobileMenu === menuName) {
            setMobileMenu("");
        } else {
            setMobileMenu(menuName);
        }
    }

    // 모바일 메뉴 온오프시 하위메뉴 닫기
    useEffect(() => {
        setMobileMenu("");
    }, [isMobile])

    // 페이지 이동시 모바일 메뉴 닫기
    useEffect(() => {
        setIsMobile(false);
    }, [nav])

    return (
        <Style.Head>
            <div className="wrap">
                <Style.FlexBox>
                    <Style.H1>
                        <Link to={"/"}>
                            <img src={browserImage.logo} alt="리워디 로고" />
                        </Link>
                    </Style.H1>

                    <Style.Ul>
                        <li>
                            <Link to={"/todaywork"}>
                                서비스소개
                                <img src={browserImage.arrow} alt="메뉴 화살표" />
                            </Link>

                            <ol>
                                <li><Link to={"/todaywork"}>오늘업무</Link></li>
                                <li><Link to={"/live"}>LIVE</Link></li>
                                <li><Link to={"/coin"}>보상</Link></li>
                                <li><Link to={"/challenge"}>챌린지</Link></li>
                                <li><Link to={"/party"}>파티</Link></li>
                                <li><Link to={"/insight"}>인사이트</Link></li>
                            </ol>
                        </li>
                        <li>
                            <Link to={"/price"}>가격안내</Link>
                        </li>
                        <li>
                            <Link to={"/question/1"}>
                                고객지원
                                <img src={browserImage.arrow} alt="메뉴 화살표" />
                            </Link>

                            <ol>
                                <li><Link to={"/question/1"}>자주묻는질문</Link></li>
                                <li><Link to={"/menual/start/1"}>사용자 메뉴얼</Link></li>
                                <li><Link to={"/notice/1"}>공지사항</Link></li>
                                <li><Link to={"/customer"}>고객센터</Link></li>
                            </ol>
                        </li>
                        <li>
                            <Link to={"/sample"}>
                                활용사례
                            </Link>
                        </li>
                        <li>
                            <Link>
                                무료체험
                                <img src={browserImage.rewardyCharacter} alt="리워디 캐릭터" />
                            </Link>
                        </li>
                    </Style.Ul>

                    <Style.buttons>
                        <button onClick={() => { setPopupStep(1) }}>가입하기</button>
                        <button onClick={() => { setPopupLogin(true) }}>접속하기</button>
                    </Style.buttons>

                    <Style.Mobile>
                        <FontAwesomeIcon icon={faBars} className='bars' onClick={() => { setIsMobile(!isMobile) }} />

                        <div className={isMobile ? "menuBox on" : "menuBox"}>
                            <ul>
                                <li>
                                    <Link onClick={() => { handleSetMenu("서비스소개") }}>
                                        서비스소개
                                        <img src={browserImage.arrow} alt="메뉴 화살표" />
                                    </Link>

                                    <ol className={mobileMenu === "서비스소개" ? "on" : ""}>
                                        <li><Link to={"/todaywork"}>오늘업무</Link></li>
                                        <li><Link to={"/live"}>LIVE</Link></li>
                                        <li><Link to={"/coin"}>보상</Link></li>
                                        <li><Link to={"/challenge"}>챌린지</Link></li>
                                        <li><Link to={"/party"}>파티</Link></li>
                                        <li><Link to={"/insight"}>인사이트</Link></li>
                                    </ol>
                                </li>
                                <li>
                                    <Link to={"/price"}>가격안내</Link>
                                </li>
                                <li>
                                    <Link onClick={() => { handleSetMenu("고객지원") }}>
                                        고객지원
                                        <img src={browserImage.arrow} alt="메뉴 화살표" />
                                    </Link>

                                    <ol className={mobileMenu === "고객지원" ? "on" : ""}>
                                        <li><Link to={"/question/1"}>자주묻는질문</Link></li>
                                        <li><Link to={"/menual/start/1"}>사용자 메뉴얼</Link></li>
                                        <li><Link to={"/notice/1"}>공지사항</Link></li>
                                        <li><Link to={"/customer"}>고객센터</Link></li>
                                    </ol>
                                </li>
                                <li>
                                    <Link to={"/sample"}>
                                        활용사례
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        <span>
                                            무료체험
                                            <img src={browserImage.rewardyCharacter} alt="리워디 캐릭터" />
                                        </span>
                                    </Link>
                                </li>
                            </ul>

                            <div className="buttons">
                                <button onClick={() => { setPopupStep(1) }}>가입하기</button>
                                <button onClick={() => { setPopupLogin(true) }}>접속하기</button>
                            </div>
                        </div>

                        <div className={isMobile ? "menuBg on" : "menuBg"} onClick={() => { setIsMobile(false) }}></div>
                    </Style.Mobile>
                </Style.FlexBox>
            </div>

            {
                popupStep !== 0 &&
                <Register popupStep={popupStep} setPopupStep={setPopupStep}></Register>
            }

            {
                popupLogin &&
                <Login setPopupLogin={setPopupLogin}></Login>
            }

        </Style.Head>
    );
};

export default Header;