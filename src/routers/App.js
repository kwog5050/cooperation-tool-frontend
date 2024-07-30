import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import NotFound from 'components/notFound/NotFound';

import Cooperation from "./Cooperation";

import Weekly from "pages/todaywork/weekly/Weekly";

import "assets/css/common.css";
import Login from "components/popup/Login";

function App() {
    const nav = useNavigate();

    useEffect(() => {
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
