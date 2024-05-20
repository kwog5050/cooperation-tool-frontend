import React, { useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import useElementWidth from 'hooks/useElementWidth';

import { media } from 'reduxs/slice/containerSizeSlice';
import { off } from 'reduxs/slice/sideMenuSlice';

import Header from 'components/rewardy/header/Header';
import Home from 'pages/rewardy/home/Home';
import Todaywork from 'pages/rewardy/todaywork/Todaywork';
import Weekly from 'pages/rewardy/todaywork/weekly/Weekly';
import Live from 'pages/rewardy/live/Live';
import Coin from 'pages/rewardy/coin/Coin';
import Challenge from 'pages/rewardy/challenge/Challenge';
import Party from 'pages/rewardy/party/Party';

const Rewardy = () => {
    const nav = useNavigate();
    const loaction = useLocation();
    const [isHome, setIsHome] = useState(false);
    const mainRef = useRef(null);
    const sideMenuContainer = useSelector((state) => state.sideMenuContainer.isSide);
    const sideMenuWidth = useSelector((state) => state.sideMenuContainer.size);
    const mainWidth = useElementWidth(mainRef);
    const containerSizeDispatch = useDispatch();
    const sideMenuContainerDispatch = useDispatch();

    // 메인컨테이너 크기 저장
    // 사이드메뉴 온오프 or 크기 마다 반응형할려고 만듬
    useEffect(() => {
        containerSizeDispatch(media(mainWidth));
    }, [mainWidth, containerSizeDispatch]);

    // 리워디 홈아니면 사이드메뉴 초기화
    useEffect(() => {
        if (loaction.pathname === "/rewardy") {
            setIsHome(false);
        } else {
            setIsHome(true);
        }

        sideMenuContainerDispatch(off());
    }, [nav])

    return (
        <>
            <Header />

            <Main is_side={`${sideMenuContainer}`} side={sideMenuWidth} is_home={`${isHome}`}>
                <main ref={mainRef}>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/todaywork' element={<Todaywork />}></Route>
                        <Route path='/live' element={<Live />}></Route>
                        <Route path='/coin' element={<Coin />}></Route>
                        <Route path='/challenge' element={<Challenge />}></Route>
                        <Route path='/party' element={<Party />}></Route>
                    </Routes>
                </main>
            </Main>
        </>
    );
};

const Main = styled.div`
    padding: ${(props) => props.is_side === "true" ? `70px 0px 0px ${props.side + 70}px` : "70px 0px 0px 70px"};
    min-height: 100vh;
    background-color: #ececec;
    transition: ${(props) => props.is_home === "true" ? "padding .5s" : "unset"};
    > main {
        > div{
            padding: 2rem 3rem;
        }
    }
    @media (max-width: 1024px) {
        padding: 64px 0px 0px;
        > main {
            > div{
                padding: 3rem 2rem;
            }
        }
    }
`

export default Rewardy;