import styled, { css } from "styled-components";

export const Head = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    padding: 15px 30px 15px 100px;
    z-index: 10;
    .mobileContainer{
        display: none;
        align-items: center;
        gap: 20px;
        .mobileButton{
            position: relative;
            width: 3rem;
            height: 3rem;
            display: block;
            cursor: pointer;
            span{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: #fff;
                width: 2.5rem;
                height: 2px;
                transition: transform .5s;
                &:nth-child(1){
                    transform: translate(-50%, -50%) translateY(8px);
                }
                &:nth-child(3){
                    transform: translate(-50%, -50%) translateY(-8px);
                }
            }
        }
    }
    .mobileButton.on{
        span{
            &:nth-child(1){
                transform: translate(-50%, -50%) rotate(-45deg);
            }
            &:nth-child(1){
                display: none;
            }
            &:nth-child(3){
                transform: translate(-50%, -50%) rotate(45deg);
            }
        }
    }
    > .icons{
        > ul{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            > li{
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                position: relative;
                &:nth-child(1){
                    >img{
                        max-width: 19px;
                        max-height: 21px;
                    }
                }
                &:nth-child(2){
                    >img{
                        max-width: 31px;
                        max-height: 31px;
                    }
                }
                &:not(:nth-child(3)){
                    width: 40px;
                    height: 40px;
                }
                .profile{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    > img{
                        &:nth-child(1){
                            max-width: 40px;
                            max-height: 40px;
                            border: 1px solid #eaeaea;
                            border-radius: 50%;
                        }
                        &:nth-child(3){
                            padding-left: 20px;
                        }
                    }
                }
            }
        }
    }
    @media (max-width:1024px) {
        background-color: #43454c;
        padding: 12px 3rem;
        justify-content: space-between;
        .mobileContainer{
            display: flex;
        }
        h1{
            display: none;
        }  
        .icons{
            ul{
                gap: 0px;
                li{
                    >.profile{
                        margin-left: 7px;
                        img{
                            border: none !important;
                        }
                        span,
                        .arrow{
                            display: none;
                        }
                    }
                }
            }
        }
    }
    @media (max-width:380px) {
        .mobileContainer{
            a{
                img{
                    width: 10rem;
                }
            }
        }
    }
