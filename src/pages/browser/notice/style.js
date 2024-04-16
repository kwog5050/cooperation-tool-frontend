import styled from "styled-components";

export const Container = styled.div`
    padding: 100px 0px;
    h3{
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 50px;
    }
    .title{
        border-top: 2px solid #aaa;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 50px;
        padding: 30px 20px;
        h4{
            text-align: center;
            font-size: 18px;
            &:first-child{
                width: 100px;
            }
            &:last-child{
                width: 100px;
            }
        }
    }
    ul{
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        li{
            width: 100%;
            &:not(:first-child){
                border-top: 1px solid #ccc;
            }
            a{
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 50px;
                padding: 40px 20px;
                .index{
                    width: 100px;
                    text-align: center;
                    font-size: 18px;
                    color: #858585;
                }
                > p{
                    flex: 1;
                    font-size: 18px;
                    font-weight: 400;
                }
                .date{
                    width: 100px;
                    text-align: center;
                    font-size: 18px;
                    font-weight: 300;
                    color: #858585;
                }
            }
        }
    }
`