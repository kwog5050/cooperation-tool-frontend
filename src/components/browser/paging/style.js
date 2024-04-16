import styled from "styled-components";

export const PageNav = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #eee;
    padding: 15px 0px;
    border-radius: 10px;
    margin-top: 50px;
    gap: 30px;
    > button{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .paging{
        display: flex;
        align-items: center;
        justify-content: center;
        button{
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
        }
        .on{
            background-color: #252525;
            color: #fff;
        }
    }
`