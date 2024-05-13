import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

// 캘린더를 감싸주는 스타일
export const CalendarWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`
// 캘린더를 불러옴
export const CalendarContainer = styled(Calendar)``;