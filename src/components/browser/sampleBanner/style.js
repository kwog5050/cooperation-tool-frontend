import styled from "styled-components";

export const Banner = styled.div`
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
    text-align: center;
    padding: 12rem 0rem;
    color: #fff;
    h3{
        font-size: 3.6rem;
        font-weight: bold;
        margin-bottom: 3rem;
    }
    p{
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 1.5;
    }
    @media (max-width:750px) {
        padding: 7rem 0;
        h3{
            font-size: 2.8rem;
            margin-bottom: 2rem;
        }
    }
`