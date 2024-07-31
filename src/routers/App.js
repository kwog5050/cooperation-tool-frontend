import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import userApi from "apis/userApi";

import NotFound from 'components/notFound/NotFound';
import Login from "components/popup/Login";

import Cooperation from "./Cooperation";

import Weekly from "pages/todaywork/weekly/Weekly";

import "assets/css/common.css";

function App() {
    const nav = useNavigate();
    const location = useLocation();

    const tokenCheck = async () => {
        const res = await userApi.tokenCheck({
            email: sessionStorage.getItem("email"),
            token: sessionStorage.getItem("loginToken")
        });

        if (res.result !== "success") {
            alert("토큰이 일치 하지 않습니다. 로그아웃이 됩니다");
            sessionStorage.removeItem("email")
            sessionStorage.removeItem("loginToken")
            nav("/")
        }
    }

    useEffect(() => {
        if (location.pathname !== "/") {
            tokenCheck();
        }

        window.scrollTo(0, 0);
    }, [nav])

    return (
        <>
            <Routes>
                <Route path="/*" element={<Login />}></Route>

                <Route path="/cooperation/*" element={<Cooperation />}></Route>
                {/* 얘만 틀려서 cooperation 라우터에서뺏음 */}
                <Route path='/cooperation/todaywork/weekly' element={<Weekly />}></Route>

                <Route path='/error/:status' element={<NotFound />}></Route>
            </Routes>
        </>
    );
}

export default App;
