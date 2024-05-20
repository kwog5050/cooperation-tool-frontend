import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { off, on, toggle } from 'reduxs/slice/sideMenuSlice';

import useSetSideMenuWidth from 'hooks/useSetSideMenuWidth';

import Calendar from 'components/calendar/Calendar';
import { hourTime, minTime } from './timeData';

import { rewardyImage } from 'assets/images/imageConfig';

import * as Style from '../style';

const SideMenu = () => {
    const today = moment().format("YYYY-MM-DD");
    const sideRef = useRef(null);
    const sideMenuContainer = useSelector((state) => state.sideMenuContainer.isSide);
    const sideMenuContainerDispatch = useDispatch();
    const [menuIndex, setMenuIndex] = useState(0);
    const [workIndex, setWorkIndex] = useState(0);
    const [timeIndex, setTimeIndex] = useState(0);
    const [isCalendar, setIsCalendar] = useState(false);
    const [date, setDate] = useState(today);

    // 연차, 반차, 외출 등 클릭
    const handleWorkIndex = (index) => {
        if (index === workIndex) {
            setWorkIndex(0);
            return;
        }
        setWorkIndex(index);
    }

    // 시간 클릭
    const handleTimeIndex = (index) => {
        if (index === timeIndex) {
            setTimeIndex(0);
            return;
        }
        setTimeIndex(index);
    }

    // 사이드메뉴 크기 저장
    useSetSideMenuWidth(sideRef);

    return (
        <Style.Container ref={sideRef} on={sideMenuContainer ? "true" : ""} style={{ left: "calc(-51rem + 70px)" }}>
            <div className="switch" onClick={() => { sideMenuContainerDispatch(toggle()) }}>
                <img src={rewardyImage.nexrArrow} alt="사이드 메뉴 스위치" />
            </div>

            <div className="mobileOnSwitch" onClick={() => { sideMenuContainerDispatch(on()) }}>
                <button>오늘업무 등록</button>
            </div>

            <button className="mobileOffSwitch" onClick={() => { sideMenuContainerDispatch(off()) }}>
                <img src={rewardyImage.offArrow} alt="사이드 메뉴 스위치" />
            </button>

            <Style.Todaywork>
                <h3>오늘업무</h3>

                <nav className="menu">
                    <ul>
                        <li onClick={() => { setMenuIndex(0) }} className={menuIndex === 0 ? "on afterNone" : "afterNone"}>나의 업무</li>
                        <li onClick={() => { setMenuIndex(1) }} className={menuIndex === 1 ? "on" : ""}>보고</li>
                        <li onClick={() => { setMenuIndex(2) }} className={menuIndex === 2 ? "on" : ""}>요청</li>
                        <li onClick={() => { setMenuIndex(3) }} className={menuIndex === 3 ? "on" : ""}>공유</li>
                    </ul>
                </nav>

                <form rel="todaywork">
                    <input type="hidden" name="todayworkType" value="나의업무" />
                    <div className="box">
                        <label onClick={() => { setIsCalendar(!isCalendar) }} className={menuIndex === 1 ? "date hide" : "date"}>
                            <img src={rewardyImage.date} alt="달력아이콘" />
                            <span>{date}</span>
                        </label>

                        {isCalendar && <Calendar setIsCalendar={setIsCalendar} setValue={setDate} />}

                        <input className={menuIndex === 1 ? "title" : "title hide"} name="todayworkTitle" placeholder="제목을 작성 해주세요."></input>

                        <textarea name="todayworkContent" placeholder="업무를 입력해주세요."></textarea>

                        <div className={menuIndex === 0 ? "slideButton" : "slideButton hide"}>
                            <input type="hidden" name="workType" value="" />
                            <ul>
                                <li onClick={() => { handleWorkIndex(1) }} className={workIndex === 1 ? "on" : ""}>연차</li>
                                <li onClick={() => { handleWorkIndex(2) }} className={workIndex === 2 ? "on" : ""}>반차</li>
                                <li onClick={() => { handleWorkIndex(3) }} className={workIndex === 3 ? "on" : ""}>외출</li>
                                <li onClick={() => { handleWorkIndex(4) }} className={workIndex === 4 ? "on" : ""}>조퇴</li>
                                <li onClick={() => { handleWorkIndex(5) }} className={workIndex === 5 ? "on" : ""}>미팅</li>
                                <li onClick={() => { handleWorkIndex(6) }} className={workIndex === 6 ? "on" : ""}>회의</li>
                                <li onClick={() => { handleWorkIndex(7) }} className={workIndex === 7 ? "on" : ""}>출장</li>
                                <li onClick={() => { handleWorkIndex(8) }} className={workIndex === 8 ? "on" : ""}>교육</li>
                            </ul>
                        </div>

                        <div className={workIndex !== 0 && workIndex !== 1 ? "timeBox on" : "timeBox"}>
                            <div className="startTime">
                                <div onClick={() => { handleTimeIndex(1) }} className="hour">
                                    <span>09</span>

                                    <img src={rewardyImage.downArrow} alt="" />

                                    <ul className={timeIndex === 1 ? "on" : ""}>
                                        {
                                            hourTime.map((item, i) => {
                                                return <li key={i}>{item}</li>
                                            })
                                        }
                                    </ul>
                                </div>

                                <span>:</span>

                                <div onClick={() => { handleTimeIndex(2) }} className="min">
                                    <span>30</span>

                                    <img src={rewardyImage.downArrow} alt="" />

                                    <ul className={timeIndex === 2 ? "on" : ""}>
                                        {
                                            minTime.map((item, i) => {
                                                return <li key={i}>{item}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>

                            <span>~</span>

                            <div className="endtTime">
                                <div onClick={() => { handleTimeIndex(3) }} className="hour">
                                    <span>18</span>

                                    <img src={rewardyImage.downArrow} alt="" />

                                    <ul className={timeIndex === 3 ? "on" : ""}>
                                        {
                                            hourTime.map((item, i) => {
                                                return <li key={i}>{item}</li>
                                            })
                                        }
                                    </ul>
                                </div>

                                <span>:</span>

                                <div onClick={() => { handleTimeIndex(4) }} className="min">
                                    <span>30</span>

                                    <img src={rewardyImage.downArrow} alt="" />

                                    <ul className={timeIndex === 4 ? "on" : ""}>
                                        {
                                            minTime.map((item, i) => {
                                                return <li key={i}>{item}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="buttons">
                            <button type="button">
                                <input type="file" name="todayworkFile1" />
                                <input type="file" name="todayworkFile2" />
                                <input type="file" name="todayworkFile3" />
                                <img src={rewardyImage.file} alt="" />
                                <span>첨부파일</span>
                            </button>
                            <button type="button" className={menuIndex === 0 ? "hide" : ""}>
                                <img src={rewardyImage.user} alt="" />
                                <span>받을사람</span>
                            </button>
                            <button type="button">
                                <img src={rewardyImage.party} alt="" />
                                <span>파티연결</span>
                            </button>
                        </div>
                    </div>

                    <div className="submit">
                        <div className="lock">
                            <img src={rewardyImage.lockOff} alt="" />
                        </div>

                        <button type="button">등록하기</button>
                    </div>
                </form>
            </Style.Todaywork>
        </Style.Container>
    );
};

export default SideMenu;