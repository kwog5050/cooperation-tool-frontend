import styled from "styled-components";

export const Banner = styled.div`
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 600px;
    .content{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
        h2{
            font-size: 50px;
            font-weight: bold;
            line-height: 1.4;
        }
        p{
            margin-top: 20px;
            line-height: 1.5;
            font-size: 18px;
            font-weight: 300;
        }
        button{
            margin-top: 30px;
            padding: 15px 40px;
            border: 1px solid #fff;
            color: #fff;
            font-size: 18px;
        }
    }
`

export const Intro = styled.div`
    padding: 100px 0px;
    background-color: #f1f4f9;
    .flex{
        display: flex;
        align-items: center;
        gap: 100px;
        h2{
            font-size: 70px;;
            font-weight: 900;
            color: #454545;
        }
        p{
            font-size: 18px;
            font-weight: 500;
            line-height: 1.8;
        }
    }
`

export const Todaywork = styled.div`
    text-align: center;
    padding: 150px 0px;
    h3{
        color: #39c9d2;
        font-size: 20px;
        font-weight: bold;
    }
    h4{
        font-size: 40px;
        font-weight: bold;
        margin: 20px 0px 30px;
    }
    p{
        font-size: 18px;
        line-height: 1.8;
        font-weight: 500;
        margin-bottom: 50px;
    }
`

export const Live = styled.div`
    background-color: #39c9d2;
    padding: 150px 0px;
    .flex{
        display: flex;
        align-items: center;
        gap: 50px;
        .content{
            h3{
                color: #fff;
                font-size: 20px;
                font-weight: bold;
            }
            h4{
                font-size: 40px;
                font-weight: bold;
                margin: 20px 0px 30px;
                color: #fff;
            }
            p{
                font-size: 18px;
                line-height: 1.8;
                font-weight: 500;
                color: #fff;
            }
        }
    }
`

export const RightImageContainer = styled.div`
    padding: 150px 0px;
    .flex{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
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
    }
`

export const Timeline = styled.div`
    background-color: #f9fafb;
    padding-top: 200px;
    .flex{
        display: flex;
        align-items: start;
        justify-content: center;
        gap: 100px;
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
        }
    }
`

export const LeftImageContainer = styled(Timeline)`
    padding: 150px 0px;
    .flex{
        align-items: center;
    }
`

export const UserUi = styled.div`
    background-color: #39c9d2;
    padding: 150px 0px;
    text-align: center;
    h3{
        color: #fff;
        font-size: 40px;
        font-weight: bold;
        margin: 20px 0px 30px;
        line-height: 1.2;
    }
    p{
        color: #fff;
        font-size: 18px;
        line-height: 1.8;
        font-weight: 300;
        margin-bottom: 100px;
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
`