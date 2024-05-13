import styled from "styled-components";

export const Banner = styled.div`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 100px 0px;
    h3{
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        line-height: 1.2;
    }
    .wrap > p{
        font-size: 18px;
        text-align: center;
        margin-top: 20px;
    }
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin-top: 50px;
        li{
            width: 430px;
            height: 214px;
            padding: 30px;
            color: #fff;
            border-radius: 10px;
            display: flex;
            align-items: start;
            flex-direction: column;
            justify-content: space-between;
            position: relative;
            &:first-child{
                background-color: #38c9d2;
            }
            &:last-child{
                background-color: #454545;
            }
            h4{
                font-size: 18px;
                margin-bottom: 10px;
            }
            p{
                color: #9bebf0;
            }
            span{
                display: flex;
                align-items: center;
                font-size: 30px;
                font-weight: bold;
                margin-top: 20px;
            }
            a{
                padding: 15px 30px;
                background-color: #fff;
                border-radius: 5px;
                font-size: 16px;
            }
            > img{
                position: absolute;
                top: 50%;
                right: 30px;
                transform: translateY(-50%);
            }
        }
    }
    @media (max-width:800px) {
        padding: 50px 0px;
        ul{
            flex-direction: column;
            li{
                width: 100%;
            }
        }
    }
    @media (max-width: 650px) {
        h3{
            font-size: 24px;
        }
        .wrap > p{
            font-size: 14px;
        }
        ul{
            margin-top: 30px;
        }
    }
`

export const Help = styled.div`
    background-color: #f6f7f9;
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 40px 0px;
        p{
            font-size: 24px;
            font-weight: bold;
        }
        .buttons{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 70px;
            button{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
                span{
                    font-size: 18px;
                }
            }
        }
    }
    @media (max-width: 1000px) {
        .flex{
            flex-direction: column;
            gap: 20px;
            p{
                font-size: 18px;
            }
            .buttons{
                gap: 10px;
                flex-direction: column;
                width: 100%;
                button{
                    width: 100%;
                    background-color: #fff;
                    border: 1px solid #eee;
                    border-radius: 5px;
                    padding: 15px 15px;
                    justify-content: space-between;
                    span{
                        font-size: 16px;
                    }
                }
            }
        }
    }
`

export const Faq = styled.div`
    padding-bottom: 150px;
    h3{
        text-align: center;
        font-size: 36px;
        font-weight: bold;
        margin: 100px 0px 50px;
    }
    .more{
        text-align: center;
        margin-top: 50px;
        a{
            padding: 20px 70px;
            background-color: #000;
            color: #fff;
            border-radius: 50px;
            font-size: 18px;
        }
    }
    @media (max-width:1024px) {
        padding-bottom: 50px;
        h3{
            font-size: 24px;
            margin-bottom: 30px;
        }
        .more{
            margin-top: 30px;
            a{
                padding: 15px 50px;
                font-size: 16px;
            }
        }
    }
`