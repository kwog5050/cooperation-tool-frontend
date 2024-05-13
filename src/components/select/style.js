import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;  
    align-items: center; 
    justify-content: space-between;
    background-color: #fff;
    padding: 0px 1rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    border: 1px solid #eee;
    width: ${(props) => props.width + "rem"};
    span{
        line-height: 4.4rem;
        font-size: 1.6rem;
        color: #999;
        display: block;
        width: 100%;
    }
    img{
        height: 4.4rem;
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
`