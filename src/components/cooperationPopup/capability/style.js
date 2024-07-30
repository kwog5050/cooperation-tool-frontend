import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999999999999;
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        background-color: #fff;
        padding: 3rem;
        border-radius: 10px;
        position: relative;
        max-width: 87rem;
        width: 98%;
        > img{
            position: absolute;
            top: 2rem;
            right: 2rem;
            cursor: pointer;
        }
        h3{
            font-size: 2rem;
            font-weight: 500;
            border-bottom: 1px solid #eee;
            padding-bottom: 2rem;
        }
        .user{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 2rem 0;
            .profile{
                display: flex;
                align-items: center;
                gap: 1rem;
                .profileImage{
                    width: 4.2rem;
                    height: 4.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #eee;
                    border-radius: 50%;
                    overflow: hidden;
                    img{
                        width: 100%;
                    }
                }
                .info{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    h4{
                        font-size: 1.8rem;
                    }
                    span{
                        font-size: 1.6rem;
                        color: #aaa;
                    }
                }
            }
        }
        .status{
            display: flex;
            align-items: start;
            justify-content: space-between;
            gap: 7rem;
            .detail{
                flex: 1;
                ul{
                    display: flex;
                    align-items: center;
                    background-color: #f6f7f9;
                    padding: 0.5rem;
                    border-radius: 10px;
                    box-shadow: inset 0 0 5px #00000011;
                    li{
                        flex: 1;
                        line-height: 4.5rem;
                        color: #aaa;
                        text-align: center;
                        font-size: 1.6rem;
                        font-weight: 500;
                        cursor: pointer;
                    }
                    li.on{
                        background-color: #fff;
                        color: #000;
                        border-radius: 10px;
                    }
                }
                .text{
                    margin: 4rem 0 7rem;
                    h5{
                        font-size: 2rem;
                        font-weight: bold;
                        margin-bottom: 2rem;
                    }
                    p{
                        line-height: 1.5;
                        font-size: 1.6rem;
                        color: #666;
                    }
                }
                .rating{
                    background-color: #f6f7f9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem 0;
                    font-size: 1.6rem;
                    font-weight:500;
                    border-radius: 10px;
                    span{
                        font-size: 1.6rem;
                        color: #aaa;
                    }
                    b{
                        color: #38c9d2;
                        font-size: 3.5rem;
                        font-weight: 900;
                        padding: 0 2rem;
                    }
                }
            }
            .chart{
                display: flex;
                align-items: end;
                gap: 3rem;
            }
        }
        .send{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 3rem;
            margin-top: 3rem;
            button{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                border: 1px solid #38c9d2;
                padding: 2rem 3rem;
                border-radius: 50px;
                font-weight: bold;
                &:hover{
                    color: #38c9d2;
                }
                img{
                    width: 19px;
                }
            }
        }
    }
`