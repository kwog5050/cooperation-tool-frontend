import styled from "styled-components";

export const Container = styled.div`
    padding-top: 150px;
    .grid{
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-gap: 30px;
        .content{
            .title{
                border-bottom: 1px solid #bbb;
                padding: 0px 50px;
                h5{
                    color: #38c9d2;
                }
                h3{
                    font-size: 30px;
                    font-weight: bold;
                    margin: 20px 0px 30px;
                }
            }
            .text{
                padding: 50px 50px;
                > div{
                    &:not(:first-child){
                        margin-top: 100px;
                    }
                    h3{
                        font-size: 24px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }
                    p{
                        font-size: 20px;
                        line-height: 1.2;
                        margin-bottom: 20px;
                    }
                }
                img{
                    margin-top: 50px;
                }
            }
        }
    }
`