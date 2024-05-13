import styled from "styled-components";

export const Side = styled.aside`
    position: fixed;
    top: calc(150px + 79px + 65px);
    ul{
        li{
            a{
                font-size: 15px;
                padding: 15px 20px;
                width: 250px;
            }
        }
        .on{
            a{
                color: #fff;
                background-color: #38c9d2;
                border-top-right-radius: 50px;
                border-bottom-right-radius: 50px;
            }
        }
    }
    @media (max-width:1200px) {
        display: none;
    }
`