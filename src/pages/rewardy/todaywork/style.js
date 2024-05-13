import styled, { css } from "styled-components";

export const Container = styled.div`
    .top{
        background-color: #f6f7f9;
        padding: 1.5rem;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 2px 2px 3px #00000011;
        .selectBox{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            .select{
                display: flex;  
                align-items: center; 
                justify-content: space-between;
                background-color: #fff;
                padding: 0px 1rem;
                border-radius: 5px;
                cursor: pointer;
                position: relative;
                border: 1px solid #eee;
                &:nth-child(1){
                    width: 10rem;
                }
                &:nth-child(2){
                    width: 13.3rem;
                }
                span{
                    line-height: 4.4rem;
                    font-size: 1.6rem;
                    color: #999;
                    display: block;
                    width: 100%;
                }
                img{}
                ul{   
                    position: absolute;
                    top: -1px;
                    left: 0;
                    width: 100%;
                    display: none;
                    flex-direction: column;
                    background-color: #fff;
                    border-radius: 5px;
                    border: 1px solid #eee;
                    overflow: hidden;
                    z-index: 1;
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
                ul.on{
                    display: flex;
                }
            }
        }
        .date{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5rem;
            span{
                font-size: 2.4rem;
                font-weight: bold;
            }
        }
        .buttons{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            a{
                border: 1px solid #38c9d2;
                background-color: #fff;
                line-height: 4.4rem;
                padding: 0px 2rem;
                border-radius: 5px;
                color: #38c9d2;
                font-size: 1.6rem;
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            button{
                border: 1px solid #eee;
                border-radius: 5px;
                background-color: #fff;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 4.6rem;
                width: 4.6rem;
                img{
                    max-width: 22px;
                }
            }
        }
    }
    .list{
        margin-top: 2rem;
        ul{
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            > li{
                background-color: #fff;
                border-radius: 10px;
                box-shadow: 2px 2px 3px #00000011;
                .content{
                    display: flex;
                    justify-content: space-between;
                    align-items: start;
                    gap: 2rem;
                    padding: 1rem 1.5rem;
                    > span,
                    > button{
                        width: 4rem;
                        height: 4rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img{
                            max-width: 29px;
                        }
                    }
                    .text{
                        flex: 1;
                        min-height: 4rem;
                        display: flex;
                        align-items: center;
                        p{
                            line-height: 1.5;
                            font-size: 1.6rem;
                            font-weight: 300;
                            span{
                                line-height: 1.5;
                                font-size: 1.6rem;
                                font-weight: 300;
                                color: #38c9d2;
                                padding-right: 1rem;
                            }
                        }
                    }
                    .buttons{
                        button{
                            width: 4rem;
                            height: 4rem;
                            border-radius: 5px;
                            &:hover{
                                background-color: #eee;
                            }
                            &:nth-child(1){
                                cursor: all-scroll;
                            }
                            img{
                                max-width: 17px;  -webkit-touch-callout: none;
                                -webkit-user-select: none;
                                -khtml-user-select: none;
                                -moz-user-select: none;
                                -ms-user-select: none;
                                user-select: none;
                                -webkit-user-drag: none;
                            }
                        }
                    }
                }
                .comment{
                    background-color: #f6f7f9;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                    border-top: 1px solid #e5e5e5;
                    ol{
                        box-shadow: inset 0 2px 5px 0px #00000001;
                        padding: 1rem 2rem;
                        li{
                            display: flex;
                            align-items: start;
                            gap: 1.5rem;
                            padding: 1rem 0;
                            .name{
                                color: #38c9d2;
                                white-space: nowrap;
                                line-height: 1.5;
                            }
                            .ai{
                                font-size: 1.3rem;
                                font-weight: 400;
                                color: #fff;
                                text-align: center;
                                background: #4885ff;
                                border-radius: 50px;
                                padding: 0.3rem 1.2rem;
                            }
                            .text{
                                p{
                                    display: inline;
                                    color: #454545;
                                    font-weight: 300;
                                    line-height: 1.5;
                                    img{
                                        max-width: 19px;
                                        margin-right: 0.5rem;
                                    }
                                }
                                .date{
                                    color: #aaa;
                                    font-weight: 300;
                                    display: inline-flex;
                                    align-items: center;
                                    line-height: 1.5;
                                    margin-left: 0.5rem;
                                }
                                button{
                                    margin-left: 0.5rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    @media (max-width:1024px) {
        padding: 3rem 2rem;
    }
    ${(props) => props.width < 1024 && css`
        @media {
            .top{   
                flex-direction: column;
                gap: 1rem;
                .selectBox{
                    width: 100%;
                    gap: 1.5rem;
                    .select{
                        width: 100%;
                        flex: 1;
                    }
                }
                .date{
                    order: -1;
                }
                .buttons{
                    width: 100%;
                    a{
                        width: 100%;
                        flex: 1;
                        text-align: center;
                        justify-content: center;
                    }
                }
            }
        }
    `}
    ${(props) => props.width < 760 && css`
        @media {
            .list{
                ul{
                    >li{
                        .content{
                            position: relative;
                            flex-direction: column;
                            gap: 1rem;
                            > span,
                            > button{
                                position: absolute;
                                bottom: 1rem;
                                left: 1.5rem;
                            }
                            .buttons{
                                display: flex;
                                width: 100%;;
                                justify-content: end;
                            }
                        }
                    }
                }
            }
        }
    `}
    ${(props) => props.width < 600 && css`
        @media {
            .list{
                ul{
                    >li{
                        .content{
                            .text{
                                p{
                                    font-size: 1.8rem;
                                    span{
                                        font-size: 1.8rem;
                                    }
                                }
                            }
                        }
                        .comment{
                            >ol{
                                li{
                                    gap: 1rem;
                                    flex-direction: column;
                                    .name{
                                        font-size: 1.8rem;
                                    }
                                    .text{
                                        display: flex;
                                        flex-direction: column;
                                        gap: 1rem;
                                        p{
                                            font-size: 1.8rem;
                                            line-height: 2.5rem;
                                            img{
                                                max-width: unset;
                                                height:2.5rem;
                                            }
                                        }
                                        .date{
                                            font-size: 1.8rem;
                                            margin-left: 0;
                                        }
                                    }
                                    .ai{
                                        font-size: 1.6rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `}
`