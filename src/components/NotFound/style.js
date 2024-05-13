import styled from "styled-components";

export const NotFound = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #eee;
    z-index: 9999999999999999999999999999999999999999999999999999999;
    text-align: center;
    img{
        width: 150px;
        margin-bottom: 30px;
    }
    h1{
        font-size: 24px;
        line-height: 1.2;
        font-weight: bold;
        strong{
            color: red;
        }
    }
    p{
        line-height: 2;
        font-size: 16px;
        margin-top: 20px;
        a{
            font-size: 16px;
            line-height: 2;
            text-decoration: underline;
        }
    }
    .buttons{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin: 30px 0px;
        a{
            background-color: #000;
            border: 1px solid #000;
            color: #fff;
            padding: 15px 50px;
        }
        button{
            border: 1px solid #000;
            padding: 15px 50px;
        }
    }
    span{
        color: #858585;
        font-size: 12px;
    }
`