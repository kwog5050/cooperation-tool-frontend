import styled from "styled-components";

export const Container = styled.div`
    padding: 1.5rem;
    display: grid;
    grid-template-columns: 25rem 1fr 54rem;
    gap: 1.5rem;
    @media (max-width:1750px) {
        grid-template-columns: 250px 1fr;
        grid-template-areas: 'a b' 'c c';
        > div{
            &:nth-child(1){
                grid-area: a;
            }
            &:nth-child(2){
                grid-area: b;
            }
            &:nth-child(3){
                grid-area: c;
            }
        }
    }
    @media (max-width:1210px) {
        grid-template-columns: 1fr;
        grid-template-areas: none;
        > div{
            &:nth-child(1){
                grid-area: unset;
            }
            &:nth-child(2){
                grid-area: unset;
            }
            &:nth-child(3){
                grid-area: unset;
            }
        }
    }
`

export const Timeline = styled.div`
    background-color: #fff;
    border-radius: 10px;
    height: 100%;
    padding: 3rem 2rem;
    h3{
        font-size: 1.8rem;
        font-weight: 500;
        color: #353535;
        letter-spacing: -1px;
    }
    .list{
        margin-top: 2rem;
        padding-left: 2rem;
        max-height: calc(81.1rem - 9.8rem);
        overflow-y: scroll;
        &::-webkit-scrollbar{
            display: none;;
        }
        ul{
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 1.5rem;
            li{
                background-color: #f8f9fd;
                padding: 1.7rem 2rem;
                border-radius: 10px;
                cursor: default;
                position: relative;
                &:hover{
                    background-color: #38c9d2;
                    p{
                        color: #fff;
                    }
                    span{
                        color: #e9e9e9;
                    }
                    .ball{
                        >div{
                            >div{
                                display: block;
                            }
                        }
                    }
                }
                &:first-child{
                    background-color: #38c9d2;
                    p{
                        color: #fff;
                    }
                    span{
                        color: #e9e9e9;
                    }
                    .ball{
                        >div{
                            >div{
                                display: block;
                            }
                        }
                    }
                }
                p{
                    font-size: 1.3rem;
                    font-weight: 500;
                }
                > span{
                    font-size: 1.2rem;
                    margin-top: 0.5rem;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    min-width: 8rem;
                    color: #aaa;
                    strong{
                        font-size: 1.2rem;
                        font-weight: 400;
                        display: flex;
                        align-items: center;
                        gap: 0.3rem;
                        img{
                            width: 14px;
                        }
                    }
                }
                .ball{
                    position: absolute;
                    top: 1rem;
                    left: -2rem;
                    > div {
                        width: 1rem;
                        height: 1rem;
                        border-radius: 50%;
                        border: 1px solid #38c9d2;
                        position: relative;
                        > div{
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%);
                            width: 0.5rem;
                            height: 0.5rem;
                            background-color: #38c9d2;
                            border-radius: 50%;
                            display: none;
                        }
                    }
                    .line{
                        position: absolute;
                        top: -6.4rem;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 0px;
                        height: 5.9rem;
                        border-left: 1px dashed #38c9d2
                    }
                }
            }
        }
    }
    @media (max-width:1210px) {
        width: 100%;
        overflow-x: scroll;
        &::-webkit-scrollbar{
            display: none;
        }
        .list{
            padding-left: 0;
            ul{
                display: flex;
                gap: 1.5rem;
                li{
                    *{
                        white-space: nowrap;
                    }
                    .ball{
                        display: none;
                    }
                }
            }
        }
    }
    @media (max-width:900px) {
        .list{
            ul{
                li{
                    p{
                        font-size: 1.5rem;
                    }
                    >span{
                        font-size: 1.4rem;
                    }
                }
            }
        }
    }
`

