import styled from "styled-components";

export const Membership = styled.div`
    background-color: #eff9fc;
    padding: 15rem 0;
    h3{
        font-size: 4rem;
        text-align: center;
        b{
            font-size: 4rem;
        }
    }
    h4{
        text-align: center;
        font-size: 1.8rem;
        font-weight: 300;
        margin: 3rem 0px 2rem;
    }
    .wrap > p{
        text-align: center;
        font-size: 1.6rem;
        font-weight: 300;
        color: #858585;
    }

    .price{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;
        margin-top: 5rem;
        .left{
            border: 1px solid #eee;
            border-radius: 10px;
            background-color: #fff;
            padding: 3.5rem 4rem;
            flex: 1;
            position: relative;
            h5{
                font-size: 2.2rem;
                font-weight: bold;
                display: flex;
                align-items: end;
                gap: 1rem;
                span{
                    font-size: 1.2rem;
                    font-weight: 300;
                    color: #858585;
                }
            }
            h6{
                font-size: 2rem;
                font-weight: bold;
                text-align: center;
                margin: 2rem 0px 3rem;
            }
            .numBox{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                margin-bottom: 3rem;
                button{
                    font-size: 2.4rem;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 4rem;
                    height: 4rem;
                    border-radius: 50%;
                    background-color: #f9f9f9;
                }
                div{
                    padding: 2rem 4rem;
                    border-radius: 10px;
                    border: 1px solid #858585;
                }
            }
            .box{
                background-color: #f7f8f9;
                padding: 3rem;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                div{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    b{
                        display: flex;
                        align-items: end;
                        font-size: 2rem;
                        gap: 0.5rem;
                        span{
                            font-weight: 300;
                        }
                    }
                    strong{
                        color: #3bd4dd;
                        font-size: 2rem;
                    }
                }
                > span{
                    font-size: 2rem;
                    font-weight: bold;
                    width: 3rem;
                    height: 3rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #000;
                    color: #fff;
                    border-radius: 50%;
                }
            }
            .event{
                text-align: center;
                padding: 2rem 0;
                margin-top: 2rem;
                border-radius: 10px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                p{
                    color: #fff;
                    font-size: 1.7rem;
                    font-weight: bold;
                }
                span{
                    display: block;
                    margin-top: 1rem;
                    color: #fff32d;
                }
            }
            > img{
                position: absolute;
                bottom: 0;
                right: 100%;
            }
        }
        .arrow{
            width: 3rem;
            height: 3rem;
            background-color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }
        .right{
            border: 1px solid #3bd4dd;
            border-radius: 10px;
            background-color: #fff;
            position: relative;
            > img{
                position: absolute;
                bottom: 95%;
                right: 0;
            }
            .title{
                padding: 3rem 3rem 2rem 3rem;
                h5{
                    font-size: 2.2rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                }
                h6{
                    font-size: 1.5rem;
                    line-height: 1.6;
                    b{
                        font-size: 1.5rem;
                        font-weight: 400;
                        line-height: 1.6;
                        color: #3bd4dd;
                    }
                }
            }
            .totalPrice{
                background-color: #f7f8f9;
                padding: 3rem;
                .top{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 2rem;
                    p{
                        font-size: 1.6rem;
                    }
                    b{
                        font-size: 1.6rem;
                        font-weight: 500;
                    }
                }
                .center{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    padding-left: 1rem;
                    border-left: 1px solid #aaa;
                    margin-bottom: 3rem;
                    div{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        p{
                            font-size: 1.5rem;
                            font-weight: 300;
                            color: #aaa;
                        }
                        b{
                            font-size: 1.5rem;
                            font-weight: 400;
                            color: #f00307;
                        }
                    }
                }
                .bottom{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    p{
                        display: flex;
                        align-items: end;
                        gap: 0.5rem;
                        font-weight: bold;
                        font-size: 1.8rem;
                        span{
                            font-weight: 300;
                            color: #aaa;
                            font-size: 1.2rem;
                        }
                    }
                    b{
                        color: #f00307;
                        font-size: 1.8rem;
                    }
                }
            }
            > p{
                color: #aaa;
                padding: 2rem 3rem;
            }
            > button{
                width: 100%;
                background-color: #3bd4dd;
                color: #fff;
                line-height: 7.1rem;
                font-size: 1.8rem;
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
            }
        }
    }
    @media (max-width:1200px) {
        padding: 5rem 0;
        .price{
            flex-direction: column;
            gap: 2.5rem;
            .left{
                width: 100%;
                > img{
                    display: none;
                }
                .box{
                    flex-direction: column;
                    gap: 30px;
                }
                .event{
                    display: none;
                }
            }
            .arrow{
                transform: rotate(90deg);
            }
            .right{
                width: 100%;
                > img{
                    display: none;
                }
                > p {
                    text-align: center;
                }
            }
        }
    }
    @media (max-width:700px) {
        h3{
            font-size: 2.4rem;
            b{
                font-size: 2.4rem;
            }
        }
        h4{
            font-size: 1.6rem;
            margin: 2rem 0 1.5rem;
            line-height: 1.2;
        }
    }
    @media (max-width:480px) {
        .price{
            .left{
                .box{
                    gap: 2rem;
                    > div{
                        display: flex;
                        flex-direction: column;
                    }
                }
            }
            .right{
                > p{
                    font-size: 1.5rem;
                }
            }   
        }
    }
`

export const RewardyFunction = styled.div`
    margin: 15rem 0rem;
    h3{
        font-size: 3.4rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 3rem;
    }
    ul{
        display: flex;
        align-items: start;
        justify-content: space-between;
        border-top: 1px solid #eee;
        padding-top: 3rem;
        gap: 2rem;
        > li{
            width: 100%;
            span{
                font-size: 2rem;
                font-weight: bold;
            }
            > ol{
                background-color: #f6f7f9;
                border-radius: 10px;
                padding: 1.5rem 2rem;
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 28rem;
                margin-top: 2rem;
                li{
                    line-height: 1.8;
                    font-size: 1.5rem;
                    font-weight: 300;
                    color: #656565;
                }
            }
        }
    }
    .enterprise{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem 5rem;
        background-color: #38c9d2;
        gap: 3rem;
        border-radius: 10px;
        margin-top: 5rem;
        .content{
            flex: 1;
            h4{
                font-size: 2.4rem;
                font-weight: bold;
                color: #fff;
            }
            p{
                color: #fff;
                font-size: 1.6rem;
                font-weight: 300;
                margin-top: 1rem;
            }
        }
        a{
            font-size: 1.6rem;
            background-color: #fff;
            padding: 1.7rem 4rem;
            border-radius: 50px;
        }
    }
    @media (max-width:1024px) {
        margin: 5rem 0;
        ul{
            flex-direction: column;
            > li{
                > ol{
                    height: unset;
                }
            }
        }
    }
    @media (max-width:700px) {
        .enterprise{
            flex-direction: column;
            .content{
                text-align: center;
            }
        }
    }
`

export const Faq = styled.div`
    margin: 15rem 0;
    h3{
        font-size: 3.6rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 5rem;
    }
    .more{
        text-align: center;
        margin-top: 5rem;
        a{
            padding: 2rem 7rem;
            background-color: #000;
            color: #fff;
            border-radius: 50px;
            font-size: 1.8rem;
        }
    }
    @media (max-width:1024px) {
        margin: 7rem 0;
    }
`