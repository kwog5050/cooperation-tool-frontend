import styled from "styled-components";

export const Popoup = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .content.on{
        display: block;
    }
    .content{
        position: relative;
        background-color: #fff;
        padding: 5rem 3rem;
        max-width: 55rem;
        width: 97%;
        max-height: 97vh;
        overflow-y: scroll;
        border-radius: 10px;
        display: none;
        &::-webkit-scrollbar{
            display: none;
        }
        > img{
            position: absolute;
            top: 2rem;
            right: 2rem;
            width: 10rem;
        }
        .title{
            h3{
                font-size: 3rem;
                font-weight: 600;
            }
            p{
                color: #858585;
                font-size: 1.6rem;
                line-height: 1.4;
                margin-top: 1rem;
            }
        }
        .input{
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 3rem;
            .flex{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
            }
            input{
                flex: 1;
                border: 1px solid #e5e5e5;
                font-size: 1.6rem;
                padding: 0rem 1.5rem;
                border-radius: 10px;
                width: 100%;
                line-height: 5rem;
            }
            button{
                color: #38c9d2;
                border: 1px solid #38c9d2;
                height: 100%;
                font-size: 1.6rem;
                font-weight: 400;
                line-height: 5rem;
                padding: 0 1.5rem;
                border-radius: 10px;
            }
        }
        .count{
            background-color: #f6f7f9;
            border-radius: 10px;
            margin: 3rem 0 2rem;
            padding: 3rem;
            h5{
                text-align: center;
                font-size: 1.8rem;
                font-weight: 500;
                line-height: 1.2;
            }
            .box{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                margin: 3rem 0;
                span{
                    display: inline-block;
                    width: 18rem;
                    background-color: #fff;
                    text-align: center;
                    line-height: 5rem;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                }
                button{
                    font-size: 2.4rem;
                    font-weight: bold;
                    line-height: 5rem;
                    width: calc(5rem + 2px);
                    background-color: #fff;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                }
            }
            p{
                color: #aaa;
                line-height: 1.5;
                font-size: 1.4rem;
                u{
                    color: #000;
                    line-height: 1.5;
                    font-size: 1.4rem;
                }
            }
        }
        .totalPay{
            padding: 1.5rem;
            border: 1px solid #eee;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            p{
                font-size: 1.6rem;
                display: flex;
                align-items: end;
                gap: 5px;
                color: #858585;
                span{
                    font-size: 1.2rem;
                }
            }
            b{
                font-size: 2.2rem;
                display: flex;
                align-items: end;
                gap: 3px;
                color: #38c9d2;
                span{
                    font-size: 1.5rem;
                    font-weight: 400;
                }
            }
        }
        .agreement{
            padding: 0 1.5rem;
            border: 1px solid #eee;
            border-radius: 10px;
            margin-top: 2rem;
            > div{
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
                padding: 1.5rem 0;
                p{
                    flex: 1;
                }
                button{
                    text-decoration: underline;
                    color: #858585;
                }
                > img{
                    cursor: pointer;
                }
            }
            > :nth-child(1){
                border-bottom: 1px solid #eee;
            }
        }
        .checkBox{
            display: inline-flex;
            align-items: center;
            margin-top: 2rem;
            gap: 5px;
            cursor: pointer;
            p{
                font-weight: 400;
            }
        }
        .buttons{
            margin-top: 3rem;
            display: grid;
            grid-template-columns: 15rem 1fr;
            gap: 1rem;
            button{
                color: #fff;
                padding: 2rem 0;
                font-size: 1.8rem;
                font-weight: 500;
                border-radius: 10px;
                &:nth-child(1){
                    background-color: #cccc;
                }
                &:nth-child(2){
                    background-color: #38c9d2;
                }
            }
        }
        .prev{
            text-align: center;
            margin-top: 2rem;
            button{
                text-decoration: underline;
                color: #aaa;
                font-size: 1.6rem;
            }
        }
    }
`