import React, { useEffect, useRef } from "react";
import moment from "moment";

import * as Style from "./style";

/**
 * 
 * @param {*} setIsCalendar 달력 온오프
 * @param {*} setValue 달력값저장
 * @returns 
 */
const Calendar = ({ setIsCalendar, setValue }) => {
    const calendarRef = useRef(null); // 컴포넌트의 ref

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setIsCalendar(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setIsCalendar]);

    const today = moment().format("YYYY-MM-DD");

    const onChange = (newDate) => {
        if (newDate instanceof Date) {
            newDate = moment(newDate);
        }
        setValue(newDate.format("YYYY-MM-DD"));
        setIsCalendar(false);
    };

    return (
        <Style.CalendarWrapper ref={calendarRef}>
            <Style.CalendarContainer
                value={moment(today)}
                onChange={onChange}
                formatDay={(locale, date) => moment(date).format("D")}
                formatYear={(locale, date) => moment(date).format("YYYY")}
                formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")}
                calendarType="gregory"
                showNeighboringMonth={false}
                next2Label={null}
                prev2Label={null}
                minDetail="year"
            />
        </Style.CalendarWrapper>
    );
};

export default Calendar;