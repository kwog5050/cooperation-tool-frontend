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
        <Style.Container ref={sideRef} on={sideMenuContainer ? "true" : ""} style={{ left: "calc(-51rem + 70px)" }}>
            <div className="switch" onClick={() => { sideMenuContainerDispatch(toggle()) }}>
                <img src={cooperationImage.nexrArrow} alt="사이드 메뉴 스위치" />
            </div>

            <div className="mobileOnSwitch" onClick={() => { sideMenuContainerDispatch(on()) }}>
                <button>메뉴보기</button>
            </div>

            <button className="mobileOffSwitch" onClick={() => { sideMenuContainerDispatch(off()) }}>
                <img src={cooperationImage.offArrow} alt="사이드 메뉴 스위치" />
            </button>

            <Style.Coin>
                <h3>보상/코인</h3>

                <div className="box">
                    <h5>내가 획득한 코인 <img src={cooperationImage.icoQ} alt="" /></h5>
                    <b>5,400 <img src={cooperationImage.coin} alt="" /></b>
                    <button>출금 신청</button>
                </div>

                <div className="box">
                    <h5>사용 가능한 공용 코인 <img src={cooperationImage.icoQ} alt="" /></h5>
                    <b>5,400 <img src={cooperationImage.coin} alt="" /></b>
                    <button>보상하기</button>
                </div>

                <div className="announcement">
                    <h4>🔍 코인 이용 안내</h4>
                    <div className="content">
                        <p>
                            리워디에서 사용되는 "코인"은 현금과 똑같은 비율을 가지며, 리워디에서 구성원들에게 보상하기 위해 사용되는 현금성 가상머니 입니다. <br />
                            (1,000코인 = 1,000원) <br />
                            <br />
                            코인은 공용코인과 내코인으로 구분되며 차이점은 아래와 같습니다. <br /><br />
                            <b>1. 공용코인</b> <br />
                            <br />
                            - 리워디 내에서 보상을 위해 사용되는 가상머니입니다.<br />
                            - 관리자 권한을 가진 사용자가 충전을 통해서 가상머니를 충전할 수 있습니다. (충전수수료 5% 발생)<br /><br />
                            <b>2. 내코인</b><br />
                            <br />
                            - 업무보상, 챌린지참여, 파티클리어 등을 통해서 보상받은 코인을 말합니다.<br />
                            - 보상 메뉴의 출금하기 기능을 통해서 우리회사에 보상을 요청할 수 있습니다.<br />
                            - 출금하기를 클릭하면 출금요청한 금액이 우리회사의 관리자에게 출금신청 리스트로 보여지게 됩니다.<br />
                            - 요청받은 코인은 급여에 포함하거나 별도의 방식(포상)을 통해서 구성원에게 지급하게 됩니다. (우리회사의 정책에 따라서 달라짐)
                        </p>
                    </div>
                </div>
            </Style.Coin>

        </Style.Container>
    );
};

export default SideMenu;