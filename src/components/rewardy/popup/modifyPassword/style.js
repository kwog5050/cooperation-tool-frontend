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
            font-size: 2.8rem;
            font-weight: bold;
        }
        p{
            color: #aaa;
            font-size: 1.6rem;
            line-height: 1.5;
            margin: 2rem 0;
        }
        input{
            width: 100%;
            border: 1px solid #eee;
            border-radius: 10px;
            line-height: 5rem;
            padding: 0px 1.5rem;
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