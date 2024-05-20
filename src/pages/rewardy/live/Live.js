import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SideMenu from 'components/rewardy/sideMenu/live/SideMenu';
import SwitchBall from 'components/rewardy/switchBall/SwitchBall';
import CapabilityPopup from 'components/rewardy/popup/capability/CapabilityPopup';
import Like from 'components/rewardy/popup/like/Like';

import { rewardyImage } from 'assets/images/imageConfig';

import * as Style from "./style";

const Live = () => {
    const containerSize = useSelector((state) => state.containerSize.size);
    const [isCapabilityPopup, setIsCapabilityPopup] = useState(false);

    return (
        <>
            <SideMenu></SideMenu>
            <Style.Container width={containerSize}>
                <div className="top">
                    <div className="tap">
                        <button className='on'>
                            <b>20/25<span>명</span></b>
                            <h5>정상근무</h5>
                        </button>
                        <button>
                            <b>20<span>명</span></b>
                            <h5>연차/반차</h5>
                        </button>
                        <button>
                            <b>20/25<span>명</span></b>
                            <h5>조퇴/외출</h5>
                        </button>
                        <button>
                            <b>20/25<span>명</span></b>
                            <h5>미팅/회의</h5>
                        </button>
                        <button>
                            <b>20/25<span>명</span></b>
                            <h5>출장</h5>
                        </button>
                    </div>

                    <div className="right">
                        <div className="switchList">
                            <ul>
                                <li>
                                    <span>출근</span>
                                    <SwitchBall></SwitchBall>
                                </li>
                                <li>
                                    <span>회의</span>
                                    <SwitchBall></SwitchBall>
                                </li>
                                <li>
                                    <span>퇴근</span>
                                    <SwitchBall></SwitchBall>
                                </li>
                            </ul>
                        </div>

                        <div className="searchBox">
                            <input type="text" placeholder='이름, 부서명을 검색' />
                            <button>
                                <img src={rewardyImage.search} alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="list">
                    <ul>
                        <li>
                            <div className='profile'>
                                <div className="flex">
                                    <div className="info">
                                        <div className="name">홍길동</div>
                                        <div className="team">리워디</div>
                                        <div className="time">9:29</div>
                                    </div>

                                    <div className="imageBox">
                                        <img src={rewardyImage.profile} alt="" />
                                    </div>
                                </div>
                                <div className="text">
                                    <p>-</p>
                                </div>
                            </div>

                            <div className="stat">
                                <div className="score">
                                    <span>0</span>
                                    <strong>업무</strong>
                                </div>
                                <div className="score" onClick={() => { setIsCapabilityPopup(true) }}>
                                    <span>987</span>
                                    <strong>역량</strong>
                                </div>
                                <div className="score">
                                    <span>0</span>
                                    <strong>좋아요</strong>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Style.Container>

            {/* 팝업 */}
            {/* 역량 */}
            {isCapabilityPopup && <CapabilityPopup setIsCapabilityPopup={setIsCapabilityPopup}></CapabilityPopup>}
            <Like></Like>
        </>
    );
};

export default Live;