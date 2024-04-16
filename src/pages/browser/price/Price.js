import React from 'react';
import { Link } from 'react-router-dom';

import Faq from 'components/browser/faq/Faq';

import { browserImage } from 'assets/images/imageConfig';

import * as Style from './style';

const Price = () => {
    return (
        <>
            <Style.Membership>
                <div className="wrap">
                    <h3><b>가격정책</b>(Membership)</h3>
                    <h4>구성원 한 명당 3,000원만 결제하면 모든 서비스를 이용하실 수 있습니다.</h4>
                    <p>(단, 1인당 용량 초과 시 추가요금 발생)</p>

                    <div className="price">
                        <div className="left">
                            <h5>이용요금 <span>*VAT 별도</span></h5>
                            <h6>우리 회사 구성원은 몇 명인가요?</h6>

                            <div className="numBox">
                                <button>-</button>
                                <div>10명</div>
                                <button>+</button>
                            </div>

                            <div className="box">
                                <div>
                                    <b>최초 가입비 <span>(최초 1회)</span></b>
                                    <strong>100,000원</strong>
                                </div>
                                <span>+</span>
                                <div>
                                    <b>구성원 1인당 <span>(1개월)</span></b>
                                    <strong>3,000원</strong>
                                </div>
                            </div>

                            <div className="event" style={{backgroundImage:`url(${browserImage.event})`}}>
                                <p>4월 리워디 오픈 기념 신규 가입비 면제! 구성원 요금 1인당 100원!</p>
                                <span>~2024.04.30까지</span>
                            </div>

                            <img src={browserImage.priceCha01} alt="리워디 캐릭터" />
                        </div>

                        <div className="arrow">
                            <img src={browserImage.priceArrow} alt="화살표" />
                        </div>

                        <div className="right">
                            <img src={browserImage.priceCha02} alt="리워디 캐릭터" />

                            <div className="title">
                                <h5>리워디 신규 가입 이벤트</h5>
                                <h6>최초 가입비 <b>10만원 면제!</b></h6>
                                <h6>구성원 <b>1인당 100원!</b></h6>
                            </div>

                            <div className="totalPrice">
                                <div className='top'>
                                    <p>결제금액</p>
                                    <b>130,000원</b>
                                </div>

                                <div className='center'>
                                    <div>
                                        <p>신규 가입비 면제</p>
                                        <b>-100,000원</b>
                                    </div>
                                    <div>
                                        <p>구성원 할인(10명)</p>
                                        <b>29,000원</b>
                                    </div>
                                </div>

                                <div className='bottom'>
                                    <p>최종 결제 금액 <span>()</span></p>
                                    <b>1,000원</b>
                                </div>
                            </div>

                            <p>※ 해당 이벤트는 당사 사정에 의해 조기 종료될 수 있습니다.</p>

                            <button>할인받고 가입하기</button>
                        </div>
                    </div>
                </div>
            </Style.Membership>

            <Style.RewardyFunction>
                <div className="wrap">
                    <h3>리워디 주요기능</h3>

                    <ul>
                        <li>
                            <span>📝 오늘업무</span>
                            <ol>
                                <li>- 오늘할일 작성</li>
                                <li>- 일정예약 기능</li>
                                <li>- 업무요청 기능</li>
                                <li>- 업무공유 기능</li>
                                <li>- 피드백 기능</li>
                                <li>- 파일 첨부 기능</li>
                                <li>- 비밀글 작성 기능</li>
                                <li>- 주간리포트 기능</li>
                            </ol>
                        </li>
                        <li>
                            <span>📢 LIVE</span>
                            <ol>
                                <li>- 나의 업무현황 공유</li>
                                <li>- 근태관리 기능</li>
                                <li>- 일정 공유 기능</li>
                                <li>- 업무 진행률 확인</li>
                                <li>- 역량평가 리포트</li>
                                <li>- 평가(좋아요) 기능</li>
                            </ol>
                        </li>
                        <li>
                            <span>🏆 챌린지</span>
                            <ol>
                                <li>- 회사 내 다양한 문화 형성</li>
                                <li>- 챌린지 테마 샘플 제공</li>
                                <li>- 챌린지 생성 기능</li>
                                <li>- 코인 보상 지급 기능</li>
                                <li>- 분야별 챌린지 도전</li>
                            </ol>
                        </li>
                        <li>
                            <span>🗃️ 파티</span>
                            <ol>
                                <li>- 관련 업무 진행 확인</li>
                                <li>- 오늘업무 연동 기능</li>
                                <li>- 프로젝트 관리 기능</li>
                                <li>- 코인 보상 지급 기능</li>
                                <li>- 회사 전체 업무 확인</li>
                            </ol>
                        </li>
                        <li>
                            <span>📊 인사이트</span>
                            <ol>
                                <li>- 건강한 순위 경쟁</li>
                                <li>- 구성원 역량 평가</li>
                                <li>- 개인별 순위 점검</li>
                                <li>- 일간/주간/월간 데이터</li>
                            </ol>
                        </li>
                    </ul>

                    <div className="enterprise">
                        <img src={browserImage.enterprise} alt="엔터프라이즈" />

                        <div className="content">
                            <h4>Enterprise (엔터프라이즈)</h4>
                            <p>30인 이상 기업은 할인을 제공합니다.</p>
                        </div>

                        <Link to="">가격문의</Link>
                    </div>
                </div>
            </Style.RewardyFunction>

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

export default Price;