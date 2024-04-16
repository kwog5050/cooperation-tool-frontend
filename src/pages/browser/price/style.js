import styled from "styled-components";

export const Membership = styled.div`
    background-color: #eff9fc;
    padding: 150px 0px;
    h3{
        font-size: 40px;
        text-align: center;
        b{
            font-size: 40px;
        }
    }
    h4{
        text-align: center;
        font-size: 18px;
        font-weight: 300;
        margin: 30px 0px 20px;
    }
    .wrap > p{
        text-align: center;
        font-size: 16px;
        font-weight: 300;
        color: #858585;
    }

    .price{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin-top: 50px;
        .left{
            border: 1px solid #eee;
            border-radius: 10px;
            background-color: #fff;
            padding: 35px 40px;
            flex: 1;
            position: relative;
            h5{
                font-size: 22px;
                font-weight: bold;
                display: flex;
                align-items: end;
                gap: 10px;
                span{
                    font-size: 12px;
                    font-weight: 300;
                    color: #858585;
                }
            }
            h6{
                font-size: 20px;
                font-weight: bold;
                text-align: center;
                margin: 20px 0px 30px;
            }
            .numBox{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 20px;
                margin-bottom: 30px;
                button{
                    font-size: 24px;
                    font-weight: 500;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #f9f9f9;
                }
                div{
                    padding: 20px 40px;
                    border-radius: 10px;
                    border: 1px solid #858585;
                }
            }
            .box{
                background-color: #f7f8f9;
                padding: 30px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                div{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    b{
                        display: flex;
                        align-items: end;
                        font-size: 20px;
                        gap: 5px;
                        span{
                            font-weight: 300;
                        }
                    }
                    strong{
                        color: #3bd4dd;
                        font-size: 20px;
                    }
                }
                > span{
                    font-size: 20px;
                    font-weight: bold;
                    width: 30px;
                    height: 30px;
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
                padding: 20px 0px;
                margin-top: 20px;
                border-radius: 10px;
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                p{
                    color: #fff;
                    font-size: 17px;
                    font-weight: bold;
                }
                span{
                    display: block;
                    margin-top: 10px;
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
            width: 30px;
            height: 30px;
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
                padding: 30px 30px 20px 30px;
                h5{
                    font-size: 22px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                h6{
                    font-size: 15px;
                    line-height: 1.6;
                    b{
                        font-size: 15px;
                        font-weight: 400;
                        line-height: 1.6;
                        color: #3bd4dd;
                    }
                }
            }
            .totalPrice{
                background-color: #f7f8f9;
                padding: 30px;
                .top{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 20px;
                    p{
                        font-size: 16px;
                    }
                    b{
                        font-size: 16px;
                        font-weight: 500;
                    }
                }
                .center{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding-left: 10px;
                    border-left: 1px solid #aaa;
                    margin-bottom: 30px;
                    div{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        p{
                            font-size: 15px;
                            font-weight: 300;
                            color: #aaa;
                        }
                        b{
                            font-size: 15px;
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
                        gap: 5px;
                        font-weight: bold;
                        font-size: 18px;
                        span{
                            font-weight: 300;
                            color: #aaa;
                            font-size: 12px;
                        }
                    }
                    b{
                        color: #f00307;
                        font-size: 18px;
                    }
                }
            }
            > p{
                color: #aaa;
                padding: 20px 30px;
            }
            > button{
                width: 100%;
                background-color: #3bd4dd;
                color: #fff;
                line-height: 71px;
                font-size: 18px;
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
            }
        }
    }
`

export const RewardyFunction = styled.div`
    margin: 150px 0px;
    h3{
        font-size: 34px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 30px;
    }
    ul{
        display: flex;
        align-items: start;
        justify-content: space-between;
        border-top: 1px solid #eee;
        padding-top: 30px;
        gap: 20px;
        > li{
            width: 100%;
            span{
                font-size: 20px;
                font-weight: bold;
            }
            > ol{
                background-color: #f6f7f9;
                border-radius: 10px;
                padding: 15px 20px;
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 280px;
                margin-top: 20px;
                li{
                    line-height: 1.8;
                    font-size: 15px;
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
        padding: 20px 50px;
        background-color: #38c9d2;
        gap: 30px;
        border-radius: 10px;
        margin-top: 50px;
        .content{
            flex: 1;
            h4{
                font-size: 24px;
                font-weight: bold;
                color: #fff;
            }
            p{
                color: #fff;
                font-size: 16px;
                font-weight: 300;
                margin-top: 10px;
            }
        }
        a{
            font-size: 16px;
            background-color: #fff;
            padding: 17px 40px;
            border-radius: 50px;
        }
    }
`

export const Faq = styled.div`
    margin: 150px 0px;
    h3{
        font-size: 36px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 50px;
    }
    .more{
        text-align: center;
        margin-top: 50px;
        a{
            padding: 20px 70px;
            background-color: #000;
            color: #fff;
            border-radius: 50px;
            font-size: 18px;
        }
    }
`