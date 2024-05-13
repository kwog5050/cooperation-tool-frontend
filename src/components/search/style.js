import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: inline-block;
    input{
        border: 1px solid #ddd;
        padding: 0 1.5rem;
        line-height: 4.4rem;
        width: ${(props) => props.width + "rem"};
        border-radius: 5px;
    }
    button{
        position: absolute;
        top: 50%;
        right: 1.5rem;
        transform: translateY(-50%);
    }
`