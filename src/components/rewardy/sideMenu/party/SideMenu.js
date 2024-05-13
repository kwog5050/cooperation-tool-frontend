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
        <Style.Container ref={sideRef} on={sideMenuContainer ? "true" : "true"} style={{ left: "calc(-51rem + 70px)" }}>
            <div className="switch" onClick={() => { sideMenuContainerDispatch(toggle()) }}>
                <img src={rewardyImage.nexrArrow} alt="사이드 메뉴 스위치" />
            </div>

            <Style.Party>
                <h3>파티</h3>

                <div className="box">
                    <ul>
                        <li>
                            <h5>내 파티</h5>
                            <b>0</b>
                        </li>
                        <li>
                            <h5>원활</h5>
                            <b><div className='t1'></div>0</b>
                        </li>
                        <li>
                            <h5>보통</h5>
                            <b><div className='t2'></div>0</b>
                        </li>
                        <li>
                            <h5>지연</h5>
                            <b><div className='t3'></div>0</b>
                        </li>
                    </ul>
                </div>

                <h4>미확인 업무 <span>2</span></h4>

                <ul>
                    <li>
                        <div className="content">
                            <h5>
                                <div></div>
                                <p>파티파티파티파티파티</p>
                            </h5>
                            <p>마지막 업데이트 : 2024-05-13 16:44:44</p>
                        </div>

                        <div className="view">미확인 1건</div>
                    </li>
                </ul>
            </Style.Party>

        </Style.Container>
    );
};

export default SideMenu;