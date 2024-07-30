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
        padding: 3rem 2rem;
        border-radius: 10px;
        position: relative;
        max-width: 46rem;
        width: 98%;
        h3{
            text-align: center;
            font-size: 2rem;
            font-weight: 500;
            border-bottom: 1px solid #eee;
            padding-bottom: 2rem;
        }
        .profileImage{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            .imageBox{
                width: 10rem;
                height: 10rem;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid #eee;
                position: relative;
                margin: 5rem 0;
                > img{
                    width: 100%;
                }
                button{
                    position: absolute;
                    top: 85%;
                    left: 85%;
                    transform: translate(-50%, -50%);
                    width: 3.6rem;
                    height: 3.6rem;
                    border-radius: 50%;
                    border: 1px solid #e5e5e5;
                    background-color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        .input{
            position: relative;
            input{
                width: 100%;
                border: 1px solid #eee;
                border-radius: 10px;
                line-height: 5rem;
                padding: 0px 1.5rem;
            }
            p{
                position: absolute;
                top: 50%;
                right: 1.5rem;
                transform: translateY(-50%);
                font-size: 1.2rem;
                color: #aaa;
                span{
                    font-size: 1.2rem;
                    color: #aaa;
                }
            }
        }
        .submit{
            width: 100%;
            margin-top: 1.5rem;
            button{
                background-color: #38c9d2;
                width: 100%;
                font-size: 2rem;
                font-weight: 500;
                line-height: 5rem;
                border-radius: 10px;
                color: #fff;
            }
        }
    }
`