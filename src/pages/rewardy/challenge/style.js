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
            .right{
                display: flex;
                align-items: center;
                gap: 1rem;
                .selectBox{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
            }
        }
        .checkBox{
            margin-top: 2rem;
            ul{
                display: flex;
                align-items: center;
                gap: 1rem;
                li{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    cursor: pointer;
                    span{
                        font-size: 1.6rem;
                        color: #454545;
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
            grid-gap: 1.5rem;
            li{
                background-color: #fff;
                border-radius: 10px;
                overflow: hidden;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .subTitle{
                    padding: 2.5rem 2.5rem 0 2.5rem;
                    margin-bottom: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    h5{
                        color: #fff;
                        background-color: #38c9d2;
                        padding: 0.7rem 1rem;
                        border-radius: 50px;
                        font-size: 1.2rem;
                    }
                    strong{
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                        font-size: 1.5rem;
                        img{
                            width: 17px;
                        }
                    }
                }
                h3{
                    padding: 0 2.5rem;
                    margin-bottom: 4rem;
                    font-size: 1.8rem;
                    line-height: 1.2;
                    min-height: 4.4rem;
                    flex: 1;
                    display: -webkit-box;
                    word-wrap: break-word;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
                .info{
                    padding: 1.5rem 2.5rem;
                    background-color: #38c9d2;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    > div{
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                    }
                }
            }
            li.end{
                .subTitle{
                    h5{
                        background-color: #cecece;
                    }
                    strong{
                        color: #cecece;
                    }
                }
                h3{
                    color: #cecece;
                }
                .info{
                    background-color: #cecece;
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
    ${(props) => props.width < 800 && css`
        @media {
            .list{
                ul{
                    grid-template-columns: 1fr 1fr;
                }
            }
        }
    `}
    ${(props) => props.width < 650 && css`
        @media {
            .top{
                .flex{
                    flex-direction: column;
                    align-items: start;
                    gap: 1rem;
                    .right{
                        width: 100%;
                        flex-direction: column;
                        align-items: start;
                        .selectBox{
                            width: 100%;
                            .select{
                                width: 100%;
                            }
                        }
                        .searchBox{
                            width: 100%;
                            input{
                                width: 100%;
                            }
                        }
                    }
                }
                .checkBox{
                    margin-top: 1rem;
                    ul{
                        display: inline-block;
                        li{
                            display: inline-flex;
                            padding: 0.5rem 1rem 0.5rem 0;
                            span{
                            }
                        }
                    }
                }
            }
            .list{
                ul{
                    grid-template-columns: 1fr ;
                }
            }
        }
    `}
`