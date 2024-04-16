import styled from "styled-components";

export const Menu = styled.div`
    position: sticky;
    top: 79px;
    left: 0;
    background-color: #333;
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        li{
            flex: 1;
            height: 65px;
            display: flex;
            align-items: center;
            justify-content: center;
            &:not(:last-child){
                a{
                    border-right: 1px solid #666;
                }
            }
            a{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                padding: 2px 0px;
                span{
                    color: #fff;
                    font-size: 17px;
                    font-weight: 300;
                }
            }
        }
        .on{
            border-bottom: 2px solid #38c9d2;
            a{
                padding: 2px 0px 0px;
            }
        }
    }
`