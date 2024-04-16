import React from 'react';
import { Link } from 'react-router-dom';

import Experience from 'components/browser/experience/Experience';

import { browserImage } from 'assets/images/imageConfig';

import * as Style from './style';

const Coin = () => {
    return (
        <>
            <Style.Experience style={{backgroundColor:"#534f85"}}>
                <h3>보상</h3>
                <p>
                    적절한 보상으로 구성원의 사기를 북돋아 줍니다. <br />
                    보상을 통해 습관을 만들고, 습관이 구성원을 성장시킵니다.
                </p>
                <Link to="">무료체험</Link>

                <img src={browserImage.coinImage01} alt="코인 예시" />
            </Style.Experience>

            <Style.Container style={{backgroundColor:"#f3f6ff",paddingTop:"320px"}}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>내가 획득한 코인</h3>
                            <h4>내 코인 획득하기</h4>
                            <p>
                                챌린지에 성공하거나 업무를 빠르고 정확하게 처리했다면 <br />
                                코인으로 보상받을 수 있습니다. <br />
                                내가 획득한 코인은 즉시 현금으로 출금할 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.coinImage02} alt="코인 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>공용 코인</h3>
                            <h4>슬기롭게 보상하기</h4>
                            <p>
                                챌린지를 만들 때 회사에서 충전해 둔 코인을 걸 수 있고, <br />
                                챌린지를 성공한 모든 구성원에게 예외 없이 코인이 지급됩니다.
                            </p>
                        </div>

                        <img src={browserImage.coinImage03} alt="코인 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container style={{backgroundColor:"#f9fafb"}}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>보상하기</h3>
                            <h4>도와준 동료에게 보답하기</h4>
                            <p>
                                보상하기를 통해 다른 팀원에게 보상 코인을 지급할 수 있습니다. <br />
                                업무를 잘 도와줬다면 그냥 지나치지 말고 감사의 마음을 전하세요.
                            </p>
                        </div>

                        <img src={browserImage.coinImage04} alt="코인 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>충전하기</h3>
                            <h4>폼 나게 격려하기</h4>
                            <p>
                                회사가 충전하기를 통해 코인을 충전하고, <br />
                                구성원들은 챌린지 생성, 업무 요청을 통해 코인을 소비합니다.
                            </p>
                        </div>

                        <img src={browserImage.coinImage05} alt="코인 예시" />
                    </div>
                </div>
            </Style.Container>

            <Experience></Experience>
        </>
    );
};

export default Coin;