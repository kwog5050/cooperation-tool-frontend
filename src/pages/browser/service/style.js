import styled from "styled-components";

export const Experience = styled.div`
    padding: 10rem 0px 50rem;
    text-align: center;
    position: relative;
    h3{
        color: #fff;
        font-size: 3.5rem;
        font-weight: bold;
    }
    p{
        color: #fff;
        font-size: 1.8rem;
        font-weight: 300;
        line-height: 2;
        margin: 3.0rem 0;
    }
    a{
        font-size: 2.0rem;
        font-weight: 500;
        color: #fff;
        background-color: #252525;
        padding: 2rem 7rem;
        border-radius: 50px;
    }
    img{
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translateX(-50%);
    }
    @media (max-width:1250px) {
        padding: 10rem 1.5rem;
        img{
            position: unset;
            transform: none;
            width: 100%;
            margin-top: 2rem;
        }
    }
    @media (max-width:800px) {
        padding: 5rem 1.5rem;
        h3{
            font-size: 2.5rem;
            line-height: 1.2;
        }
        p{
            line-height: 1.5;
        }
    }
    @media (max-width:380px) {
        p{
            br{
                display: none;
            }
        }
    }
`

export const Container = styled.div`
    padding: 15rem 1.5rem;
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
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
            color: #353535;
        }
    }
    @media (max-width:1250px) {
        padding: 5rem 1.5rem !important;
        .flex{
            flex-direction: column;
            text-align: center;
            p{
                font-weight: 400;
            }
            img{
                max-width: 100%;
            }
        }
    }
    @media (max-width:340px) {
        .flex{
            p{
                br{
                    display: none;
                }
            }
        }
    }
`