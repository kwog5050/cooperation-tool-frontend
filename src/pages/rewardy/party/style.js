import styled, { css } from "styled-components";

export const Container = styled.div`
    .top{
        .flex{
            display: flex;
            align-items: center;
            justify-content: space-between;
            h3{
                font-size: 2rem;
                font-weight: bold;
                span{
                    font-size: 2rem;
                    color: #38c9d2;
                }
            }
        }
        .tap{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 2rem;
            .userParty{
                display: flex;
                align-items: center;
                gap: 0.5rem;
                background-color: #fff;
                padding: 0.7rem 1rem;
                border-radius: 50px;
                border: 1px solid #ddd;
                span{
                    font-size: 1.5rem;
                    color: #aaa;
                }
            }
            .userParty.on{
                border: 1px solid #38c9d2;
                span{
                    color: #38c9d2;
                }
            }
            > div{
                display: flex;
                align-items: center;
                gap: 1rem;
                .buttons{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    button{
                        padding: 1rem 1.5rem;
                        color: #fff;
                        font-size: 1.5rem;
                        border-radius: 50px;
                        &:nth-child(1){
                            background-color: #38c9d2;
                        }
                        &:nth-child(2){
                            background-color: #63d2b4;
                        }
                        &:nth-child(3){
                            background-color: #ffa133;
                        }
                        &:nth-child(4){
                            background-color: #fc6464;
                        }
                        &:nth-child(5){
                            background-color: #aaa;
                        }
                    }
                }
                .sort{
                    background-color: #fff;
                    border-radius: 5px;
                    button{
                        &:nth-child(1){
                            border-top-left-radius: 5px;
                            border-bottom-left-radius: 5px;
                        }
                        &:nth-child(2){
                            border-top-right-radius: 5px;
                            border-bottom-right-radius: 5px;
                        }
                    }
                    .on{
                        border: 1px solid #000;
                    }
                }
            }
        }
    }
    .list{
        margin-top: 2rem;
        ul{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-gap: 1rem;
            li{
                background-color: #fff;
                border-radius: 10px;
                overflow: hidden;
                a{
                    width: 100%;
                    .day{
                        padding: 2.5rem 2.5rem 0 2.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 2rem;
                        span{
                            color: #aaa;
                            font-size: 1.3rem;
                        }
                    }
                    h3{
                        padding: 0 2.5rem;
                        font-size: 1.8rem;
                        margin-bottom: 2rem;
                    }
                    .userList{
                        display: flex;
                        align-items: center;
                        padding: 0 2.5rem;
                        margin-bottom: 2rem;
                        .profile{
                            width: 3.4rem;
                            height: 3.4rem;
                            border: 1px solid #ddd;
                            border-radius: 50%;
                            overflow: hidden;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-left: -0.8rem;
                            img{
                                width: 100%;
                            }
                        }
                        >span{
                            width: 3.4rem;
                            height: 3.4rem;
                            border: 1px solid #ddd;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-left: -0.8rem;
                            background-color: #fff;
                            font-size: 1.3rem;
                        }
                    }
                    .info{
                        padding: 1.5rem 2.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        background-color: #f9f9f9;
                        .some{
                            display: flex;
                            align-items: center;
                            gap: 1rem;
                            div{
                                display: flex;
                                align-items: center;
                                gap: 0.5rem;
                                img{
                                    width: 2rem;
                                }
                                strong{
                                    font-weight: 400;
                                    font-size: 1.3rem;
                                }
                                span{
                                    color: #aaa;
                                    font-size: 1.3rem;
                                }
                            }
                            > span{
                                color: #ddd;
                            }
                        }
                        .situation{
                            background-color: #63d2b4;
                            color: #fff;
                            padding: 0.7rem 1rem;
                            border-radius: 50px;
                        }
                    }
                }
            }
        }
    }
    ${(props) => props.width < 1200 && css`
        @media {
            .list{
                ul{
                    grid-template-columns: 1fr 1fr 1fr;
                }
            }
        }
    `}
    ${(props) => props.width < 850 && css`
        @media {
            .top{
                .flex{
                    flex-direction: column;
                    align-items: start;
                    gap: 2rem;
                    .searchBox{
                        width: 100%;
                        input{
                            width: 100%;
                        }
                    }
                }
                .tap{
                    gap: 0.5rem;
                    margin: 0.5rem 0 5.9rem;
                    position: relative;
                    .userParty{
                        flex: 1;
                        padding: 0 1rem;
                        border-radius: 5px;
                        span{
                            line-height: 4.4rem;
                        }
                    }
                    > div{
                        flex: 1;
                        .buttons{
                            position: absolute;
                            top: calc(100% + 0.5rem);
                            left: 0;
                            width: 100%;
                            gap: 0.5rem;
                            button{
                                padding: 0;
                                line-height: 3.4rem;
                                flex: 1;
                                border-radius: 5px;
                            }
                        }
                        .select{
                            width: 100%;
                            border: 1px solid #ddd;
                        }
                        .sort{
                            display: none;
                        }
                    }
                }
            }
            .list{
                ul{
                    grid-template-columns: 1fr 1fr;
                }
            }
        }
    `}
    ${(props) => props.width < 650 && css`
        @media {
            .list{
                ul{
                    grid-template-columns: 1fr;
                }
            }
        }
    `}
`