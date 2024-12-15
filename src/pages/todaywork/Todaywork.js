import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';

import todayworkApi from 'apis/todaywork';

import SideMenu from 'components/sideMenu/todaywork/SideMenu';
import Calendar from 'components/calendar/Calendar';
import Select from 'components/select/Select';

import { cooperationImage } from 'assets/images/imageConfig';

import * as Style from './style';
import Loading from 'components/loading/Loading';

const Todaywork = () => {
    const today = moment().format("YYYY-MM-DD");
    const containerSize = useSelector((state) => state.containerSize.size);
    const [todayworkList, setTodayworkList] = useState(null);
    const [daySelect, setDaySelect] = useState(false);
    const [workTypeSelect, setWorkTypeSelect] = useState(false);
    const [isCalendar, setIsCalendar] = useState(false);
    const [calendar, setCalendar] = useState(today);
    const [isWorkSelect, setIsWorkSelect] = useState(false);
    const [workSelectIndex, setWorkSelectIndex] = useState(0);
    const [isTodayworkModify, setIsTodayworkModify] = useState(false);
    const [modifyTodayworkText, setTodayworkModifyText] = useState("");
    const [modifyTodayworkId, setTodayworkModifyId] = useState("");

    // 날짜이동
    const prevDay = () => {
        setCalendar(moment(calendar).subtract(1, 'day').format("YYYY-MM-DD"));
    }
    const nextDay = () => {
        setCalendar(moment(calendar).add(1, 'day').format("YYYY-MM-DD"));
    }

    // 업무리스트 메뉴바 클릭
    const workListSelectMenuClick = (index) => {
        setIsWorkSelect(true);
        setWorkSelectIndex(index);
    }

    // 오늘업무 수정 클릭
    const modifyTodayworkClick = (text, id) => {
        setTodayworkModifyText(text);
        setTodayworkModifyId(id);
        setIsWorkSelect(false);
        setIsTodayworkModify(true);
    }

    // 오늘업무 수정
    const modifyTodaywork = async () => {
        const res = await todayworkApi.modifyTodaywork({
            writeId: sessionStorage.getItem("email"),
            content: modifyTodayworkText,
            id: modifyTodayworkId
        })

        if (res.result === "success") {
            alert("수정 완료");
            setTodayworkModifyText("");
            setTodayworkModifyId("");
            setIsTodayworkModify(false);
        } else {
            alert("예기치 못한 오류 발생으로 수정 실패했습니다.");
        }

        getTodaywork();
    }

    // 오늘업무 삭제
    const deleteTodaywork = async (id) => {
        const res = await todayworkApi.deleteTodaywork({
            id: id,
            writeId: sessionStorage.getItem("email")
        });

        if (res.result === "success") {
            alert("삭제 완료");
        } else {
            alert("예기치 못한 오류 발생으로 삭제 실패했습니다.");
        }

        setIsWorkSelect(false);

        getTodaywork();
    }

    // 오늘업무 가져오기
    const getTodaywork = async () => {
        const res = await todayworkApi.getTodaywork({
            email: sessionStorage.getItem("email"),
            calendarDate: calendar
        });

        if (res.result === "success") {
            setTodayworkList(res.data);
        } else {
            setTodayworkList(undefined);
        }
    }

    useEffect(() => {
        getTodaywork();
    }, [calendar])

    const onChange = (e) => {
        const value = e.target.value;
        setTodayworkModifyText(value);
    }

    return (
        todayworkList === null
            ? <Loading />
            :
            <>
                <SideMenu getTodaywork={getTodaywork} calendar={calendar} setCalendar={setCalendar} />
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
                                <img src={cooperationImage.todayworkPrev} alt="" />
                            </button>

                            <span onClick={() => { setIsCalendar(true) }}>
                                {calendar}
                            </span>
                            {isCalendar && <Calendar setIsCalendar={setIsCalendar} setValue={setCalendar} />}

                            <button onClick={nextDay}>
                                <img src={cooperationImage.todayworkNext} alt="" />
                            </button>
                        </div>

                        <div className="buttons">
                            <Link to={"/cooperation/todaywork/weekly"}>
                                <img src={cooperationImage.todayworkDate} alt="" />
                                주간리포트
                            </Link>
                            <button><img src={cooperationImage.search} alt="" /></button>
                            <button><img src={cooperationImage.reset} alt="" /></button>
                        </div>
                    </div>

                    <div className='list'>
                        <ul>
                            {
                                todayworkList?.map((item, i) => {
                                    return <li key={i}>
                                        <div className="content">
                                            {/* 공유일때 아이콘 */}
                                            {
                                                item.share_id !== "" &&
                                                <span>
                                                    <img src={cooperationImage.share} alt="" />
                                                </span>
                                            }

                                            <div className="text">
                                                <p>
                                                    {/* 공유경우 span 추가 */}
                                                    {
                                                        item.share_id !== "" &&
                                                        <span>[{item.share_id}님이 공유함]</span>
                                                    }
                                                    {item.content}
                                                </p>
                                            </div>

                                            <div className="buttons">
                                                <button onClick={() => { workListSelectMenuClick(i) }}>
                                                    <img src={cooperationImage.todayworkBars} alt="" />
                                                </button>
                                                {isWorkSelect &&
                                                    workSelectIndex === i &&
                                                    <div className="workSelect" onMouseLeave={() => { setIsWorkSelect(false) }}>
                                                        <span onClick={() => {
                                                            deleteTodaywork(item.id)
                                                        }}>업무 삭제</span>
                                                        <span onClick={() => {
                                                            modifyTodayworkClick(item.content, item.id)
                                                        }}>업무 수정</span>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </li>
                                })
                            }
                            <li>
                                <div className="content">
                                    {/* 공유일때 아이콘 */}
                                    <span>
                                        <img src={cooperationImage.share} alt="" />
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
                                            <img src={cooperationImage.todayworkBars} alt="" />
                                        </button>
                                        <button>
                                            <img src={cooperationImage.todayworkMore} alt="" />
                                        </button>
                                    </div>
                                </div>

                                <div className="comment">
                                    <ol>
                                        <li>
                                            <div className="name">홍길동2번</div>
                                            <div className="text">
                                                <p>
                                                    <img src={cooperationImage.coin} alt="" />
                                                    1,000 협업에 감사합니다.
                                                </p>
                                                <div className="date">2024-05-08 오전 9:48분</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name">홍길동2번</div>
                                            <div className="text">
                                                <p>
                                                    협업에 감사합니다.
                                                </p>
                                                <div className="date">2024-05-08 오전 9:48분</div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name">홍길동2번</div>
                                            <div className="text">
                                                <p>
                                                    메모메모메모
                                                </p>
                                                <div className="date">
                                                    2024-05-08 오전 9:48분
                                                    {/* 내가쓴글이라면 삭제버튼추가 */}
                                                    <button><img src={cooperationImage.todayworkDelete} alt="" /></button>
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
                                        <img src={cooperationImage.todayworkCheckOff} alt="" />
                                    </button>
                                    <div className="text">
                                        <p>오늘업무내용~</p>
                                    </div>
                                    <div className="buttons">
                                        <button>
                                            <img src={cooperationImage.todayworkBars} alt="" />
                                        </button>
                                        <button>
                                            <img src={cooperationImage.todayworkMore} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* 수정 팝업 */}
                    {isTodayworkModify &&
                        <div className="modifyTodaywork">
                            <div className="box">
                                <h3>오늘업무 수정</h3>
                                <textarea type="text" name='password' onChange={onChange} value={modifyTodayworkText} />
                                <div className="submit">
                                    <button onClick={modifyTodaywork}>확인</button>
                                </div>
                            </div>
                            <div onClick={() => { setIsTodayworkModify(false) }} className="bg on"></div>
                        </div>
                    }
                </Style.Container>
            </>
    );
};

export default Todaywork;