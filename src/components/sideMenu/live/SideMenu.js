import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { off, on, toggle } from 'reduxs/slice/sideMenuSlice';

import useSetSideMenuWidth from 'hooks/useSetSideMenuWidth';

import { cooperationImage } from 'assets/images/imageConfig';

import * as Style from '../style';

const SideMenu = () => {
    const sideRef = useRef(null);
    const sideMenuContainer = useSelector((state) => state.sideMenuContainer.isSide);
    const sideMenuContainerDispatch = useDispatch();

    // 사이드메뉴 크기 저장
    useSetSideMenuWidth(sideRef);

    return (
        <Style.Container ref={sideRef} on={sideMenuContainer ? "true" : ""} style={{ left: "calc(-54rem + 70px)" }}>
            <div className="switch" onClick={() => { sideMenuContainerDispatch(toggle()) }}>
                <img src={cooperationImage.nextArrow} alt="사이드 메뉴 스위치" />
            </div>

            <div className="mobileOnSwitch" onClick={() => { sideMenuContainerDispatch(on()) }}>
                <button>메뉴보기</button>
            </div>

            <button className="mobileOffSwitch" onClick={() => { sideMenuContainerDispatch(off()) }}>
                <img src={cooperationImage.offArrow} alt="사이드 메뉴 스위치" />
            </button>

            <Style.Live>
                <h3>실시간 업무</h3>

                <div className="timer">
                    <h5>출근 후 업무시간</h5>
                    <span>
                        07
                        <b>:</b>
                        47
                        <b>:</b>
                        22
                    </span>
                </div>

                <div className="workInfo">
                    <ul>
                        <li>
                            <h5>업무</h5>
                            <b>77</b>
                        </li>
                        <li>
                            <h5>보고</h5>
                            <b>0</b>
                        </li>
                        <li>
                            <h5>요청</h5>
                            <b>2</b>
                        </li>
                        <li>
                            <h5>공유</h5>
                            <b>32</b>
                        </li>
                    </ul>
                </div>

                <div className="progressWork">
                    <h4>진행중이 업무 <span>30</span></h4>
                    <ul>
                        <li>
                            <div className="name">홍길동</div>
                            <p>일하는중입니다.</p>
                            <span>17:05</span>
                        </li>
                        <li>
                            <div className="name">홍길동</div>
                            <p>일하는중입니다.</p>
                            <span>17:05</span>
                        </li>
                        <li>
                            <div className="name">홍길동</div>
                            <p>일하는중입니다.</p>
                            <span>17:05</span>
                        </li>
                        <li>
                            <div className="name">홍길동</div>
                            <p>일하는중입니다.</p>
                            <span>17:05</span>
                        </li>
                        <li>
                            <div className="name">홍길동</div>
                            <p>일하는중입니다.</p>
                            <span>17:05</span>
                        </li>
                        <li>
                            <div className="name">홍길동</div>
                            <p>일하는중입니다.</p>
                            <span>17:05</span>
                        </li>
                        <li>
                            <div className="name">홍길동</div>
                            <p>일하는중입니다.</p>
                            <span>17:05</span>
                        </li>
                    </ul>
                </div>
            </Style.Live>
        </Style.Container>
    );
};

export default SideMenu;