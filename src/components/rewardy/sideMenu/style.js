import styled, { css } from "styled-components";

export const Container = styled.aside`
    position: fixed;
    height: 100vh;
    top: 0;
    z-index: 11;
    box-shadow: 1px 1px 7px #00000022;
    transition: left .5s;
    .switch{
        position: absolute;
        top: 50%;
        right: -2.5rem;
        transform: translateY(-50%);
        background-color: #fff;
        width: 6rem;
        height: 6rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 2.5rem;
        z-index: -1;
        box-shadow: 1px 1px 7px #00000022;
        cursor: pointer;
        img{
            transition: transform .5s;
        }
    }
    .mobileOnSwitch{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: -1;
        background-color: #fff;
        padding: 1.5rem;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        display: none;
        button{
            width: 100%;
            padding: 1.5rem;
            text-align: center;
            background-color: #38c9d2;
            border-radius: 5px;
            color: #fff;
            font-size: 1.8rem;
            font-weight: 400;
        }
    }
    .mobileOffSwitch{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 2;
        text-align: center;
        padding: 1rem 0;
        img{
            width: 25px;
        }
    }
    > div:not(.switch, .mobileOnSwitch,.mobileOffSwitch){
        height: 100%;
        background-color: #fff;
        z-index: 1;
        padding: 5rem;
        h3{
            font-size: 2.3rem;
            color: #252525;
            letter-spacing: -1px;
            font-weight: bold;
        }
    }
    @media (max-width:1024px) {
        width: 100%;
        top: unset;
        bottom: -100%;
        left: 0 !important;
        height: auto;
        border-radius:15px;
        overflow: hidden;
        transition: bottom .5s;
        > div:not(.switch, .mobileOnSwitch,.mobileOffSwitch){
            width: 100%;
            padding: 5rem 2rem 2rem;
        }
        .mobileOnSwitch{
            display: block;
        }
    }
    ${(props) => props.on && css`
        left: 70px !important;
        .switch{
            img{
                transform: rotate(180deg);
            }
        }    
        @media (max-width:1024px) {
            bottom: 0;
        }
    `}
`

export const Todaywork = styled.div`
    position: relative;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
    nav.menu{
        margin-top: 3rem;
        ul{
            display: flex;
            background-color: #f6f7f9;
            padding: 0.5rem;
            border-radius: 1rem;
            li{
                flex: 1;
                width: 10rem;
                text-align: center;
                color: #aaa;
                padding: 1.5rem 0;
                position: relative;
                cursor: pointer;
                font-size: 1.5rem;
                font-weight: 500;
            }
            .afterNone{
                &::after{
                    display: none;
                }
            }
            li.on{
                color: #000;
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 1px 1px 2px #00000022;
            }
        }
    }
    form {
        > .box{
            background-color: #f6f7f9;
            padding: 2rem;
            border-radius: 10px;
            margin-top: 2rem;
            max-width: 41rem;
            > input{
                width: 100%;
                background-color: #fff;
                border-radius: 10px;
                border: 1px solid #eee;
                padding: 1.7rem 1.5rem;
                font-size: 1.5rem;
            }
        }
        .hide{
            display: none !important;
        }
        label{
            position: relative;
            width: 100%;
            background-color: #fff;
            border-radius: 10px;
            border: 1px solid #eee;
            padding: 1.5rem;
            display: flex;
            align-items: center;
            gap: 1.5rem;
            span{
                font-size: 1.6rem;
                font-weight: 300;
                color: #252525;
            }
            input{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
                cursor: pointer;
            }
        }
        textarea{
            width: 100%;
            min-height: 15rem;
            resize: vertical;
            background-color: #fff;
            border: 1px solid #eee;
            border-radius: 10px;
            margin-top: 1rem;
            padding: 1.5rem;
            font-size: 1.6rem;
        }
        .slideButton{
            margin-top: 1rem;
            ul{
                display: flex;
                align-items: center;
                gap: 3px;
                overflow: hidden;
                max-width: 37rem;
                li{
                    padding: 1rem 0;
                    flex: 1;
                    text-align: center;
                    background-color: #fff;
                    border-radius: 5px;
                    border: 1px solid #eee;
                    cursor: pointer;
                }
                li.on{
                    background-color: #43454c;
                    color: #fff;
                }
            }
        }
        .timeBox{
            display: none;
            align-items: center;
            justify-content: center;
            background-color: #edeef0;
            gap: 0.7rem;
            border-radius: 10px;
            padding: 1.5rem;
            margin-top: 1rem;
            > div{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.7rem;
                flex: 1;
                > div{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: #fff;
                    padding: 0px 1rem;
                    border-radius: 5px;
                    flex: 1;
                    cursor: pointer;
                    position: relative;
                    span{
                        line-height: 4.4rem;
                    }
                    img{
                        width: 10px;
                    }
                    > ul{
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        max-height: 13.2rem;
                        overflow-y: scroll;
                        display: none;
                        flex-direction: column;
                        background-color: #fff;
                        border-radius: 5px;
                        li{
                            line-height: 4.4rem;
                            padding: 0px 1rem;
                            width: 100%;
                            &:hover{
                                background-color: #43454c;
                                color: #fff;
                            }
                        }
                    }
                    > ul.on{
                        display: flex;
                    }
                }
            }
        }
        .on.timeBox{
            display: flex;
        }
        .buttons{
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: 1rem;
            button{
                width: 100%;
                flex: 1;
                background-color: #fff;
                border: 1px solid #eee;
                border-radius: 10px;
                padding: 1.5rem 0;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                input{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 0;
                    opacity: 0;
                }
                span{
                    font-size: 1.6rem;
                    color: #38c9d2;
                }
            }
        }
        .submit{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-top: 2rem;
            .lock{
                width: 5.5rem;
                height: 5.5rem;
                background-color: #f6f7f9;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 10px;
                cursor: pointer;
            }
            button{
                flex: 1;
                color: #fff;
                background-color: #38c9d2;
                line-height: 5.5rem;
                border-radius: 10px;
                font-size: 1.6rem;
                font-weight: 500;
                cursor: pointer;
            }
        }
    }
    @media (max-width:1024px) {
        overflow-y: unset;
        border-radius:15px;
        form{
            display: flex;
            flex-direction: column;
            > .box{
                overflow-y: scroll;
                height: 30rem;
                max-width: 100%;
                &::-webkit-scrollbar{
                    display: none;
                }
                label{
                    border-radius: 5px;
                    >img{
                        width: 18px;
                    }
                }
                textarea{
                    border-radius: 5px;
                }
            }
            .slideButton{
                ul{
                    max-width:100%;
                }
            }
            .buttons{
                button{
                    border-radius: 5px;
                }
            }
            .submit{
                flex: 1;
                /* position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 7rem;
                z-index: 1;
                background-color: #fff;
                padding: 1rem 2rem;
                margin-top: 0;
                .lock,
                button{
                    height: 100%;
                    line-height: unset;
                } */
            }
        }
    }
`

