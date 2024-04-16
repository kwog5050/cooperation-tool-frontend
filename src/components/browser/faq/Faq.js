import React from 'react';

import { componentImages } from 'assets/images/imageConfig';

import * as Style from "./style";

const Faq = () => {
    return (
        <Style.FaqList>
            <ul>
                <li>
                    <div className="q">
                        <img src={componentImages.question} alt="" />
                        
                        <p>멤버십 결제가 정상적으로 되지 않았을 경우는 어떻게 되나요?</p>

                        <img src={componentImages.downArrow} alt="" />
                    </div>
                    
                    <div className="a">
                        <img src={componentImages.answer} alt="" />

                        <div className="content">
                            <p>
                                멤버십 결제는 매월 최초 가입일을 기준으로 해당 일자에 등록되어 있는 멤버수만큼 결제가 이루어집니다.
                                <br /><br />
    

                                입퇴사를 통해 우리회사의 구성원 숫자가 달라질 경우에는, <br />
                                매월 달라지는 구성원의 숫자를 최초 결제한 날짜에 체크하여 해당시점의 멤버수 만큼만 결제가 이루어집니다.
                                <br /><br />
                                

                                잔액부족, 한도초과 등의 이유로 결제가 진행되지 않는경우, 2회에 걸쳐서 추가 결제를 요청하게 됩니다.
                                <br /><br />
                                

                                만약 3번의 결제시도에도 정상적인 결제가 이루어지지 않는다면 우리회사의 리워디 계정은 휴면상태에 들어가게 됩니다.
                                <br /><br />
                                

                                휴면상태가 되면 리워디 서비스에 로그인 할 수 없으며, 멤버십 결제를 완료하시면 즉시 휴면상태가 해제됩니다.

                                <img src={componentImages.cha01} alt="" />
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </Style.FaqList>
    );
};

export default Faq;