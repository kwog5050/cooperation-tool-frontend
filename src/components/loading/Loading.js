import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { componentImages } from 'assets/images/imageConfig';

import * as Style from "./style";

const Loading = () => {
    // const nav = useNavigate()
    // const loadingTime = () => {
    //     let time = 0;
    //     const interval = setInterval(() => {
    //         time++;

    //         if(time >= 20){
    //             alert("Load delay error \n이전 페이지로 이동합니다.");
    //             clearInterval(interval);
    //             time = 0;
    //             nav(-1);
    //         }
    //     }, 1000);
    // }

    // useEffect(() => {
    //     loadingTime();
    // }, [])

    return (
        <Style.Loading>
            <div>
                <img src={componentImages.loading01} alt="로딩1" />
                <img src={componentImages.loading02} alt="로딩2" />
                <p>LODAING</p>
            </div>
        </Style.Loading>
    );
};

export default Loading;