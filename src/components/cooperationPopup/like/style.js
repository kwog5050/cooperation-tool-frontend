import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999999999999;
    display: flex;
    align-items: center;
    justify-content: center;
    .box{
        background-color: #fff;
        padding: 3rem;
        border-radius: 10px;
        position: relative;
        max-width: 63rem;
        width: 98%;
        > img{
            position: absolute;
            top: 2rem;
            right: 2rem;
            cursor: pointer;
        }
        h3{
            font-size: 2rem;
            font-weight: 500;
            border-bottom: 1px solid #eee;
            padding-bottom: 2rem;
        }
        .user{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 2rem 0;
            .profile{
                display: flex;
                align-items: center;
                gap: 1rem;
                .profileImage{
                    width: 4.2rem;
                    height: 4.2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #eee;
                    border-radius: 50%;
                    overflow: hidden;
                    img{
                        width: 100%;
                    }
                }
                .info{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    h4{
                        font-size: 1.8rem;
                    }
                    span{
                        font-size: 1.6rem;
                        color: #aaa;
                    }
                }
            }
        }
    }
`