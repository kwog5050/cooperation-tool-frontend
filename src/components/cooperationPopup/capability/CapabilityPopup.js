import React from 'react';

import { cooperationImage } from 'assets/images/imageConfig';

import * as Style from "./style";
import RadarChart from 'components/radar/RadarChart';

const CapabilityPopup = ({ setIsCapabilityPopup }) => {
    return (
        <Style.Container>
            <div className="box">
                <img onClick={() => { setIsCapabilityPopup(false) }} src={cooperationImage.close2} alt="" />
                <h3>역량</h3>

                <div className="user">
                    <div className="profile">
                        <div className="profileImage">
                            <img src={cooperationImage.profile} alt="" />
                        </div>
                        <div className="info">
                            <h4>홍길동</h4>
                            <span>리워디</span>
                        </div>
                    </div>

                    <button><img src={cooperationImage.bars} alt="" /></button>
                </div>

                <div className="status">
                    <div className="detail">
                        <ul>
                            <li className='on'>에너지</li>
                            <li>성장</li>
                            <li>성실</li>
                            <li>실행</li>
                            <li>협업</li>
                            <li>성과</li>
                        </ul>

                        <div className='text'>
                            <h5>주요지표 : 오늘업무, 파티</h5>

                            <p>
                                에너지 항목의 ♥ 좋아요를 받거나, <br />
                                에너지 챌린지 완료 시 지표가 상승합니다.
                            </p>
                        </div>

                        <div className="rating">
                            에너지 <span>(2.2)</span> <b>B</b> 등급
                        </div>
                    </div>
                    <div className="chart">
                        <RadarChart chartData={[2.2, 2.9, 2.3, 1.4, 0.4, 1.2]}></RadarChart>
                        <img src={cooperationImage.rank} alt="" />
                    </div>
                </div>

                <div className="send">
                    <button><img src={cooperationImage.liveHeart} alt="" /> 좋아요 보내기</button>
                    <button><img src={cooperationImage.liveCoin} alt="" /> 코인 보내기</button>
                    <button><img src={cooperationImage.liveMes} alt="" /> 쪽지 보내기</button>
                </div>
            </div>
            <div onClick={() => { setIsCapabilityPopup(false) }} className="bg on"></div>
        </Style.Container>
    );
};

export default CapabilityPopup;