import styled, { css } from "styled-components";

export const Ball = styled.div`
    width: 67px;
    height: 30px;
    padding: 3px;
    border-radius: 15px;
    background-color: #38c9d2;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    span{
        padding: 0px 7px;
        font-size: 12px;
        font-weight: 500;
    }
    span.on{
        color: #fff;
    }
    span.off{
        display: none;
    }
    .ball{
        position: absolute;
        top: 50%;
        left: calc(100% - 27px);
        transform: translateY( -50%);
        background-color: #fff;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        transition: left .2s;
    }
    ${(props) => props.off && css`
        background-color: #fff;
        border: 2px solid #e6e6e6;
        justify-content: end;
        span.on{
            color: #fff;
            display: none;
        }
        span.off{
            color: #666;
            display: block;
        }
        .ball{
            background-color: #e6e6e6;
            left: calc(0% + 3px);
        }
    `}
    @media (max-width:400px) {
        width: 53px;
        height: 25px;
        .ball{
            width: 19px;
            height: 19px;
            left: calc(100% - 22px);
            transform: translateY(-52%);
        }
        span{
            font-size:10px;
        }
    }
`