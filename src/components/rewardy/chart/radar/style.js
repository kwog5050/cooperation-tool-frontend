import styled from "styled-components";

export const Graph = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4.5rem;
    .chartData{
        position: absolute;
        width: 240px;
        height: 240px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        > div{
            width: 50px;
            height: 50px;
            position: absolute;
            transform: translateX(-50%);
            text-align: center;
            &:nth-child(1){ top: 0%; left: 50%; transform: translate(-60%,-40%); }
            &:nth-child(2){ top: 20%; left: 100%; transform: translateX(-70%);}
            &:nth-child(3){ top: 65%; left: 100%; transform: translateX(-70%);}
            &:nth-child(4){ top: 100%; left: 50%; transform: translate(-60%,-25%);}
            &:nth-child(5){ top: 65%; left: 0%; transform: translateX(-50%);}
            &:nth-child(6){ top: 20%; left: 0%; transform: translateX(-50%);}
            h5{
                margin-bottom: 5px;
            }
            span{
                color: #aaa;
            }
            b{
                color: #000;
            }
        }
    }
    .hexagon{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        img{
            width: 39px;
            height: 44px;
        }
        p{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-weight: bold;
            color: #38c9d2;
            font-size: 16px;
        }
    }
    canvas{
        width: 220px !important;
        height: 220px !important;
    }
    
    @media (max-width:380px) {
        transform: scale(0.9);
    }
`