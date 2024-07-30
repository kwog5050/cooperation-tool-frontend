import React, { useState } from 'react';
import moment from 'moment';

import Calendar from 'components/calendar/Calendar';
import Select from 'components/select/Select';

import { cooperationImage } from 'assets/images/imageConfig';

import * as Style from './style';

const Weekly = () => {
    const today = moment().format("YYYY-MM-DD");
    const [isCalendar, setIsCalendar] = useState(false);
    const [calendar, setCalendar] = useState(today);
    const [isTeam, setIsTeam] = useState(false);

    const weekOfMonth = moment(calendar).isoWeek() - moment(calendar).startOf('month').isoWeek() + 1;
    const year = moment(calendar).isoWeekYear();
    const month = moment(calendar).format("MM");
    const weekText = `${year}년 ${month}월 ${weekOfMonth}주`;

    // 주 단위로 이동
    const prevWeek = () => {
        setCalendar(moment(calendar).subtract(1, 'week').format("YYYY-MM-DD"));
    };
    const nextWeek = () => {
        setCalendar(moment(calendar).add(1, 'week').format("YYYY-MM-DD"));
    };

    return (
        <Style.Container>
            <div className="title">
                <h3>Weekly Team Summary</h3>

                <div className="date">
                    <button onClick={prevWeek}>
                        <img src={cooperationImage.todayworkPrev} alt="" />
                    </button>

                    <span onClick={() => { setIsCalendar(true) }}>
                        {weekText}
                    </span>
                    {isCalendar && <Calendar setIsCalendar={setIsCalendar} setValue={setCalendar} />}

                    <button onClick={nextWeek}>
                        <img src={cooperationImage.todayworkNext} alt="" />
                    </button>
                </div>

                <Select
                    isSelect={isTeam}
                    setIsSelect={setIsTeam}
                    span={"리워디"}
                    list={["리워디", "비즈폼", "비즈폼기프트"]}
                    width={24}
                ></Select>
            </div>

            <div className="table">
                <table>
                    <thead>
                        <tr>
                            <th>구성원</th>
                            <th>2024-05-13(월)</th>
                            <th>2024-05-13(월)</th>
                            <th>2024-05-13(월)</th>
                            <th>2024-05-13(월)</th>
                            <th>2024-05-13(월)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>홍길동</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>홍길동</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>홍길동</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>홍길동</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>홍길동</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>홍길동</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>홍길동</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>홍길동</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>홍길동</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>홍길동</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>홍길동</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>홍길동</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Style.Container>
    );
};

export default Weekly;