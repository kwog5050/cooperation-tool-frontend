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
                gap: 5rem;
                padding: 3rem 2rem;
                cursor: pointer;
                > p{
                    flex: 1;
                    font-size: 1.8rem;
                    font-weight: 400;
                    line-height: 1.2;
                }
            }
            .a{
                display: flex;
                align-items: start;
                justify-content: space-between;
                background-color: #f6f7f9;
                gap: 5rem;
                padding: 0 2rem;
                overflow: hidden;
                transition: max-height .5s;
                .content{
                    flex: 1;
                    margin: 30px 0;
                    p{
                        font-size: 1.6rem;
                        font-weight: 300;
                        line-height: 1.5;
                        *{
                            font-size: 1.6rem;
                            line-height: 1.5;
                        }
                        img{
                            display: block;
                            margin-top: 2rem;
                        }
                    }
                }
                > img{
                    margin: 30px 0;
                }
            }
        }
        .off{
            .a{
                max-height: 0 !important;
            }
        }
    }
    @media (max-width:900px) {
        ul{
            li{
                .q{
                    gap: 2rem;
                    p{
                        /* font-size: 14px; */
                    }
                    img{    
                        &:first-child{
                            width: 3.5rem;
                        }
                    }
                }
                .a{
                    gap: 2rem;
                    .content{
                        p{
                            /* font-size: 14px; */
                        }
                    }
                    > img{
                        width: 3.5rem;
                    }
                }
            }
        }
    }
`