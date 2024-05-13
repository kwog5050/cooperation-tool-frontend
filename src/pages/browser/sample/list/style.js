import styled from "styled-components";


export const TapMenu = styled.div`
    padding: 10rem 0 5rem;
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        li{
            flex: 1;
            text-align: center;
            border-bottom: 1px solid #ccc;
            padding: 2rem 0;
            font-size: 1.8rem;
            font-weight: bold;
            cursor: pointer;
        }
        .on{
            border-bottom: 2px solid #000;
            padding: 2rem 0 1.8rem;
        }
    }
    @media (max-width:750px) {
        padding: 5rem 0;
        ul{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2px;
            li{
                border: none;
                background-color: #eee;
                font-size: 16px;
            }
            .on{
                border: none;
                background-color: #38c9d2;
                color: #fff;
            }
        }
    }
`

export const List = styled.div`
    padding-bottom: 15rem;
    .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #000;
        padding-bottom: 2rem;
        h4{
            font-size: 2rem;
            font-weight: 500;
            b{
                font-size: 2rem;
                font-weight: 500;
                color: #38c9d2;
            }
        }
        .search{
            position: relative;
            input{
                border: 1px solid #ccc;
                padding: 1.5rem;
                width: 20rem;
                border-radius: 5px;
            }
            img{
                position: absolute;
                top: 50%;
                right: 1.5rem;
                transform: translateY(-50%);
                cursor: pointer;
            }
        }
    }
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 2rem;
        margin-top: 3rem;
        li{
            width: 100%;
            a{
                width: 100%;
                height: 23rem;
                border-radius: 15px;
                padding: 4rem 4rem 3rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                h5{
                    font-size: 2.2rem;
                    font-weight: bold;
                    color: #fff;
                    line-height: 1.3;
                }
                span{
                    color: #fff;
                    opacity: 0.6;
                }
            }
        }
    }
    @media (max-width:900px) {
        ul{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media (max-width:600px) {
        ul{
            grid-template-columns: 1fr;
            li{
                a{
                    height: unset;
                    gap: 3rem;
                }
            }
        }
    }
`