import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggle } from 'reduxs/slice/sideMenuSlice';

import useSetSideMenuWidth from 'hooks/useSetSideMenuWidth';

import { rewardyImage } from 'assets/images/imageConfig';

import * as Style from '../style';

const SideMenu = () => {
    const sideRef = useRef(null);
    const sideMenuContainer = useSelector((state) => state.sideMenuContainer.isSide);
    const sideMenuContainerDispatch = useDispatch();

    // 사이드메뉴 크기 저장
    useSetSideMenuWidth(sideRef);

    return (
        <Style.Container ref={sideRef} on={sideMenuContainer ? "true" : ""} style={{ left: "calc(-51rem + 70px)" }}>
            <div className="switch" onClick={() => { sideMenuContainerDispatch(toggle()) }}>
                <img src={rewardyImage.nexrArrow} alt="사이드 메뉴 스위치" />
            </div>

            <Style.Challenge>
                <h3>챌린지</h3>

                <div className="box">
                    <ul>
                        <li>
                            <h5>도전가능</h5>
                            <b>0</b>
                        </li>
                        <li>
                            <h5>도전중</h5>
                            <b>0</b>
                        </li>
                        <li>
                            <h5>도전완료</h5>
                            <b>0</b>
                        </li>
                    </ul>
                </div>

                <h4>🏆 코인 현황</h4>

                <div className="box">
                    <ul>
                        <li>
                            <h5>내 코인</h5>
                            <b>5,400</b>
                        </li>
                        <li>
                            <h5>획득 가능한 코인</h5>
                            <b>0</b>
                        </li>
                    </ul>
                </div>

                <h4>📢 마감임박 챌린지</h4>

                <ul>
                    <li>나중에 디자인 확인 후 제작</li>
                </ul>
            </Style.Challenge>

        </Style.Container>
    );
};

export default SideMenu;