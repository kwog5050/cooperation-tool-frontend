import styled from "styled-components";

export const Content = styled.div`
    padding: 10rem 0;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font: revert;
    }
    > h3{
        text-align: center;
        font-size: 3rem;
        margin-bottom: 3rem;
    }
    > h4{
        color: #aaa;
        font-weight: 400;
        font-size: 1.6rem;
        margin-bottom: 3rem;
    }
    .container{
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        padding: 5rem 0;
        img{
            max-width: 100%;
        }
    }
`