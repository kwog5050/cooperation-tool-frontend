import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';

import SideMenu from 'components/rewardy/sideMenu/todaywork/SideMenu';
import Calendar from 'components/calendar/Calendar';
import Select from 'components/select/Select';

import { rewardyImage } from 'assets/images/imageConfig';

import * as Style from './style';

const Todaywork = () => {
    const today = moment().format("YYYY-MM-DD");
    const containerSize = useSelector((state) => state.containerSize.size);
    const [daySelect, setDaySelect] = useState(false);
    const [workTypeSelect, setWorkTypeSelect] = useState(false);
    const [isCalendar, setIsCalendar] = useState(false);
    const [calendar, setCalendar] = useState(today);

    // 날짜이동
    const prevDay = () => {
        setCalendar(moment(calendar).subtract(1, 'day').format("YYYY-MM-DD"));
    }
    const nextDay = () => {
        setCalendar(moment(calendar).add(1, 'day').format("YYYY-MM-DD"));
    }

    return (
        <>
            <SideMenu />
            <Style.Container width={containerSize}>
                <div className='top'>
                    <div className="selectBox">
                        <Select
                            isSelect={daySelect}
                            setIsSelect={setDaySelect}
                            list={["일일", "주간", "월간"]}
                            span={"일일"}
                            width={10}
                        ></Select>
                        <Select
                            isSelect={workTypeSelect}
                            setIsSelect={setWorkTypeSelect}
                            list={["업무 전체보기", "업무", "보고", "요청", "공유"]}
                            span={"업무 전체보기"}
                            width={13.3}
                        ></Select>
                    </div>

                    <div className="date">
                        <button onClick={prevDay}>
                            <img src={rewardyImage.todayworkPrev} alt="" />
                        </button>

                        <span onClick={() => { setIsCalendar(true) }}>
                            {calendar}
                        </span>
                        {isCalendar && <Calendar setIsCalendar={setIsCalendar} setValue={setCalendar} />}

                        <button onClick={nextDay}>
                            <img src={rewardyImage.todayworkNext} alt="" />
                        </button>
                    </div>

                    <div className="buttons">
                        <Link to={"/rewardy/todaywork/weekly"}>
                            <img src={rewardyImage.todayworkDate} alt="" />
                            주간리포트
                        </Link>
                        <button><img src={rewardyImage.search} alt="" /></button>
                        <button><img src={rewardyImage.reset} alt="" /></button>
                    </div>
                </div>

                <div className='list'>
                    <ul>
                        <li>
                            <div className="content">
                                {/* 공유일때 아이콘 */}
                                <span>
                                    <img src={rewardyImage.share} alt="" />
                                </span>

                                <div className="text">
                                    <p>
                                        {/* 공유경우 span 추가 */}
                                        <span>[홍길동님이 공유함]</span>
                                        오늘업무내용~
                                    </p>
                                </div>

                                <div className="buttons">
                                    <button>
                                        <img src={rewardyImage.todayworkBars} alt="" />
                                    </button>
                                    <button>
                                        <img src={rewardyImage.todayworkMore} alt="" />
                                    </button>
                                </div>
                            </div>

                            <div className="comment">
                                <ol>
                                    <li>
                                        <div className="name">권정우</div>
                                        <div className="text">
                                            <p>
                                                <img src={rewardyImage.coin} alt="" />
                                                1,000 협업에 감사합니다.
                                            </p>
                                            <div className="date">2024-05-08 오전 9:48분</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="name">권정우</div>
                                        <div className="text">
                                            <p>
                                                협업에 감사합니다.
                                            </p>
                                            <div className="date">2024-05-08 오전 9:48분</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="name">권정우</div>
                                        <div className="text">
                                            <p>
                                                메모메모메모
                                            </p>
                                            <div className="date">
                                                2024-05-08 오전 9:48분
                                                {/* 내가쓴글이라면 삭제버튼추가 */}
                                                <button><img src={rewardyImage.todayworkDelete} alt="" /></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        {/* ai 경우 */}
                                        <div className="ai">AI</div>
                                        <div className="text">
                                            <p>에너지에 감동합니다.</p>
                                            <div className="date">2024-05-08 오전 9:48분</div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </li>
                        <li>
                            <div className="content">
                                <button>
                                    <img src={rewardyImage.todayworkCheckOff} alt="" />
                                </button>
                                <div className="text">
                                    <p>오늘업무내용~</p>
                                </div>
                                <div className="buttons">
                                    <button>
                                        <img src={rewardyImage.todayworkBars} alt="" />
                                    </button>
                                    <button>
                                        <img src={rewardyImage.todayworkMore} alt="" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Style.Container>
        </>
    );
};

export default Todaywork;