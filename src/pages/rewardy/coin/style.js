import styled, { css } from "styled-components";

export const Container = styled.div`
    .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        background-color: #f6f7f9;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 1px 1px 2px #00000011;
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
                width: 15rem;
                span{
                    line-height: 4.4rem;
                    font-size: 1.6rem;
                    color: #999;
                    display: block;
                    width: 100%;
                }
                > img {
                    max-height: 4.4rem;
                }
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
        .right{
            display: flex;
            align-items: center;
            gap: 1rem;
            .buttons{
                display: flex;
                align-items: center;
                gap: 1rem;
                button{
                    background-color: #fff;
                    border: 1px solid #eee;
                    line-height: 4.4rem;
                    padding: 0 2rem;
                    border-radius:5px;
                }
                .on{
                    background-color: #38c9d2;
                    color: #fff;
                }
            }
            .flex{
                display: flex;
                align-items: center;
                gap: 1rem;
                .date{
                    display: flex;
                    align-items: center;
                    background-color: #fff;
                    padding: 0 2rem;
                    border: 1px solid #eee;
                    border-radius: 5px;
                    gap: 1rem;
                    > div{
                        display: flex;
                        align-items: center;
                        gap: 1rem;
                        cursor: pointer;
                        span{
                            line-height: 4.4rem;
                            font-size: 1.6rem;
                            font-weight: 300;
                        }
                    }
                }
                > button{
                    line-height: 4.4rem;
                    background-color: #222;
                    color: #fff;
                    padding: 0 2.5rem;
                    border-radius: 5px;
                }
            }
        }
    }
    .list{
        margin-top: 2rem;
        box-shadow: 1px 1px 2px #00000011;
        border-radius: 10px;
        overflow: hidden;
        .head{
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #f6f7f9;
            padding: 2rem 0;
            >div{
                display: flex;
                align-items: center;
                h4{
                    text-align: center;
                    font-size: 1.7rem;
                }
            }
            .left{
                flex: 3;
                h4{
                    &:nth-child(1){
                        width: 17rem;
                    }
                    &:nth-child(2){
                        width: 17rem;
                    }
                    &:nth-child(3){
                        flex: 1;
                        text-align: left;
                    }
                }
            }
            .right{
                flex: 1;
                h4{
                    flex: 1;
                }
            }
        }
        ul{
            li{
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: #fff;
                padding: 2rem 0;
                &:not(:last-child){
                    border-bottom: 1px solid #eee;
                }
                >div{
                    display: flex;
                    align-items: center;
                    p{
                        text-align: center;
                        font-size: 1.5rem;
                        font-weight: 300;
                        color: #454545;
                        line-height: 1.5;
                    }
                }
                .left{
                    flex: 3;
                    > div{
                        display: flex;
                        p{
                            width: 17rem;
                        }
                    }
                    > p{
                        flex: 1;
                        text-align: left;
                        display: -webkit-box;
                        word-wrap: break-word;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
                .right{
                    flex: 1;
                    p{
                        flex: 1;
                        &:nth-child(1){
                            color: red;
                        }
                    }
                }
            }
        }
    }
    ${(props) => props.width < 880 && css`
        @media {
            .top{
                flex-direction: column;
                gap: 0.5rem;
                .selectBox{
                    width: 100%;
                    .select{
                        width: 100%;
                    }
                }
                .right{
                    flex-direction: column;
                    gap: 0.5rem;
                    width: 100%;
                    .buttons{
                        width: 100%;
                        gap: 0.5rem;
                        button{
                            flex: 1;
                        }
                    }
                    .flex{
                        width: 100%;
                        gap: 0.5rem;
                        .date{
                            flex:1;
                            justify-content: center;
                        }
                    }
                }
            }
        }
    `}
    ${(props) => props.width < 650 && css`
        @media {
            .list{
                border-radius: 5px;
                .head{
                    display: none;
                }
                ul{
                    li{
                        padding: 2rem;
                        .left{
                            flex-direction: column;
                            align-items: start;
                            gap: 1rem;
                            div{
                                gap: 2rem;
                                p{
                                    width: unset;
                                }
                            }
                            > p{
                                font-size: 1.8rem;
                                order: -1;
                            }
                        }
                        .right{
                            flex-direction: column;
                            justify-content: space-between;
                            align-items: end;
                            gap: 1rem;
                            p{
                                &:nth-child(1){
                                    font-size: 1.8rem;
                                }
                                &:nth-child(3){
                                    display: none;
                                }
                            }
                        }
                    }
                }
            }
        }
    `}
`