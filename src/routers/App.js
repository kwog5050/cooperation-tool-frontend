import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Browser from "./Browser";
import Rewardy from "./Rewardy";
import NotFound from 'components/notFound/NotFound';

import "assets/css/common.css";
import Weekly from "pages/rewardy/todaywork/weekly/Weekly";

function App() {
    const nav = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [nav])

    return (
        <>
            <Routes>
                <Route path="/*" element={<Browser />}></Route>

                <Route path="/rewardy/*" element={<Rewardy />}></Route>
                {/* 얘만 틀려서 rewardy 라우터에서뺏음 */}
                <Route path='/rewardy/todaywork/weekly' element={<Weekly />}></Route>

                <Route path='/error/:status' element={<NotFound />}></Route>
            </Routes>
        </>
    );
}

export default App;
