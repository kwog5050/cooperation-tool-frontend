import React from 'react';

import MenualSide from 'components/browser/menualSide/MenualSide';

import { componentImages } from 'assets/images/imageConfig';

import * as Style from "./style";

const Start = () => {
    return (
        <Style.Container>
            <div className="wrap">
                <MenualSide list={[{ text: "리워디가 처음이라면?", url: "/menual/start/1", index: 1 }]}></MenualSide>
                <div className="grid">
                    <div></div>

                    <div className="content">
                        <div className="title">
                            <h5>처음 > 리워디가 처음이라면?</h5>
                            <h3>리워디가 처음이라면?</h3>
                        </div>

                        <div className="text">
                            <div>
                                <h3>STEP 1. 멤버십 가입하기</h3>
                                <p>- 1) 가입하기 : 우리회사의 기본정보 입력 후 다음단계로 넘어갑니다.</p>
                                <p>- 2) 멤버십 결제하기 : 구성원수에 따른 멤버십 비용을 결제합니다.</p>
                                <p>=> 멤버십 결제와 동시에 서비스 가입이 완료되면 자동으로 서비스 주소가 메일로 발송됩니다.</p>
                            </div>

                            <div>
                                <h3>STEP 2. 관리자 로그인</h3>
                                <p>- 멤버십 가입 시 입력한 이메일 주소로 리워디 플랫폼 접속링크가 보내집니다.</p>
                                <p>- 링크를 통해 로그인 합니다.</p>
                            </div>

                            <div>
                                <h3>STEP 3. 환경설정</h3>
                                <p>- 우리회사로고, 출퇴근시간 등을 설정합니다.</p>
                                <p>- 우리 회사에서 구성원들이 사용할 공용코인을 충전합니다.</p>
                            </div>

                            <div>
                                <h3>STEP 4. 구성원(멤버) 초대하기</h3>
                                <p>- 구성원들에게 초대메일을 발송하여 서비스를 시작합니다.</p>
                            </div>

                            <img src={componentImages.menualCha01} alt="캐릭터" />
                        </div>
                    </div>
                </div>
            </div>
        </Style.Container>
    );
};

export default Start;