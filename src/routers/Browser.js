import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/browser/header/Header';
import Footer from 'components/browser/footer/Footer';
import Main from 'pages/browser/main/Main';

const Browser = () => {
    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route path='/' element={<Main />}></Route>
                </Routes>
            </main>

            <Footer />
        </>
    );
};

export default Browser;