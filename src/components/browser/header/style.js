import styled from "styled-components";

export const Head = styled.header`
    position: sticky;
    top: 0%;
    left: 0;
    background-color: #fff;
    width: 100%;
    z-index: 99;
`

export const FlexBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8rem;
`

export const H1 = styled.h1`
    padding: 1.5rem 0;
`

export const Ul = styled.ul`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 2rem;
    > li{
        position: relative;
        > a{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            font-size: 1.6rem;
            font-weight: 500;
            padding: 2.5rem 1rem;
        }
        &:hover{
            ol{
                display: flex;
            }
        }
        ol{
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 15rem;
            justify-content: center;
            flex-direction: column;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 1px 1px 3px #00000066;
            display: none;
            li{
                a{
                    width: 100%;
                    padding: 1.5rem 1.5rem;
                    color: #999;
                    &:hover{
                        color: #000;
                    }
                }   
            }
        }
    }
    @media (max-width:1200px) {
        display: none;
    }
`

export const buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;
    button{
        padding: 1.2rem 3rem;
        background-color: #38c9d2;
        color: #fff;
        border-radius: 30px;
        font-size: 1.7rem;
    }
    @media (max-width:1200px) {
        display: none;
    }
`

export const Mobile = styled.div`
    display: none;
    .bars{
        font-size: 3rem;
        cursor: pointer;
    }
    .menuBox{
        position: absolute;
        top: 100%;
        right: 0px;
        width: 0px;
        overflow: hidden;
        height: calc(100vh - 34px - 3rem);
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        transition: width .1s;
        ul{
            display: flex;
            flex-direction: column;
            border-top: 1px solid #eee;
            > li{
                border-bottom: 1px solid #eee;
                > a{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    line-height: 5rem;
                    padding: 0px 2rem;
                    white-space: nowrap;
                    span{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 0.5rem;
                        line-height: 5rem;
                        white-space: nowrap;
                    }
                    img{}
                }
                > ol{
                    flex-direction: column;
                    border-top: 1px solid #eee;
                    display: none;
                    li{
                        a{
                            width: 100%;
                            color: #858585;
                            padding: 1rem 2rem;
                            font-size: 1.2rem;
                            &:hover{
                                color: #000;
                            }
                        }
                    }
                }
                > ol.on{
                    display: flex;
                }
            }
        }
        .buttons{
            width: 100%;
            padding: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            button{
                flex: 1;
                background-color: #38c9d2;
                color: #fff;
                padding: 1.5rem 0px;
                white-space: nowrap;
                &:nth-child(1){
                    position: relative;
                    border-top-left-radius: 5px;
                    border-bottom-left-radius: 5px;
                    &::after{
                        content: "";
                        position: absolute;
                        top: 50%;
                        right: 0px;
                        transform: translateY(-50%);
                        width: 0.1rem;
                        height: 2.5rem;
                        background-color: #eee;
                    }
                }
                &:nth-child(2){
                    border-bottom-right-radius: 5px;
                    border-top-right-radius: 5px;
                }
            }
        }
    }
    .menuBox.on{
        width: 85vw;
        transition: width .3s;
    }
    .menuBg{
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #00000055;
        z-index: -1;
        display: none;
    }
    .menuBg.on{
        display: block;
    }
    @media (max-width:1200px) {
        display: block;
    }
    @media (max-width: 1024px) {
        .menuBox{
            > ul{
                > li{
                    > a{
                        line-height: 5.5rem;
                        font-size: 1.8rem;
                    }
                    > ol{
                        > li{
                            a {
                                font-size: 1.5rem;
                                padding: 1.25rem 2rem;
                            }
                        }
                    }
                }
            }
        }
    }
`