export const Live = styled.div`
    width: 54rem;
    .timer{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #252525;
        padding: 2rem 3rem;
        border-radius: 10px;
        margin-top: 3rem;
        h5{
            color: #ccc;
            font-size: 1.6rem;
        }
        span{
            font-family: "register";
            color: #fff;
            font-size: 2.6rem;
            display: flex;
            align-items: center;
            gap: 0.4rem;
            b{
                font-family: "Noto Sans KR";
                font-size: 2rem;
            }
        }
    }
    .workInfo{
        margin: 2rem 0;
        background-color: #f5f6f7;
        padding: 2rem 0;
        border-radius: 10px;
        ul{
            display: flex;
            align-items: center;
            li{
                flex: 1;
                text-align: center;
                display: flex;
                flex-direction: column;
                gap: 1rem;
                h5{
                    font-size: 1.5rem;
                    color: #656565;
                }
                b{
                    font-size: 2rem;
                }
            }
        }
    }
    .progressWork{
        height: 100%;
        h4{
            font-size: 1.8rem;
            font-weight: bold;
            margin-bottom: 2rem;
            span{
                font-size: 1.8rem;
                font-weight: bold;
                color: #38c9d2;
            }
        }
        ul{
            height: calc(100% - 23.2rem);
            display: flex;
            flex-direction: column;
            gap: 1rem;
            overflow-y: scroll;
            &::-webkit-scrollbar{
                display: none;
            }
            li{
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1.5rem;
                padding: 2.5rem 2rem;
                background-color: #f5f6f7;
                border-radius: 10px;
                .name{
                    color: #38c9d2;
                    font-size: 1.5rem;
                }
                p{
                    flex: 1;
                    font-size: 1.5rem;
                    color: #656565;
                }
                span{
                    font-size: 1.5rem;
                    color: #aaa;
                }
            }
        }
    }
    @media (max-width:1024px) {
        .progressWork{
            ul{
                height: 20rem;
            }
        }
    }
`

