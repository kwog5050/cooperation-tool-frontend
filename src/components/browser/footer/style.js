import styled from "styled-components";

export const Foot = styled.footer`
    padding: 50px 0px;
    background-color: #333;
    p{
        color: #909090;
        line-height: 2;
        font-size: 15px;
        display: flex;
        span{
            line-height: 2;
            padding: 0px 10px;
            font-weight: bold;
        }
    }
    b{
        line-height: 2;
        color: #aaa;
        font-weight: 400;
    }
    .nav{
        display: flex;
        align-items: center;
        gap: 20px;
        margin-top: 40px;
        a{
            color: #fff;
            font-weight: 500;
        }
    }
`