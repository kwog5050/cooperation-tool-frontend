import styled from "styled-components";

export const Experience = styled.div`
    padding: 100px 0px 500px;
    text-align: center;
    position: relative;
    h3{
        color: #fff;
        font-size: 35px;
        font-weight: bold;
    }
    p{
        color: #fff;
        font-size: 18px;
        font-weight: 300;
        line-height: 2;
        margin: 30px 0px;
    }
    a{
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        background-color: #252525;
        padding: 20px 70px;
        border-radius: 50px;
    }
    img{
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const Container = styled.div`
    padding: 150px 0px;
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
        h3{
            color: #39c9d2;
            font-size: 20px;
            font-weight: bold;
        }
        h4{
            font-size: 40px;
            font-weight: bold;
            margin: 20px 0px 30px;
            line-height: 1.2;
        }
        p{
            font-size: 18px;
            line-height: 1.8;
            font-weight: 500;
            margin-bottom: 50px;
            color: #353535;
        }
    }
`