export const Coin = styled.div`
    width: 51rem;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        display: none;
    }
    .box{
        background-color: #f7f8f9;
        border-radius: 10px;
        padding: 3rem 2rem;
        margin-top: 2rem;
        h5{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.6rem;
            font-weight: 500;
        }
        b{
            display: flex;
            align-items: center;
            justify-content: end;
            gap: 1rem;
            font-size: 3rem;
            margin: 2rem 0;
            img{
                width: 29px;
            }
        }
        button{
            width: 100%;
            background-color: #fff;
            border: 1px solid #eee;
            padding: 1.8rem 0;
            border-radius: 10px;
            font-size: 1.6rem;
        }
    }
    .announcement{
        margin-top: 3rem;
        h4{
            font-size: 1.8rem;
            font-weight: 500;
            margin-bottom: 2rem;
        }
        .content{
            padding: 1.5rem;
            background-color: #f7f8f9;
            border-radius: 10px;
            height: 17rem;
            overflow-y: scroll;
            p{
                color: #aaa;
                line-height: 1.5;
                b{
                    color: #000;
                    font-size: 1.6rem;
                }
            }
        }
    }
    @media (max-width:1024px) {
        height: 50rem !important;
    }
`

export const Challenge = styled.div`
    width: 51rem;
    position: relative;
    padding: 5rem 5rem 9.5rem 5rem !important;
    h4{
        font-size: 2rem;
        color: #252525;
        letter-spacing: -1px;
        font-weight: bold;
    }
    .box{
        margin: 3rem 0;
        ul{
            background-color: #f6f7f9;
            border-radius: 10px;
            display: flex;
            align-items: center;
            padding: 3rem 0;
            li{
                flex: 1;
                text-align: center;
                &:not(:last-child){
                    border-right: 1px solid #ddd;
                }
                h5{
                    margin-bottom: 2rem;
                    font-size: 1.6rem;
                    color: #999;
                }
                b{
                    font-size: 2.4rem;
                }
            }
        }
    }
    >a{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        padding: 2rem;
        > div{
            text-align: center;
            flex: 1;
            color: #fff;
            background-color: #38c9d2;
            line-height: 5.5rem;
            border-radius: 10px;
            font-size: 1.6rem;
            font-weight: 500;
        }
    }
    @media (max-width:1024px) {
        .box{
            ul{
                padding: 2rem;
                li{
                    h5{
                        margin-bottom: 1.5rem;
                    }
                }
            }
        }
    }
`

export const Party = styled.div`
    width: 51rem;
    padding: 5rem 5rem 9.5rem 5rem !important;
    h4{
        font-size: 2rem;
        color: #252525;
        letter-spacing: -1px;
        font-weight: bold;
        span{
            color: #38c9d2;
            font-size: 2rem;
            font-weight: bold;
        }
    }
    .box{
        margin: 3rem 0;
        ul{
            background-color: #f6f7f9;
            border-radius: 10px;
            display: flex;
            align-items: center;
            padding: 3rem 0;
            li{
                flex: 1;
                text-align: center;
                &:not(:last-child){
                    border-right: 1px solid #ddd;
                }
                h5{
                    margin-bottom: 1rem;
                    font-size: 1.6rem;
                    color: #999;
                }
                b{
                    font-size: 2rem;
                    position: relative;
                    > div{
                        position: absolute;
                        left: -18px;
                        top: 12px;
                        width: 7px;
                        height: 7px;
                        border-radius: 50%;
                        content: "";
                    }
                    .t1{
                        background-color: #63d2b4;
                    }
                    .t2{
                        background-color: #ffa133;
                    }
                    .t3{
                        background-color: #fc6464;
                    }
                }
            }
        }
    }
    > ul{
        margin-top: 2rem;
        li{
            display: flex;
            align-items:start;
            justify-content: space-between;
            gap: 1rem;
            background-color: #f6f7f9;
            padding: 2rem;
            border-radius: 10px;
            .content{
                flex: 1;
                h5{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    > div{
                        width: 7px;
                        height: 7px;
                        border-radius: 50%;
                        background-color: #63d2b4;
                    }
                    > p{
                        flex: 1;
                        font-size: 1.6rem;
                        display: -webkit-box;
                        word-wrap: break-word;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
                > p{
                    margin-top: 1rem;
                    color: #999;
                    font-size: 1.3rem;
                }
            }
            .view{
                background-color: #63d2b4;
                color: #fff;
                padding: 0.5rem 1rem;
                border-radius: 50px;
                font-size: 1.2rem;
            }
        }
    }
    >a{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        padding: 2rem;
        > div{
            text-align: center;
            flex: 1;
            color: #fff;
            background-color: #38c9d2;
            line-height: 5.5rem;
            border-radius: 10px;
            font-size: 1.6rem;
            font-weight: 500;
        }
    }
    @media (max-width:1024px) {
        .box{
            ul{
                padding: 2rem;
                li{
                    h5{
                        margin-bottom: 1.5rem;
                    }
                }
            }
        }
    }
`