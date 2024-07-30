import styled, { css } from "styled-components";

export const Container = styled.div`
    .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background-color: #f9f9f9;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 1px 1px 2px #00000011;
        .tap{
            display: flex;
            align-items: center;
            border-radius: 10px;
            border: 1px solid #ddd;
            overflow: hidden;
            button{
                padding: 1.2rem 0;
                width: 9rem;
                text-align: center;
                background-color: #fff;
                &:not(:last-child){
                    border-right: 1px solid #ddd;
                }
                b{
                    display: flex;
                    align-items: end;
                    justify-content: center;
                    margin-bottom: 1rem;
                    font-size: 1.6rem;
                    span{
                        font-weight: 400;
                        font-size: 1.4rem;
                    }
                }
                h5{
                    font-size: 1.2rem;
                    color: #656565;
                }
            }
            .on{
                background-color: #222;
                b{
                    color: #fff;
                }
                h5{
                    color: #fff;
                }
            }
        }
        .right{
            display: flex;
            align-items: center;
            gap: 2rem;
            .switchList{
                ul{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    li{
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        > span{
                            color: #656565;
                        }
                    }
                }
            }
            .searchBox{
                position: relative;
                input{
                    border: 1px solid #ddd;
                    padding: 1.5rem;
                    width: 25rem;
                    border-radius: 5px;
                }
                button{
                    position: absolute;
                    top: 50%;
                    right: 1.5rem;
                    transform: translateY(-50%);
                }
            }
        }
    }
    .list{
        padding: 2rem 0;
        ul{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-gap: 2rem;
            li{
                width: 100%;
                background-color: #fff;
                overflow: hidden;
                border-radius: 10px;
                box-shadow: 1px 1px 2px #00000011;
                .profile{
                    padding: 3rem 1.5rem 1.5rem;
                    .flex{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        .info{
                            .name{
                                font-size: 1.8rem;
                                font-weight: 500;
                            }
                            .team{
                                font-size: 1.2rem;
                                color: #aaa;
                                line-height: 1.5;
                            }
                            .time{
                                margin-top: 1rem;
                                font-size: 1.2rem;
                                color: #aaa;
                            }
                        }
                        .imageBox{
                            width: 6rem;
                            height: 6rem;
                            border: 1px solid #ccc;
                            border-radius: 50%;
                            overflow: hidden;
                            img{
                                max-width: 100%;
                                max-height: 100%;
                            }
                        }
                    }
                    .text{
                        background-color: #f9f9f9;
                        padding: 1rem 1.5rem;
                        border-radius: 10px;
                        min-height: 5.6rem;
                        margin-top: 1.5rem;
                    }
                }
                .stat{
                    background-color: #f9f9f9;
                    padding: 1.3rem 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 2rem;
                    .score{
                        text-align: center;
                        cursor: pointer;
                        span{
                            background-color: #fff;
                            border-radius: 50%;
                            width: 3.5rem;
                            height: 3.5rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            color: #38c9d2;
                            margin-bottom: 0.5rem;
                            font-weight: 500;
                        }
                        strong{
                            font-size: 1.1rem;
                            font-weight: 300;
                            color: #aaa;
                        }
                    }
                }
            }
        }
    }
    ${(props) => props.width < 1440 && css`
        @media {
            .list{
                ul{
                    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
                }
            }
        }
    `}
    ${(props) => props.width < 1200 && css`
        @media {
            .top{
                flex-direction: column;
                gap: 1.5rem;
                .tap{
                    width: 100%;
                    button{
                        width: 100%;
                    }
                }
                .right{
                    width: 100%;
                    .searchBox{
                        flex: 1;
                        width: 100%;
                        input{
                            width: 100%;
                        }
                    }
                }
            }
            .list{
                ul{
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                }
            }
        }
    `}
    ${(props) => props.width < 850 && css`
        @media {
            .list{
                ul{
                    grid-template-columns: 1fr 1fr 1fr;
                }
            }
        }
    `}
    ${(props) => props.width < 600 && css`
        @media {
            .top{
                .tap{
                    button{
                        b{
                            font-size: 1.8rem;
                            span{
                                font-size: 1.5rem;
                            }
                        }
                        h5{
                            font-size: 1.5rem;
                        }
                    }
                }
                .right{
                    flex-direction: column;
                    .switchList{
                        width: 100%;
                        ul{
                            width: 100%;
                            li{
                                flex: 1;
                                justify-content: center;
                                > span{
                                    font-size: 1.6rem;
                                }
                            }
                        }
                    }
                    .searchBox{
                        input{
                            font-size: 1.6rem;
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
    ${(props) => props.width < 380 && css`
        @media {
            .list{
                ul{
                    grid-template-columns: 1fr;
                }
            }
        }
    `}
`