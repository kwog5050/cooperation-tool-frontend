import React from 'react';

import { cooperationImage } from 'assets/images/imageConfig';

import * as Style from './style';

/**
 * 
 * @param {*} isSelect 셀렉박스 온오프
 * @param {*} setIsSelect 셀렉박스 온오프 설정
 * @param {*} setValue 셀렉박스 값
 * @param {*} list 셀렉트 리스트
 * @param {*} span 셀렉트된 값
 * @param {*} width 셀렉트된 넓이
 * @returns 
 */
const Select = ({ isSelect, setIsSelect, setValue, list, span, width }) => {
    return (
        <Style.Container className="select" width={width}>
            <span onClick={() => { setIsSelect(true) }}>{span}</span>
            <img src={cooperationImage.downArrow} alt="" />
            <ul onMouseLeave={() => { setIsSelect(false) }} onClick={() => { setIsSelect(false) }} className={isSelect ? "on" : ""}>
                {
                    list?.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })
                }
            </ul>
        </Style.Container>
    );
};

export default Select;