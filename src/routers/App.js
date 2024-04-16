import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Browser from "./Browser";
import Rewardy from "./Rewardy";

import "assets/css/common.css";

function App() {
    return (
        <>
            <Routes>
                <Route path="/*" element={<Browser />}></Route>
                <Route path="/rewardy" element={<Rewardy />}></Route>
            </Routes>
        </>
    );
}

export default App;
