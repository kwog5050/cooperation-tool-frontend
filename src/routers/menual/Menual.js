import React from 'react';
import Nav from 'components/browser/menualNav/Nav';
import Start from 'pages/browser/menual/Start';

import { Route, Routes } from 'react-router-dom';

const Menual = () => {
    // 에디터로 글등록한거 써야함 보류
    return (
        <>
            <Nav></Nav>
            <Routes>
                <Route path='/start/*' element={<Start />}></Route>
            </Routes>
        </>
    );
};

export default Menual;