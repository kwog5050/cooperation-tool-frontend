import styled from "styled-components";

export const Head = styled.header`
    position: sticky;
    top: 0%;
    left: 0;
    background-color: #fff;
    width: 100%;
`

export const FlexBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
`

export const H1 = styled.h1`
    padding: 15px 0px;
`

export const Ul = styled.ul`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 20px;
    li{
        a{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 16px;
            font-weight: 500;
            padding: 25px 10px;
        }
    }
`

export const buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    button{
        padding: 12px 30px;
        background-color: #38c9d2;
        color: #fff;
        border-radius: 30px;
        font-size: 17px;
    }
`