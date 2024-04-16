import React from 'react';
import { Link } from 'react-router-dom';

import Faq from 'components/browser/faq/Faq';

import { browserImage } from 'assets/images/imageConfig';

import * as Style from "./style";

const Customer = () => {
    return (
        <>
            <Style.Banner style={{backgroundImage:`url(${browserImage.customerBg})`}}>
                <div className="wrap">
                    <h3>
                        리워디 고객센터에서 <br />
                        실시간으로 상담받으세요.
                    </h3>
                    <p>자주 묻는 질문에서 찾는내용이 없을 경우, 전화나 온라인으로 문의 바랍니다.</p>

                    <ul>
                        <li>
                            <div>
                                <h4>전화 상담</h4>
                                <p>평일 09:30-17:30 (점심 12:30-13:30)</p>
                                <span>
                                    <img src={browserImage.customerHelp} alt="" />
                                    1899-6844
                                </span>
                            </div>
                            <Link to="">FAQ</Link>
                            <img src={browserImage.customerCall} alt="" />
                        </li>
                        <li>
                            <div>
                                <h4>온라인 상담</h4>
                                <span>1:1 문의하기</span>
                            </div>
                            <Link to="">온라인 문의하기</Link>
                            <img src={browserImage.customerMail} alt="" />
                        </li>
                    </ul>
                </div>
            </Style.Banner>

            <Style.Help>
                <div className="wrap">
                    <div className="flex">
                        <p>도움이 필요하신가요? 최선을 다해 도와드리겠습니다.</p>
                        <div className="buttons">
                            <button>
                                <span>전화상담 예약</span>
                                <img src={browserImage.customerArrow} alt="" />
                            </button>
                            <button>
                                <span>온라인 문의</span>
                                <img src={browserImage.customerArrow} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </Style.Help>

            <Style.Faq>
                <div className="wrap">
                    <h3>무엇을 도와드릴까요?</h3>
                    <Faq></Faq>
                </div>

                <div className="more">
                    <Link to="">더 보기</Link>
                </div>
            </Style.Faq>
        </>
    );
};

export default Customer;