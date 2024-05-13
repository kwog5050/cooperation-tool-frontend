import styled from "styled-components";

export const Container = styled.div`
    padding: 10rem 0;
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 5rem;
        h3{
            font-size: 3.6rem;
            font-weight: bold;
        }
        .search{
            position: relative;
            input{
                background-color: #f6f7f9;
                border: 0;
                border-radius: 1rem;
                padding: 2rem;
                font-size: 2rem;
                font-weight: 300;
                width: 40rem;
            }
            button{
                position: absolute;
                top: 50%;
                right: 0px;
                transform: translateY(-50%);
                padding: 2rem;
            }
        }
    }
    @media (max-width:900px) {
        .title{
            flex-direction: column;
            gap: 2rem;
            margin-bottom: 3rem;
            .search{
                width: 100%;
                input{
                    width: 100%;
                }
            }
        }
    }
`