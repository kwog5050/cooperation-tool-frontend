import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import RadarChart from 'components/radar/RadarChart';
import SwitchBall from 'components/switchBall/SwitchBall';

import { cooperationImage } from 'assets/images/imageConfig';

import * as Style from "./style";
import ProfilePopup from 'components/cooperationPopup/profile/ProfilePopup';

const Home = () => {
    const [isProfilePopup, setIsProfilePopup] = useState(false);
    const [isWork, setIsWork] = useState(false);
    const [isMeeting, setIsMeeting] = useState(false);
    const [isLeaveWork, setIsLeaveWork] = useState(false);

    return (
        <Style.Container>
            <Style.Timeline>
                <h3>타임라인</h3>
                <div className="list">
                    <ul>
                        <li>
                            <p>오늘 업무 작성</p>
                            <span>10:35 AM</span>

                            <div className="ball">
                                <div>
                                    <div></div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <p>출근</p>
                            <span>09:26 AM</span>

                            <div className="ball">
                                <div>
                                    <div></div>
                                </div>

                                <span className="line"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </Style.Timeline>
            <Style.Status>
                <div className="top">
                    <div className="stat">
                        <div className="profile">
                            <div className="userBox">
                                <p onClick={() => { setIsProfilePopup(true) }}>상태 메시지를 입력해주세요.</p>

                                <div className="profileImage">
                                    <div className="imageBox">
                                        <img src={cooperationImage.profile} alt="본인 프로필 사진" />
                                    </div>
                                    <button onClick={() => { setIsProfilePopup(true) }} className="setImageButton">
                                        <img src={cooperationImage.setting} alt="프로필 설정 버튼 이미지" />
                                    </button>
                                </div>

                                <div className="name">
                                    <p>홍길동님, 안녕하세요!</p>
                                    <span>리워디</span>
                                </div>
                            </div>

                            <RadarChart chartData={[0.2, 0.2, 0.2, 0.2, 0.2, 0.2]}></RadarChart>
                        </div>
                    </div>
                    <div className="info">
                        <div className="mycoin">
                            <h3>
                                내 코인
                                <img src={cooperationImage.icoQ} alt="코인 설명 아이콘" />

                                <div className="hoverPopup">
                                    <p>
                                        - 업무보상, 챌린지참여, 파티클리어 등을 통해서 보상받은 코인을 말합니다. <br />
                                        - 출금신청 기능을 통해서 우리회사에 보상 지급을 요청할 수 있습니다. <br />
                                        - 출금신청을 클릭하면 출금요청한 금액이 우리회사의 관리자에게 출금신청 리스트로 보여지게 됩니다. <br />
                                        - 요청받은 코인은 급여에 포함하거나 별도의 방식(포상)을 통해서 구성원에게 지급하게 됩니다. <br />
                                        (우리회사의 정책에 따라서 달라집니다.)
                                    </p>
                                </div>
                            </h3>

                            <div>
                                <span>Today 0 <b>▲</b></span>
                                <div>
                                    3,500
                                    <img src={cooperationImage.coin} alt="코인" />
                                </div>
                            </div>
                        </div>

                        <div className="coin">
                            <ul>
                                <li>
                                    <h3>
                                        우리회사 공용코인
                                        <img src={cooperationImage.icoQ} alt="내코인 설명 아이콘" />

                                        <div className="hoverPopup">
                                            <p>
                                                - 리워디 내에서 보상을 위해 사용되는 가상머니입니다. <br />
                                                - 관리자 권한을 가진 사용자가 충전을 통해서 가상머니를 충전할 수 있습니다. (충전수수료 5% 발생)
                                            </p>
                                        </div>
                                    </h3>

                                    <div>
                                        932,642
                                        <img src={cooperationImage.coin} alt="코인" />
                                    </div>
                                </li>
                                <li>
                                    <h3>
                                        나의 공용코인
                                        <img src={cooperationImage.icoQ} alt="내코인 설명 아이콘" />

                                        <div className="hoverPopup">
                                            <p>
                                                - 회사 전체의 공용코인 중에서 나에게 할당된 공용코인을 말합니다. <br />
                                                - 이 코인으로 리워디 사용 중에 보상코인을 지급할 수 있습니다. <br />
                                                - 공용코인은 관리자 권한을 가진 사용자가 충전할 수 있습니다.
                                            </p>
                                        </div>
                                    </h3>

                                    <div>
                                        30,304
                                        <img src={cooperationImage.coin} alt="코인" />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="like">
                            <ul>
                                <li>
                                    <h3>역량</h3>
                                    <div>
                                        <span className="rank">Rank 17</span>
                                        <span className="score">
                                            <b>32</b>점
                                        </span>
                                    </div>

                                    <img src={cooperationImage.good} alt="역량 아이콘" />
                                </li>
                                <li>
                                    <h3>좋아요</h3>
                                    <div>
                                        <span className="rank">Rank 17</span>
                                        <span className="score">
                                            <b>32</b>점
                                        </span>
                                    </div>

                                    <img src={cooperationImage.good} alt="좋아요 아이콘" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="aiAdviser">
                        <img src={cooperationImage.rewCha01} alt="리워디 캐릭터" />

                        <p>오늘 하루도 최선을 다하는 홍길동님, 진심으로 응원합니다! 짝짝짝~</p>

                        <span>AI Adviser</span>
                    </div>

                    <ul>
                        <li>
                            <Link to={"/cooperation/todaywork"}>
                                <h3>오늘업무</h3>
                                <span>1</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/cooperation/todaywork"}>
                                <h3>미완료</h3>
                                <span>1</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/cooperation/todaywork"}>
                                <h3>메모</h3>
                                <span>1</span>
                            </Link>
                        </li>
                        <li className="zero">
                            <Link to={"/cooperation/todaywork"}>
                                <h3>보고</h3>
                                <span>0</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/cooperation/todaywork"}>
                                <h3>요청</h3>
                                <span>1</span>
                            </Link>
                        </li>
                        <li className="zero">
                            <Link to={"/cooperation/todaywork"}>
                                <h3>공유</h3>
                                <span>0</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/cooperation/todaywork"}>
                                <h3>파티</h3>
                                <span>2</span>
                            </Link>
                        </li>
                        <li className="zero">
                            <Link to={"/cooperation/todaywork"}>
                                <h3>챌린지</h3>
                                <span>0</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Style.Status>
            <Style.Info>
                <div className="staff">
                    <div className="head">
                        <div className="switchList">
                            <ul>
                                <li>
                                    <span>근무</span>
                                    <SwitchBall value={isWork} setValue={setIsWork}></SwitchBall>
                                </li>
                                <li>
                                    <span>회의</span>
                                    <SwitchBall value={isMeeting} setValue={setIsMeeting}></SwitchBall>
                                </li>
                                <li>
                                    <span>퇴근</span>
                                    <SwitchBall value={isLeaveWork} setValue={setIsLeaveWork}></SwitchBall>
                                </li>
                            </ul>
                        </div>

                        <button className="reset">
                            04/03 09:42
                            <img src={cooperationImage.reset} alt="새로고침" />
                        </button>
                    </div>

                    <div className="bottom">
                        <nav>
                            <ul>
                                <li className="on">
                                    <button>
                                        <h3>20<span>명</span></h3>
                                        <p>정상근무</p>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <h3>0<span>명</span></h3>
                                        <p>연차/반차</p>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <h3>0<span>명</span></h3>
                                        <p>조퇴/외출</p>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <h3>1<span>명</span></h3>
                                        <p>미팅/회의</p>
                                    </button>
                                </li>
                                <li>
                                    <button>
                                        <h3>0<span>명</span></h3>
                                        <p>출장</p>
                                    </button>
                                </li>
                            </ul>
                        </nav>

                        <div className="userList">
                            <ul>
                                <li>
                                    <Link to={"/cooperation/live"}>
                                        <div className="profileImage">
                                            <img src={cooperationImage.profile} alt="프로필 이미지" />
                                        </div>

                                        <h3>홍길동</h3>
                                        <span>9:28</span>
                                    </Link>
                                </li>
                                <li className="more">
                                    <Link to={"/cooperation/live"}>
                                        <div>
                                            <img src={cooperationImage.plus} alt="더보기 이미지" />
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="ai">
                    <div className="aiText">
                        <p>
                            <span>AI 추천</span>
                            공유, 보고, 메모 잘하는 동료 응원해 보아요!
                        </p>

                        <button className="reset">
                            <img src={cooperationImage.reset} alt="새로고침 이미지" />
                        </button>
                    </div>

                    <ul>
                        <li>
                            <div className="profileImage">
                                <img src={cooperationImage.profile} alt="" />
                            </div>

                            <div className="content">
                                <h3>출근 1등</h3>
                                <p>장재필님이 <span>1등</span>으로 출근 했습니다!</p>
                                <span>8:46 출근</span>
                            </div>

                            <div className="hover">
                                <div className="like">
                                    <img src={cooperationImage.heart} alt="좋아요 하트" />
                                </div>

                                <button>
                                    <img src={cooperationImage.close} alt="닫기" />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </Style.Info>

            {/* 팝업 */}
            {isProfilePopup && <ProfilePopup setIsProfilePopup={setIsProfilePopup}></ProfilePopup>}
        </Style.Container>
    );
};

export default Home;