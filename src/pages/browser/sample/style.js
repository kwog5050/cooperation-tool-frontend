import styled from "styled-components";

export const Banner = styled.div`
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
    text-align: center;
    padding: 120px 0px;
    color: #fff;
    h3{
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 30px;
    }
    p{
        font-size: 18px;
        font-weight: 400;
        line-height: 1.5;
    }
`

export const TapMenu = styled.div`
    padding: 100px 0px 50px;
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        li{
            flex: 1;
            text-align: center;
            border-bottom: 1px solid #ccc;
            padding: 20px 0px;
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
        }
        .on{
            border-bottom: 2px solid #000;
            padding: 20px 0px 18px;
        }
    }

`

export const List = styled.div`
    padding-bottom: 150px;
    .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #000;
        padding-bottom: 20px;
        h4{
            font-size: 20px;
            font-weight: 500;
            b{
                font-size: 20px;
                font-weight: 500;
                color: #38c9d2;
            }
        }
        .search{
            position: relative;
            input{
                border: 1px solid #ccc;
                padding: 15px;
                width: 200px;
                border-radius: 5px;
            }
            img{
                position: absolute;
                top: 50%;
                right: 15px;
                transform: translateY(-50%);
                cursor: pointer;
            }
        }
    }
    ul{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
        margin-top: 30px;
        li{
            width: 100%;
            a{
                width: 100%;
                height: 230px;
                border-radius: 15px;
                padding: 40px 40px 30px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                h5{
                    font-size: 22px;
                    font-weight: bold;
                    color: #fff;
                    line-height: 1.3;
                }
                span{
                    color: #fff;
                    opacity: 0.6;
                }
            }
        }
    }

`