import styled from "styled-components";

export const Loading = styled.div`
    background: #000000dd;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999999;
    text-align: center;
    > div{
        width: 150px;
        height: 150px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        img{
            &:first-child{
                position: absolute;
                top: 28px;
                left: 43px;
                display: block;
                width: 62px;
                margin: 0 auto;
                animation: circ_01 1.24s both infinite linear;
                transform-origin: center;
                z-index: 2;
            }
            &:nth-child(2){
                position: absolute;
                top: 56px;
                left: 50px;
                display: block;
                width: 50px;
            }
        }
        p{
            display: block;
            font-size: 11px;
            font-weight: bold;
            letter-spacing: 0.5em;
            line-height: 21px;
            text-align: center;
            padding-top: 100px;
            color: #fff;
            padding-left: 4px;
        }
    }
    @keyframes circ_01 { 
        0% { transform:rotate(0deg); } 
        100% { transform:rotate(-360deg); } 
    }
`