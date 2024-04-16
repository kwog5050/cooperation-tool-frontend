import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from 'components/browser/header/Header';
import Footer from 'components/browser/footer/Footer';
import Main from 'pages/browser/main/Main';
import Todaywork from 'pages/browser/service/Todaywork';
import Live from 'pages/browser/service/Live';
import Coin from 'pages/browser/service/Coin';
import Challenge from 'pages/browser/service/Challenge';
import Party from 'pages/browser/service/Party';
import Insight from 'pages/browser/service/Insight';
import Price from 'pages/browser/price/Price';
import Question from 'pages/browser/question/Question';
import Notice from 'pages/browser/notice/Notice';
import Customer from 'pages/browser/customer/Customer';

import Menual from './menual/Menual';

const Browser = () => {
    return (
        <>
            <Header />

            <main>
                <Routes>
                    <Route path='/' element={<Main />}></Route>

                    <Route path='/todaywork' element={<Todaywork />}></Route>
                    <Route path='/live' element={<Live />}></Route>
                    <Route path='/coin' element={<Coin />}></Route>
                    <Route path='/challenge' element={<Challenge />}></Route>
                    <Route path='/party' element={<Party />}></Route>
                    <Route path='/insight' element={<Insight />}></Route>
                    <Route path='/price' element={<Price />}></Route>
                    <Route path='/question/:boardIndex' element={<Question />}></Route>
                    <Route path='/menual/*' element={<Menual />}></Route>
                    <Route path='/notice/:boardIndex' element={<Notice />}></Route>
                    <Route path='/customer' element={<Customer />}></Route>
                </Routes>
            </main>

            <Footer />
        </>
    );
};

export default Browser;