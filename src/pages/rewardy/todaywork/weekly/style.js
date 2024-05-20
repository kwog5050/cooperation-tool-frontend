import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2rem;
        background-color: #f6f7f9;
        h3{
            font-size: 2.2rem;
            font-weight: bold;
        }
        .date{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            span{
                font-size: 2.4rem;
                font-weight: bold;
            }
        }   
    }
    .table{
        overflow-x: scroll;
        table{
            width: 100%;
            min-width: 1200px;
            tr{
                th{
                    &:nth-child(1){
                        text-align: center;
                        position: sticky;
                        left: 0;
                        z-index: 1;
                    }
                }
                td{
                    &:nth-child(1){
                        text-align: center;
                        position: sticky;
                        left: 0;
                        background-color: #fff;
                        z-index: 1;
                    }
                }
            }
            thead{
                border-top: 1px solid #e8ebee;
                tr{
                    th{
                        background-color: #f6f7f9;
                        padding: 2rem 0;
                        font-size: 1.5rem;
                        font-weight: 400;
                        color: #353553;
                        line-height: 1.5;

                    }
                }
            }
            tbody{
                tr{
                    td{
                        border-bottom: 1px solid #ccc;
                        padding: 2.4rem;
                        line-height: 1.5;
                        font-size: 1.4rem;
                        color: #353535;
                        &:not(:first-child){
                            border-right: 1px solid #f2f2f2;
                        }
                        &:nth-child(2){
                            border-left: 1px solid #f2f2f2;
                        }
                    }
                }
            }
        }
    }
    @media (max-width:1024px) {
        .title{
            flex-direction: column;
            gap: 2rem;
            h3{
                display: none;
            }
            .select{
                width: 100%;
            }
        }
        .table{
            table{
                thead{
                    tr{
                        th{
                            font-size: 1.7rem;
                        }
                    }
                }
                tbody{
                    tr{
                        td{
                            font-size: 1.6rem;
                        }
                    }
                }
            }
        }
    }
`