`

export const Popup = styled.div`
    position: absolute;
    top: 110%;
    right: -50px;
    background-color: #f1f2f5;
    z-index: 10;
    box-shadow: 1px 1px 3px #00000066;
    border-radius: 10px;
    cursor: default;
    display: none;
    > .head{
        width: 100%;
        background-color: #fff;
        padding: 2rem;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .content{
        padding: 2rem;
    }
    ${(props) => props.on && css`
        display: block;
        &::after{
            content: "";
            position: absolute;
            top: 0;
            right: 50px;
            width: 40px;
            height: 40px;
            background-color: #fff;
            transform: rotate(-45deg);
            z-index: -1;
            box-shadow: 0px 1px 3px #00000066;
        }
    `}
    @media (max-width:600px) {
        top:125%;
        &::after{
            width: 30px;
            height: 30px;
        }
    }
`

export const Note = styled(Popup)`
    width: 54rem;
    > .head{
        > div {
            > div{
                display: flex;
                gap: 0.7rem;
                button{
                    font-weight: bold;
                    color: #aaa;
                    font-size: 1.7rem;
                    cursor: pointer;
                }
                button.on{
                    color: #000;
                }
                > p{
                    color: #aaa;
                }
            }
        }
    }
    > .content{
        .list{
            border: 1px solid #e5e5e5;
            background-color: #fff;
            border-radius: 10px;
            overflow: hidden;
            .title{
                background-color: #f6f7f9;
                padding: 2rem;
                display: grid;
                grid-template-columns: 10rem 1fr 10rem;
                span{
                    font-weight: 500;
                    display: inline-block;
                    &:not(:nth-child(2)){
                        text-align: center;
                    }
                }
                span.none{
                    display: none;
                }
            }
            ol{
                max-height: 20rem;
                overflow-y: scroll;
                > li{
                    display: grid;
                    grid-template-columns: 10rem 1fr 10rem;
                    padding: 0 2rem;
                    &:not(:last-child){
                        border-bottom: 1px solid #e5e5e5;
                    }
                    span{
                        line-height: 4rem;
                        display: -webkit-box;
                        word-wrap: break-word;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        &:not(:nth-child(2)){
                            text-align: center;
                        }
                    }
                }
            }
        }
        > p{
            background-color: #fff;
            padding: 1.5rem;
            text-align: center;
        }
    }
    @media (max-width:600px) {
        width: 40rem;
        right: -90px;
        &::after{
            right: 95px;
        }
        .head{
            p{
                display: none;
            }
        }
        .content{
            .list{
                .title{
                    grid-template-columns: 1fr 10rem;
                    span{
                        &:nth-child(1){
                            display: none;
                        }
                    }
                    
                }
                ol{
                    li{
                        grid-template-columns: 1fr 10rem;
                        span{
                            &:nth-child(1){
                                display: none;
                            }
                        }
                    }
                }
            }
        }
    }
`

export const Notification = styled(Popup)`
    width: 36.5rem;
    > div{
        h3{
            display: flex;
            align-items: center;
            gap: 1rem;
            span{
                font-weight: 500;
                font-weight: 1.7rem;
            }
            img{
                cursor: pointer;
                display: none;
            }
        }
        button{
            cursor: pointer;
        }
    }
    .content{
        max-height: 50rem;
        overflow-y: scroll;
        .list{
            display: block;
            border-radius: 10px;
            ol{
                display: flex;
                flex-direction: column;
                gap: 1rem;  
                width: 100%;
                li{
                    a{
                        border: 1px solid #e5e5e5;
                        background-color: #fff;
                        border-radius: 10px;
                        overflow: hidden;
                        width: 100%;
                        .title{
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            padding: 1.5rem 1.5rem 0 1.5rem;
                            margin-bottom: 2rem;
                            > div{
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                gap: 0.5rem;
                                img{
                                    width: 23px;
                                }
                                h3{
                                    font-weight: 500;
                                    font-size: 1.7rem;
                                }
                            }
                            button{
                                cursor: pointer;
                                img{
                                    width: 19px;
                                }
                            }
                        }
                        .text{
                            display: -webkit-box;
                            word-wrap: break-word;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            max-height: 6.5rem;
                            padding: 0px 1.5rem;
                            margin-bottom: 2rem;
                            p{
                                font-size: 1.5rem;
                                line-height: 1.5;
                            }
                        }
                        .date{
                            padding: 1.5rem;
                            background-color: #fafafa;
                            p{
                                font-size: 1.5rem;
                                color: #808080;
                            }
                        }
                    }
                }
            }
            > p {
                background-color: #fff;
                padding: 1.5rem;
                text-align: center;
                border-radius: 10px;
            }
        }
        .setting{
            display: none;
            .all{
                padding: 2rem;
                background-color: #fff;
                border-radius: 10px;
                h3{
                    font-size: 1.6rem;
                    font-weight: 500;
                }
            }
            ol{
                width: 100%;
                border-radius: 10px;
                margin-top: 2rem;
                padding: 0px 2rem;
                overflow: hidden;
                background-color: #fff;
                li{
                    width: 100%;
                    padding: 1.5rem 0;
                    &:not(:last-child){
                        border-bottom: 1px solid #e5e5e5;
                    }
                    h3{
                        font-size: 1.6rem;
                        font-weight: 500;
                    }
                }
            }
        }
    }
    ${(props) => props.set && css`
        > div{
            h3{
                img{
                    display: block;
                }
            }
        }
        .content{
            .list{
                display: none;
            }
            .setting{
                display: block;
            }
        }
    `}
    @media (max-width:600px) {
        right: -50px;
        &::after{
            right:55px;
        }
    }
`

export const Profile = styled(Popup)`
    width: 36rem;
    right: 0;
    > div{
        border-radius: 10px;
        background-color: #fff;
        padding: 2rem;
        >.flexBox{
            align-items: start;
            flex-direction: column;
            gap: 15px;
        }
        .userBox{
            display: flex;
            align-items: center;
            gap: 1rem;
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
                    font-size: 2rem;
                    margin-bottom: 0.4rem;
                }
                span{
                    color: #aaa;
                }
            }
        }
        .buttons{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
            button{
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: #f3f3f3;
                padding: 1.2rem 1.5rem;
                border-radius: 5px;
                cursor: pointer;
                span{
                    font-size: 1.3rem;
                }
            }
        }
    }
    @media (max-width:600px) {
        width: 40rem;
        right: -10px;
        &::after{
            right: 15px;
        }
        > div{
            >.flexBox{
                flex-direction: column;
                gap: 15px;
                .userBox{
                    .name{
                        p{
                            font-size: 2rem;
                        }
                    }
                }
                .buttons{
                    width: 100%;
                    button{
                        span{
                            font-size: 1.6rem;
                        }
                    }
                }
            }
        }
    }
`

export const Side = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 70px;
    height: 100vh;
    background-color: #43454c;
    transition: width 0.1s;
    z-index: 12;
    ul{
        > li{
            display: flex;
            align-items: center;
            width: 100%;
            height: 70px;
            &:first-child{
                background-color: #38c9d2;
                a{
                    padding-left: 26px;
                    .logoHide{
                        width: 18px;
                        overflow: hidden;
                    }
                }
            }
            &:not(:first-child){
                padding: 0px 10px;
                a{
                    padding: 10px;
                    span{
                        display: none;
                        color: #fff;
                        white-space: nowrap;
                    }
                }
                &:hover{
                    a{
                        background-color: #000;
                        border-radius: 10px;
                    }
                }
            }
            a{
                display: flex;
                align-items: center;
                justify-content: start;
                width: 100%;
                gap: 10px;
            }
        }
    }
    &:hover{
        width: 170px;
        ul{
            > li{
                &:first-child{
                    a{
                        .logoHide{
                            width: auto;
                        }
                    }
                }
                a{
                    span{
                        display: block;
                    }
                }
            }
        }
    }
    ${(props) => props.on && css`
        width: 250px;
    `
    }
    @media (max-width:1024px) {
        display:none;
    }
`