import styled from "styled-components";

export const Experience = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 15rem 0;
    text-align: center;
    h3{
        font-size: 3.5rem;
        font-weight: bold;
        line-height: 1.5;
        color: #fff;
    }
    p{
        margin-top: 2rem;
        font-size: 1.8rem;
        font-weight: 300;
        color: #fff;
    }
    a{
        font-size: 1.6rem;
        font-weight: 500;
        color: #fff;
        background-color: #39c9d2;
        margin-top: 3rem;
        padding: 2rem 7rem;
        border-radius: 5rem;
    }
    @media (max-width:700px) {
        padding: 5rem 0;
        h3{
            font-size: 2rem;
        }
        p{
            font-size: 1.6rem;
        }
        a{
            padding: 1.5rem 5rem;
            margin-top: 2rem;
        }
    }
`