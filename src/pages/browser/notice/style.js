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
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
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
    @media (max-width:800px) {
        padding: 50px 0px;
        h3{
            font-size: 28px;
            text-align: center;
            margin-bottom: 30px;
        }    
        .title{
            padding: 20px;
            h4{
                font-size: 14px;
                &:first-child{
                    width: 70px;
                }
                &:last-child{
                    width: 100px;
                }
            }
        }
        ul{
            li{
                a{
                    padding: 20px;
                    .index{
                        width: 70px;
                        font-size: 14px;
                    }
                    > p{
                        font-size: 14px;
                    }
                    .date{
                        width: 100px;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    @media (max-width: 600px) {
        .title{
            justify-content: start;
            gap: 0px;
            padding: 20px 15px;
            h4{
                &:nth-child(2){
                    flex: 1;
                }
                &:last-child{
                    display: none;
                }
            }
        }
        ul{
            li{
                a{
                    padding: 20px 15px;
                    gap: 0px;
                    .date{
                        display: none;
                    }
                }
            }
        }
    }
`