export const Status = styled.div`
    background-color: #fff;
    border-radius: 10px;
    height: 100%;
    padding: 8rem 2rem 3rem;
    .top{
        display: grid;
        grid-template-columns: 42rem 1fr;
        .profile{
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: center;
            .userBox{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                position: relative;
                padding-top: 2rem;
                width: 100%;
                > p{
                    position: absolute;
                    width: 38rem;
                    text-align: center;
                    background-color: #f0f3f8;
                    color: #454545;
                    font-size: 1.2rem;
                    padding: 1.5rem 0;
                    border-radius: 50px;
                    top: -5rem;
                    cursor: pointer;
                    &::after{
                        content: "";
                        position: absolute;
                        bottom: 1rem;
                        left: 4rem;
                        display: inline-block;
                        width: 0;
                        height: 0;
                        border-top: 10px solid #f0f3f8;
                        border-bottom: 10px solid transparent;
                        border-left: 10px solid #f0f3f8;
                        border-right: 10px solid transparent;
                    }
                }
                .profileImage{
                    position: relative;
                    .imageBox{
                        width: 77px;
                        height: 77px;
                        border: 50%;
                        overflow: hidden;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid #eee;
                        border-radius: 50%;
                        > img{
                            width: 100%;
                        }
                    }
                    .setImageButton{
                        position: absolute;
                        top: 85%;;
                        left: 85%;
                        transform: translate(-50%,-50%);
                        width: 36px;
                        height: 36px;
                        border-radius: 50%;
                        border: 1px solid #e5e5e5;
                        background-color: #fff;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                    }
                }
                .name{
                    p{
                        font-weight: 500;
                        font-size: 1.7rem;
                        margin-bottom: 0.4rem;
                    }
                    span{
                        color: #aaa;
                    }
                }
            }
            .graph{
                position: relative;
                width: 250px;
                height: 250px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 4.5rem;
                .chartData{
                    position: absolute;
                    width: 240px;
                    height: 240px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    > div{
                        width: 50px;
                        height: 50px;
                        position: absolute;
                        transform: translateX(-50%);
                        text-align: center;
                        &:nth-child(1){ top: 0%; left: 50%; transform: translate(-60%,-40%); }
                        &:nth-child(2){ top: 20%; left: 100%; transform: translateX(-70%);}
                        &:nth-child(3){ top: 65%; left: 100%; transform: translateX(-70%);}
                        &:nth-child(4){ top: 100%; left: 50%; transform: translate(-60%,-25%);}
                        &:nth-child(5){ top: 65%; left: 0%; transform: translateX(-50%);}
                        &:nth-child(6){ top: 20%; left: 0%; transform: translateX(-50%);}
                        h5{
                            margin-bottom: 5px;
                        }
                        span{
                            color: #aaa;
                        }
                        b{
                            color: #000;
                        }
                    }
                }
                .hexagon{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    img{
                        width: 39px;
                        height: 44px;
                    }
                    p{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        font-weight: bold;
                        color: #38c9d2;
                        font-size: 16px;
                    }
                }
                canvas{
                    width: 220px !important;
                    height: 220px !important;
                }
            }
        }
        .info{
            display: flex;
            gap: 1.5rem;
            flex-direction: column;
            h3{
                img{
                    &:hover ~ .hoverPopup{
                        opacity: 1;
                        visibility: visible;
                    }
                }
            }
            .mycoin{
                background-color: #f6f7f9;
                padding: 3rem 2rem;
                border-radius: 10px;
                h3{
                    color: #252525;
                    font-weight: 300;
                    position: relative;
                    img{
                        margin-left: 0.5rem;
                    }
                }
                > div{
                    text-align: right;
                    span{
                        display: flex;
                        align-items: end;
                        justify-content: end;
                        gap: 0.5rem;
                        font-weight: 300;
                        color: #f10006;
                        letter-spacing: 0.5px;
                        b{
                            font-size: 0.8rem;
                        }
                    }
                    > div{
                        font-size: 3.4rem;
                        font-weight: bold;
                        display: flex;
                        align-items: center;
                        justify-content: end;
                        margin-top: 2rem;
                        gap: 5px;
                        img{
                            width: 29px;
                        }
                    }
                }
            }
            .coin{
                border: 1px solid #e5e5e5;
                border-radius: 10px;
                padding: 0 2rem;
                ul{
                    display: flex;
                    flex-direction: column;
                    li{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 2rem 0;
                        &:nth-child(1){
                            border-bottom: 1px solid #e5e5e5;
                        }
                        h3{
                            position: relative;
                            img{
                                margin-left: 5px;
                            }
                        }
                        > div{
                            display: flex;
                            align-items: center;
                            gap: 0.5rem;
                            font-weight: bold;
                            font-size: 2.4rem;
                            > img{
                                width: 29px;
                            }
                        }
                    }
                }
            }
            .like{
                ul{
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    li{
                        border-radius: 10px;
                        flex: 1;
                        background-color: #f6f7f9;
                        position: relative;
                        padding: 2rem;
                        h3{
                            font-size: 1.6rem;
                            margin-bottom: 2.5rem;
                            position: relative;
                            z-index: 1;
                        }
                        > div{
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            position: relative;
                            z-index: 1;
                            .rank{
                                padding: 1rem 1.5rem;
                                display: inline-block;
                                background-color: #43454c;
                                border-radius: 50px;
                                color: #fff;
                            }
                            .score{
                                display: flex;
                                color: #aaa;
                                line-height: 1.2;
                                font-size: 1.8rem;
                                font-weight: bold;
                                align-items: end;
                                gap: 0.3rem;
                                b{
                                    font-size: 2.6rem;
                                    color: #38c9d2;
                                    line-height: 1;
                                }
                            }
                        }
                        > img{
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%,-50%);
                        }
                    }
                }
            }
            .hoverPopup{
                position: absolute;
                background-color: #43454c;
                width: 34rem;
                padding: 1.5rem;
                border-radius: 10px;
                opacity: 0;
                visibility: hidden;
                transition: opacity .3s;
                z-index: 2;
                top: 3rem;
                left: 0;
                &::after{
                    content: "";
                    position: absolute;
                    top: -5px;
                    width: 2rem;
                    height: 2rem;
                    transform: rotate(45deg);
                    background-color: #43454c;
                }
                p{
                    font-size: 1.4rem;
                    line-height: 1.5;
                    letter-spacing: -1px;
                    color: #fff;
                    position: relative;
                    z-index: 1;
                }
            }
            > div{
                &:nth-child(1){
                    .hoverPopup{
                        &::after{
                            left: 4.1rem;
                        }
                    }
                }
                &:nth-child(2){
                    ul{
                        li{
                            &:nth-child(1){
                                .hoverPopup{
                                    &::after{
                                        left: 10.1rem;
                                    }
                                }
                            }
                            &:nth-child(2){
                                .hoverPopup{
                                    &::after{
                                        left: 7.7rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .bottom{
        margin-top: 3rem;
        .aiAdviser{
            background-color: #38c9d2;
            width: 100%;
            position: relative;
            padding: 3rem 0;
            border-radius: 10px;
            img{
                position: absolute;
                bottom: 0;
                left: 3rem;
            }
            p{
                font-size: 1.6rem;
                color: #fff;
                padding-left: 16rem;
            }
            span{
                position: absolute;
                top: 50%;
                right: 3rem;
                transform: translateY(-50%);
                color: #38c9d2;
                background-color: #fff;
                padding: 0.7rem 1.5rem;
                border-radius: 5rem;
            }
        }
        ul{
            margin-top: 3rem;
            background-color: #f6f7f9;
            padding: 4rem 3rem;
            display: flex;
            border-radius: 10px;
            li{
                flex: 1;
                text-align: center;
                a{
                    h3{
                        color: #757575;
                        font-weight: 300;
                        font-size: 1.5rem;
                        letter-spacing: -1px;
                        margin-bottom: 0.5rem;
                    }
                    span{
                        color: #353535;
                        font-size: 2.5rem;
                        font-weight: bold;
                        letter-spacing: -1px;
                    }
                }
            }
            .zero{
                a{
                    pointer-events: none;
                    span{
                        color: #ccc;
                    }
                }
            }
        }
    }
    @media (max-width:1750px) {
        flex-direction: row;
        .staffStatus{
            .staff,
            .ai{
                flex: 1;
            }
            .ai{
                ul{
                    max-height: 23.3rem;
                }
            }
        }
    }
    @media (max-width:900px) {
        .top{
            grid-template-columns: 1fr;
            grid-gap: 4rem;
        }
    }
    @media (max-width:800px) {
        .bottom{
            .aiAdviser{
                display: flex;
                flex-direction: column;
                justify-self: center;
                align-items: center;
                gap: 1rem;
                padding: 15px 15px 110px;
                img{
                    left: 50%;
                    transform: translateX(-50%);
                }
                p{
                    text-align: center;
                    padding-left: 0;
                    line-height: 1.2;
                }
                span{
                    position: unset;
                    transform: unset;
                    order: -1;
                }
            }
        }
    }
    @media (max-width:770px) {
        .bottom{
            ul{
                padding: 2rem;
                li{
                    a{
                        h3{
                            font-size: 1.5rem;
                        }
                        span{
                            font-size: 2.2rem;
                        }
                    }
                }
            }
        }
    }
    @media (max-width:570px) {
        .top{
            .profile{
                .userBox{
                    > p{
                        width: 100%;
                        font-size: 1.5rem;
                    }
                }
            }
        }
        .bottom{
            ul{
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-row-gap: 1.5rem;
                padding: 1.5rem;
            }
        }
    }
    @media (max-width:480px) {
        .top{
            .info{
                .like{
                    ul{
                        flex-direction: column;
                        li{
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
    @media (max-width:400px) {
        .status{
            padding: 8rem 1.5rem 1.5rem;
            .top{
                .stat{
                    .userBox{
                        > p{
                            width: 30rem;
                        }
                        .profileImage{
                            .imageBox{
                                width: 6rem;
                                height: 6rem;
                            }
                        }
                        .name{
                            p{
                                font-size: 1.8rem;
                            }
                        }
                    }
                }
                .info{
                    .mycoin{
                        h3{
                            text-align: center;
                        }
                        > div{
                            span{
                                justify-content: center;
                                margin-top: 1rem;
                            }
                            > div{
                                justify-content: center;
                                font-size: 2.4rem;
                                margin-top: 1rem;
                                img{
                                    width: 20px;
                                }
                            }
                        }
                    }
                    .coin{
                        ul{
                            li{
                                flex-direction: column;
                                gap: 1rem;
                                > div{
                                    font-size: 2.4rem;
                                    img{
                                        width: 20px;
                                    }
                                }
                            }
                        }
                    }
                    .hoverPopup{
                        left: 50%;
                        transform: translateX(-50%);
                        width: 24rem;
                        p{
                            font-size: 1.4rem;
                        }
                    }
                    >div{
                        &:nth-child(1){
                            .hoverPopup{
                                &::after{
                                    left: 13.2rem;
                                }
                            }
                        }
                        &:nth-child(2){
                            ul{
                                li{
                                    &:nth-child(1){ 
                                        .hoverPopup{    
                                            &::after{
                                                left: 16.2rem;
                                            }
                                        }
                                    }
                                    &:nth-child(2){ 
                                        .hoverPopup{    
                                            &::after{
                                                left: 15rem;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    @media (max-width:380px) {
        .top{
            .stat{
                .graph{
                    transform: scale(0.9);
                }
            }
        }
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .staff{
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        background-color: #fff;
        .head{
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #f6f6f6;
            padding: 2rem;
            .switchList{
                ul{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    li{
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        > span{
                            color: #353535;
                        }
                    }
                }
            }
            .reset{
                display: flex;
                align-items: center;
                gap: 1rem;
                font-weight: 300;
                color: #aaa;
                img{
                    width: 14px;
                    cursor: pointer;
                    transition: transform .1s;
                    &:active{
                        transform: rotate(45deg);
                    }
                }
            }
        }
        .bottom{
            padding: 3rem 2rem;
            nav{
                background-color: #f6f7f9;
                padding: 0.5rem;
                border-radius: 10px;
                ul{
                    display: flex;
                    align-items:center;
                    li{
                        flex: 1;
                        button{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                            gap: 0.5rem;
                            padding: 1rem 0;
                            width: 100%;
                            border-radius: 10px;
                            cursor: pointer;
                            h3{
                                display: flex;
                                align-items: end;
                                font-weight: bold;
                                font-size: 1.8rem;
                                span{
                                    font-weight: 300;
                                    line-height: 1.1;
                                }
                            }
                            p{
                                color: #aaa;
                            }
                        }
                    }
                    .on{
                        button{
                            background-color: #fff;
                            box-shadow: 0 0 2px #00000022;
                        }
                    }
                }
            }
            .userList{
                margin-top: 2rem;
                ul{
                    display: flex;
                    align-items: start;
                    width: 100%;
                    li{
                        width: calc(100% / 5);
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                            width: 100%;
                        }
                        .profileImage{
                            width: 6.8rem;
                            height: 6.8rem;
                            overflow: hidden;
                            border-radius: 50%;
                            border: 1px solid #f0f1f4;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            img{
                                width: 100%;
                            }
                        }
                        h3{
                            margin: 0.5rem 0;
                        }
                        span{
                            font-size: 12px;
                        }
                    }
                    .more{
                        > a{
                            > div{
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                width: 6.8rem;
                                height: 6.8rem;
                                border-radius: 50%;
                                background-color: #c6c7c9;
                                transition: background .2s;
                                &:hover{
                                    background-color: #757575;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    .ai{
        background-color: #fff;
        flex: 1;
        border-radius: 10px;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .aiText{
            display: flex;
            align-items: center;
            justify-content: space-between;
            p{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 1.5rem;
                span{
                    background-color: #38c9d2;
                    color: #fff;
                    padding: 0.7rem 1.5rem;
                    border-radius: 50px;
                }
            }
            .reset{
                img{
                    width: 14px;
                    transition: transform .1s;
                    cursor: pointer;
                    &:active{
                        transform: rotate(45deg);
                    }
                }
            }
        }
        ul{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            height: 100%;
            max-height: 38.7rem;
            overflow-y: scroll;
            &::-webkit-scrollbar{
                display: none;
            }
            li{
                width: 100%;
                background-color: #f6f7f9;
                padding: 1.5rem 2rem;
                display: flex;
                gap: 1.5rem;
                align-items: center;
                border-radius: 10px;
                position: relative;
                .profileImage{
                    width: 6.8rem;
                    height: 6.8rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: hidden;
                    border: 1px solid #f0f1f4;
                    border-radius: 50%;
                }
                .content{
                    h3{
                        font-size: 1.5rem;
                        font-weight: 500;
                    }
                    p{
                        font-size: 1.3rem;
                        color: #858585;
                        margin: 0.5rem 0;
                        span{
                            font-size: 1.3rem;
                            color: #38c9d2;
                        }
                    }
                    > span{
                        font-size: 1.2rem;
                        color: #aaa;
                    }
                }
                .hover{
                    position: absolute;
                    top: 0;
                    left: 0;
                    background-color: #00000044;
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    opacity: 0;
                    transition: opacity .5s;
                    .like{
                        width: 5rem;
                        height: 5rem;
                        background-color: #38c9d2;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img{
                            width: 20px;
                        }
                    }
                    button{
                        position: absolute;
                        top: 1rem;
                        right: 1rem;
                        width: 2.5rem;
                        height: 2.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img{
                            width: 1.8rem;
                        }
                    }
                }
                &:hover{
                    .hover{
                        opacity: 1;
                    }
                }
            }
        }
    }
    @media (max-width:1210px) {
        .staffStatus{
            flex-direction: column;
            .staff{
                flex: none;
            }
        }
    }
    @media (max-width:480px) {
        .staff{
            .head{
                .switchList{
                    > ul{
                        > li{
                            flex-direction: column;
                        }
                    }
                }
            }
            .bottom{
                .userList{
                    ul{
                        li{
                            width: calc(100% / 3);
                            &:nth-child(3),
                            &:nth-child(4){
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }
    @media (max-width:400px) {
        .staff{
            .head{
                padding: 1.5rem;
            }
            .bottom{
                padding: 2rem 1.5rem;
            }
        }
        .ai{
            padding: 1.5rem;
            .aiText{
                p{
                    font-size: 1.5rem;
                    span{
                        padding: 0.7rem 1rem;
                        font-size: 1.5rem;
                    }
                }
            }
        }
    }
    @media (max-width:380px) {
        .staff{
            .head{
                .reset{
                    font-size: 1.4rem;
                    gap: 5px;
                }
            }
            .bottom{
                nav{
                    ul{
                        li{
                            button{
                                h3{
                                    font-size: 1.5rem;
                                    span{
                                        font-size: 1.4rem;
                                    }
                                }
                                p{
                                    font-size: 1.2rem;
                                }
                            }
                        }
                    }
                }
                .userList{
                    ul{
                        li{
                            .profileImage{
                                width: 50px;
                                height: 50px;
                            }
                            h3{
                                font-size: 1.3rem;
                            }
                        }
                        .more{
                            > a{
                                > div{
                                    width: 50px;
                                    height: 50px;
                                }
                            }
                        }
                    }
                }
            }
        }
        .ai{
            ul{
                li{
                    display: grid;
                    grid-template-columns: 6rem 1fr;
                    padding: 1.5rem;
                    .profileImage{
                        width: 50px;
                        height: 50px;
                        align-items: unset;
                    }
                    .content{
                        h3{
                            font-size: 1.5rem;
                        }
                        p{
                            font-size: 1.5rem;
                        }
                        span{
                            font-size: 1.4rem;
                        }
                    }
                }
            }
        }
    }
`