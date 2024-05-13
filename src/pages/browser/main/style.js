import styled from "styled-components";

export const Banner = styled.div`
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 60rem;
    .content{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
        h2{
            font-size: 5rem;
            font-weight: bold;
            line-height: 1.4;
        }
        p{
            margin-top: 2rem;
            line-height: 1.5;
            font-size: 1.8rem;
            font-weight: 300;
        }
        .buttons{
            button{
                margin-top: 3rem;
                padding: 1.5rem 40px;
                border: 1px solid #fff;
                color: #fff;
                font-size: 1.8rem;
                &:nth-child(2){
                    display: none;
                }
            }
        }
    }

    @media (max-width:1024px) {
        .content{
            width: 100%;
            left: 50%;
            transform: translate(-50%,-50%);
            text-align: center;
            h2{
            }
            p{
                br{
                    &:nth-child(1),
                    &:nth-child(3){
                        display: none;
                    }
                }
            }
            .buttons{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                button{
                    &:nth-child(2){
                        display: inline-block;
                    }
                }
            }
        }
    }
`

export const Intro = styled.div`
    padding: 10rem 0px;
    background-color: #f1f4f9;
    .flex{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10rem;
        h2{
            font-size: 7rem;;
            font-weight: 900;
            color: #454545;
        }
        p{
            font-size: 1.8rem;
            font-weight: 500;
            line-height: 1.8;
        }
    }
    @media (max-width:1024px){
        padding: 5rem 0px;
        .flex{
            flex-direction: column;
            gap: 2rem;
            background-color: #fff;
            padding: 3rem 0px;
            p{
                text-align: center;
                font-weight: 400;
            }
        }
    }
    @media (max-width:480px) {
        .flex{
            padding: 3rem 1.5rem;
            p{
                br{
                    display: none;
                }
            }
        }
    }
`

export const Todaywork = styled.div`
    text-align: center;
    padding: 15rem 0;
    h3{
        color: #39c9d2;
        font-size: 2rem;
        font-weight: bold;
    }
    h4{
        font-size: 4rem;
        font-weight: bold;
        margin: 2rem 0px 3rem;
    }
    p{
        font-size: 1.8rem;
        line-height: 1.8;
        font-weight: 500;
        margin-bottom: 5rem;
    }
    @media (max-width:1024px) {
        padding: 5rem 0;
        h4{
            font-size: 3rem;
        }
        p{
            font-weight: 400;
        }
        img{
            width: 100%;
        }
    }
    @media (max-width:480px) {
        p{
            br{
                display: none;
            }
        }
    }
`

export const Live = styled.div`
    background-color: #39c9d2;
    padding: 15rem 0;
    .flex{
        display: flex;
        align-items: center;
        gap: 5rem;
        .content{
            h3{
                color: #fff;
                font-size: 2rem;
                font-weight: bold;
            }
            h4{
                font-size: 4rem;
                font-weight: bold;
                margin: 2rem 0 3rem;
                color: #fff;
            }
            p{
                font-size: 1.8rem;
                line-height: 1.8;
                font-weight: 500;
                color: #fff;
            }
        }
    }
    @media (max-width:1200px) {
        padding: 5rem 0;
        .flex{
            flex-direction: column;
            .content{
                order: -1;
                text-align: center;
                h4{
                    font-size: 3rem;
                }
                p{
                    font-weight: 400;
                }
            }
            img{
                width: 100%;
            }
        }
    }
    @media (max-width:480px) {
        .flex{
            p{
                br{
                    display: none;
                }
            }
        }
    }
`

export const RightImageContainer = styled.div`
    padding: 15rem 0;
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    h3{
        color: #39c9d2;
        font-size: 2rem;
        font-weight: bold;
    }
    h4{
        font-size: 4rem;
        font-weight: bold;
        margin: 2rem 0 3rem;
        line-height: 1.2;
    }
    p{
        font-size: 1.8rem;
        line-height: 1.8;
        font-weight: 500;
        margin-bottom: 5rem;
    }
    @media (max-width:1024px) {
        padding: 5rem 0;
        .flex{
            flex-direction: column;
            text-align: center;
            h4{
                font-size: 3rem;
                margin: 2rem 0;
            }
            p{
                font-weight: 400;
            }
            img{
                max-width: 100%;
            }
        }
    }
    @media (max-width:480px) {
        .flex{
            p{
                br{
                    display: none;
                }
            }
        }
    }
`

export const Timeline = styled.div`
    background-color: #f9fafb;
    padding-top: 20rem;
    .flex{
        display: flex;
        align-items: start;
        justify-content: center;
        gap: 10rem;
        h3{
            color: #39c9d2;
            font-size: 2rem;
            font-weight: bold;
        }
        h4{
            font-size: 4rem;
            font-weight: bold;
            margin: 2rem 0 3rem;
            line-height: 1.2;
        }
        p{
            font-size: 1.8rem;
            line-height: 1.8;
            font-weight: 500;
            margin-bottom: 5rem;
        }
    }
    @media (max-width:1024px) {
        padding-top: 5rem;
        .flex{
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 3rem;
            .content{
                order: -1;
                h3{
                }
                h4{
                    font-size: 3rem;
                }
                p{
                    font-weight: 400;
                    margin-bottom: 0;
                }
            }
            img{
                max-width: 100%;
            }
        }
    }
    @media (max-width:480px) {
        .flex{
            p{
                br{
                    display: none;
                }
            }
        }
    }
`

export const LeftImageContainer = styled(Timeline)`
    padding: 150px 0px;
    .flex{
        align-items: center;
    }
    @media (max-width:1024px) {
        padding: 50px 0px;
    }
`

export const UserUi = styled.div`
    background-color: #39c9d2;
    padding: 15rem 0;
    text-align: center;
    h3{
        color: #fff;
        font-size: 4rem;
        font-weight: bold;
        margin-bottom: 3rem;
        line-height: 1.2;
    }
    p{
        color: #fff;
        font-size: 1.8rem;
        line-height: 1.8;
        font-weight: 300;
        margin-bottom: 10rem;
    }
    .img{
        position: relative;
        .base{
            width: 100%;
        }
        div{
            img{
                position: absolute;
                top: 0%;
                left: 0;
                width: 100%;
            }
        }
    }
    @media (max-width:1024px) {
        padding: 5rem 0;
        h3{
            font-size: 3rem;
        }
        p{
            font-weight: 400;
            margin-bottom: 3rem;
        }
    }
`