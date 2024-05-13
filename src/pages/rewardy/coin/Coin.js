import React, { useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

import SideMenu from 'components/rewardy/sideMenu/coin/SideMenu';
import Calendar from 'components/calendar/Calendar';

import { rewardyImage } from 'assets/images/imageConfig';

import * as Style from "./style";

const Coin = () => {
    const today = moment().format("YYYY-MM-DD");
    const containerSize = useSelector((state) => state.containerSize.size);
    const [isSelect, setIsSelect] = useState(false);
    const [isStartDate, setIsStartDate] = useState(false);
    const [isEndDate, setIsEndDate] = useState(false);
    const [startDate, setStartDate] = useState(today);
    const [endtDate, setEndDate] = useState(today);

    return (
        <>
            <SideMenu></SideMenu>
            <Style.Container width={containerSize}>
                <div className="top">
                    <div className="selectBox">
                        <div className="select">
                            <span onClick={() => { setIsSelect(true) }}>전체보기</span>
                            <img src={rewardyImage.downArrow} alt="" />
                            <ul onMouseLeave={() => { setIsSelect(false) }} onClick={() => { setIsSelect(false) }} className={isSelect ? "on" : ""}>
                                <li>전체보기</li>
                                <li>보상</li>
                                <li>차감</li>
                            </ul>
                        </div>
                    </div>

                    <div className="right">
                        <div className="buttons">
                            <button className='on'>1주일</button>
                            <button>1개월</button>
                            <button>3개월</button>
                        </div>
                        <div className='flex'>
                            <div className="date">
                                <div onClick={() => { setIsStartDate(true) }}>
                                    <span>{startDate}</span>
                                    <img src={rewardyImage.date} alt="" />
                                </div>
                                <span>~</span>
                                <div onClick={() => { setIsEndDate(true) }}>
                                    <span>{endtDate}</span>
                                    <img src={rewardyImage.date} alt="" />
                                </div>
                            </div>
                            <button>조회</button>
                            {isStartDate && <Calendar setIsCalendar={setIsStartDate} setValue={setStartDate}></Calendar>}
                            {isEndDate && <Calendar setIsCalendar={setIsEndDate} setValue={setEndDate}></Calendar>}
                        </div>
                    </div>
                </div>

                <div className="list">
                    <div className="head">
                        <div className="left">
                            <h4>일시</h4>
                            <h4>유형</h4>
                            <h4>상세내용</h4>
                        </div>
                        <div className="right">
                            <h4>코인</h4>
                            <h4>보낸이</h4>
                            <h4>받는이</h4>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div className="left">
                                <div>
                                    <p>2024-04-30 18:20:36</p>
                                    <p>파티보상</p>
                                </div>
                                <p>파티코인 분배</p>
                            </div>
                            <div className="right">
                                <p>+900</p>
                                <p>나</p>
                                <p>나</p>
                            </div>
                        </li>
                        <li>
                            <div className="left">
                                <div>
                                    <p>2024-04-30 18:20:36</p>
                                    <p>파티보상</p>
                                </div>
                                <p>파티코인 분배</p>
                            </div>
                            <div className="right">
                                <p>+900</p>
                                <p>나</p>
                                <p>나</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </Style.Container>
        </>
    );
};

export default Coin;