import styled from "styled-components";

export const Container = styled.div`
    padding: 100px 0px;
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 50px;
        h3{
            font-size: 36px;
            font-weight: bold;
        }
        .search{
            position: relative;
            input{
                background-color: #f6f7f9;
                border: 0;
                border-radius: 10px;
                padding: 20px;
                font-size: 20px;
                font-weight: 300;
                width: 400px;
            }
            button{
                position: absolute;
                top: 50%;
                right: 0px;
                transform: translateY(-50%);
                padding: 20px;
            }
        }
    }
`