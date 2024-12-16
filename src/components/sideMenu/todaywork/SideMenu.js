import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { off, on, toggle } from 'reduxs/slice/sideMenuSlice';

import useSetSideMenuWidth from 'hooks/useSetSideMenuWidth';

import Calendar from 'components/calendar/Calendar';

import { cooperationImage } from 'assets/images/imageConfig';

import * as Style from '../style';

import todayworkApi from 'apis/todaywork';

const SideMenu = ({ getTodaywork, calendar, setCalendar }) => {
    const today = moment().format("YYYY-MM-DD");
    const sideRef = useRef(null);
    const sideMenuContainer = useSelector((state) => state.sideMenuContainer.isSide);
    const sideMenuContainerDispatch = useDispatch();
    const [menuIndex, setMenuIndex] = useState(0);
    const [isCalendar, setIsCalendar] = useState(false);
    const [date, setDate] = useState(today);
    const [shareId, setShareId] = useState("");
    const [content, setContent] = useState("");

    // 사이드메뉴 크기 저장
    useSetSideMenuWidth(sideRef);

    // 오늘업무 작성
    const submit = async () => {
        const api = await todayworkApi.createTodaywork({
            writeId: sessionStorage.getItem("email"),
            shareId: shareId,
            date: date,
            content: content,
            isShare: menuIndex
        })

        if (api.result === "success") {
            alert("작성 완료");
            setMenuIndex(0);
            setContent("");
            if (calendar !== date) {
                if (window.confirm("작성 날짜로 이동하시겠습니까?")) {
                    setCalendar(date);
                }
            }
            getTodaywork();
        }
    }

    const onChange = (e) => {
        const value = e.target.value;
        setContent(value);
    }

    return (
        <Style.Container ref={sideRef} on={sideMenuContainer ? "true" : ""} style={{ left: "calc(-51rem + 70px)" }}>
            <div className="switch" onClick={() => { sideMenuContainerDispatch(toggle()) }}>
                <img src={cooperationImage.nextArrow} alt="사이드 메뉴 스위치" />
            </div>

            <div className="mobileOnSwitch" onClick={() => { sideMenuContainerDispatch(on()) }}>
                <button>오늘업무 등록</button>
            </div>

            <button className="mobileOffSwitch" onClick={() => { sideMenuContainerDispatch(off()) }}>
                <img src={cooperationImage.offArrow} alt="사이드 메뉴 스위치" />
            </button>

            <Style.Todaywork>
                <h3>오늘업무</h3>

                <nav className="menu">
                    <ul>
                        <li onClick={() => { setMenuIndex(0) }} className={menuIndex === 0 ? "on afterNone" : "afterNone"}>나의 업무</li>
                        <li onClick={() => { setMenuIndex(1) }} className={menuIndex === 1 ? "on" : ""}>공유</li>
                    </ul>
                </nav>

                <form rel="todaywork">
                    <input type="hidden" name="todayworkType" value="나의업무" />
                    <div className="box">
                        <label onClick={() => { setIsCalendar(!isCalendar) }} className="date">
                            <img src={cooperationImage.date} alt="달력아이콘" />
                            <span>{date}</span>
                        </label>

                        {isCalendar && <Calendar setIsCalendar={setIsCalendar} setValue={setDate} />}

                        <textarea name="todayworkContent" placeholder="업무를 입력해주세요." value={content} onChange={onChange}></textarea>
                        {
                            menuIndex === 1 &&
                            <div className="shareButton">
                                <button type='button'>받을사람</button>
                            </div>
                        }
                    </div>


                    <div className="submit">
                        <button type="button" onClick={submit}>등록하기</button>
                    </div>
                </form>
            </Style.Todaywork>
        </Style.Container>
    );
};

export default SideMenu;