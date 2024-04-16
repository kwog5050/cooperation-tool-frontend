import styled from "styled-components";

export const FaqList = styled.div`
    border-top: 2px solid #aaa;
    border-bottom: 1px solid #ccc;
    ul{
        li{
            width: 100%;
            &:not(:first-child){
                border-top: 1px solid #ccc;
            }
            .q{
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 50px;
                padding: 30px 20px;
                cursor: pointer;
                > p{
                    flex: 1;
                    font-size: 18px;
                    font-weight: 400;
                }
            }
            .a{
                display: flex;
                align-items: start;
                justify-content: space-between;
                background-color: #f6f7f9;
                gap: 50px;
                padding: 50px 20px;
                .content{
                    flex: 1;
                    p{
                        font-size: 16px;
                        font-weight: 300;
                        line-height: 1.5;
                        img{
                            display: block;
                            margin-top: 20px;
                        }
                    }
                }
            }
        }
    }
`