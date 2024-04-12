import styled from "styled-components";

export const Banner = styled.div`
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 600px;
    .content{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
        h2{
            font-size: 50px;
            font-weight: bold;
            line-height: 1.4;
        }
        p{
            margin-top: 20px;
            line-height: 1.5;
            font-size: 18px;
            font-weight: 300;
        }
        button{
            margin-top: 30px;
            padding: 15px 40px;
            border: 1px solid #fff;
            color: #fff;
            font-size: 18px;
        }
    }
`