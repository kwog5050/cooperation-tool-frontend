import React from 'react';

import Experience from 'components/browser/experience/Experience.js';

import { browserImage } from 'assets/images/imageConfig.js';

import * as Style from './style.js';

const Main = () => {
    return (
        <>
            <Style.Banner style={{ backgroundImage: `url(${browserImage.banner})` }}>
                <div className="wrap">
                    <div className="content">
                        <h2>
                            일 좀 하는 회사의 <br />
                            스마트한 보상플랫폼!
                        </h2>

                        <p>
                            한눈에 보이는 회사현황, <br />
                            적극적으로 일하는 구성원, <br />
                            즉시 적립되는 합리적인 보상, <br />
                            매일 성장하는 우리회사
                        </p>

                        <div className="buttons">
                            <button>무료 체험</button>
                            <button>접속하기</button>
                        </div>
                    </div>
                </div>
            </Style.Banner>

            <Style.Intro>
                <div className="wrap">
                    <div className='flex'>
                        <h2>Reward;</h2>
                        <p>
                            적극적인 인재가 회사를 이끌어 간다는 사실은 누구나 잘 알지만, <br />
                            어떻게 적극적인 인재를 만들 것인가가 늘 과제였습니다. <br />
                            면담을 해봐도, 성과금을 걸어도 늘 제자리였다면 리워디가 필요한 때입니다. <br />
                            구성원 스스로 업무를 관리하고, 챌린지에 도전하며 역량을 개발합니다. <br />
                            회사는 단지 작은 보상만 지급하면 됩니다.
                        </p>
                    </div>
                </div>
            </Style.Intro>

            <Style.Todaywork>
                <div className="wrap">
                    <h3>오늘업무</h3>
                    <h4>스스로, 적극적으로 일하는 구성원</h4>
                    <p>
                        오늘 하루, 내가 해야 할 일만 잘 관리하면 <br />
                        똑똑한 리워디가 알아서 나의 일과 <br />
                        우리 동료의 일을 자연스럽게 연결해줍니다.
                    </p>
                    <img src={browserImage.todaywork} alt="오늘업무" />
                </div>
            </Style.Todaywork>

            <Style.Live>
                <div className="wrap">
                    <div className="flex">
                        <img src={browserImage.live} alt="실시간업무" />

                        <div className="content">
                            <h3>LIVE</h3>
                            <h4>한눈에 보이는 회사현황</h4>
                            <p>
                                일이 보여지면 일이 더 잘되는거 아세요? <br />
                                리워디를 사용하면 구성원들의 <br />
                                근무상황과 업무현황을 한눈에 볼 수 있답니다.
                            </p>
                        </div>
                    </div>
                </div>
            </Style.Live>

            <Style.RightImageContainer>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>AI 추천</h3>
                            <h4>
                                AI가 추천하는 <br />
                                일 잘하는 동료!
                            </h4>
                            <p>
                                출근을 1등으로 한 동료, 보고를 열심히 하는 동료, <br />
                                피드백을 잘 해주는 동료, 파티를 활발히 진행하고 있는 동료 등 <br />
                                일 잘하는 동료들에게 응원할 수 있습니다. <br />
                                응원의 메시지를 전달하면 동료들의 사기를 높이고, <br />
                                업무에 대한 열정을 더욱 높일 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.ai} alt="ai 추천" />
                    </div>
                </div>
            </Style.RightImageContainer>

            <Style.Timeline>
                <div className="wrap">
                    <div className="flex">
                        <img src={browserImage.timeline} alt="타임라인" />

                        <div className="content">
                            <h3>타임라인</h3>
                            <h4>
                                나의 하루 일과를 <br />
                                투명하게 보여줍니다.
                            </h4>
                            <p>
                                출근부터 퇴근까지의 모든 일정을 타임라인에 표시합니다. <br />
                                오늘업무, 메모작성, 업무요청, 공유, 챌린지 완료, 좋아요 등 <br />
                                하루 동안 일어나는 모든 이슈를 기록하고 공유할 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </Style.Timeline>

            <Style.RightImageContainer>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>인사이트</h3>
                            <h4>
                                똑똑하게 나의 상태를 <br />
                                진단합니다.
                            </h4>
                            <p>
                                이번주 어떤 일에 가장 많은 시간을 투자했는지, <br />
                                나의 근무상태는 어떻게 달라졌는지, <br />
                                내가 개선해야 할 사항은 어떤 것들이 있는지, <br />
                                통계를 바탕으로 나의 업무역량 수준을 진단해 볼 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.insight} alt="인사이트" />
                    </div>
                </div>
            </Style.RightImageContainer>

            <Style.LeftImageContainer>
                <div className="wrap">
                    <div className="flex">
                        <img src={browserImage.challenge} alt="챌린지" />

                        <div className="content">
                            <h3>챌린지</h3>
                            <h4>
                                스스로 도전하는 <br />
                                문화를 만듭니다.
                            </h4>
                            <p>
                                신입사원 교육, 직무 교육, 법정의무교육을 신경 쓸 필요 없습니다. <br />
                                리워디에서는 챌린지를 통해 쉽게 관리할 수 있습니다. <br />
                                담당 인력이 없어도 구성원 스스로 교육을 완료하는 마법 같은 일 <br />
                                리워디 챌린지를 통해 가능합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </Style.LeftImageContainer>

            <Style.RightImageContainer>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>실시간 업무</h3>
                            <h4>
                                업무를 공유하고 <br />
                                적극적으로 협업합니다.
                            </h4>
                            <p>
                                전체 구성원의 업무를 실시간으로 확인할 수 있습니다. <br />
                                나의 업무와 관련된 구성원이 현재 하는 일을 확인하고 바로 피드백해 보세요. <br />
                                업무를 실시간 확인하고, 리스크를 최소화할 수 있습니다. <br />
                                투명하게 관리하고 적극적으로 공유하는 것의 협업의 시작입니다.
                            </p>
                        </div>

                        <img src={browserImage.livework} alt="실시간업무" />
                    </div>
                </div>
            </Style.RightImageContainer>

            <Style.LeftImageContainer>
                <div className="wrap">
                    <div className="flex">
                        <img src={browserImage.party} alt="파티" />

                        <div className="content">
                            <h3>파티</h3>
                            <h4>
                                팀원과 파티를 만들고 <br />
                                업무를 한데 모을 수 있습니다.
                            </h4>
                            <p>
                                함께 프로젝트 하는 구성원과 파티를 만들고 프로젝트 진행 상황을 확인해 보세요. <br />
                                프로젝트와 연관된 업무를 한데 모으고, 쉽게 공유할 수 있습니다. <br />
                                각 파티에는 보상을 지급할 수 있으며, 파티 종료 시 구성원에게 보상이 돌아갑니다. <br />
                                프로젝트 성공을 위한 첫걸음, 파티를 만들어 보세요.
                            </p>
                        </div>
                    </div>
                </div>
            </Style.LeftImageContainer>

            <Style.RightImageContainer>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>인사이트</h3>
                            <h4>
                                역량, 좋아요, 코인 순위를 공개해 <br />
                                건강한 경쟁을 가능하게 합니다.
                            </h4>
                            <p>
                                역량, 좋아요, 코인 등 리워디 서비스를 통해 획득한 점수를 공유할 수 있습니다. <br />
                                높은 점수를 획득한 구성원에게는 응원을 <br />
                                낮은 점수를 획득한 구성원에게는 격려를 <br />
                                건강한 경쟁은 회사를 성장시키고, 다 같이 성장하는 분위기를 만들어 줍니다.
                            </p>
                        </div>

                        <img src={browserImage.livework} alt="인사이트" />
                    </div>
                </div>
            </Style.RightImageContainer>

            <Style.UserUi>
                <div className="wrap">
                    <h3>사용자 친화적 UI</h3>
                    <p>
                        PC, 태블릿, 모바일에 완벽하게 호환됩니다. <br />
                        비주얼한 디자인, 역동적인 UI로 재미를 더합니다.
                    </p>

                    <div className="img">
                        <img className='base' src={browserImage.bgPc} alt="배경피시" />

                        <div>
                            <img src={browserImage.imgPc} alt="피시" />
                            <img src={browserImage.bgTb} alt="배경태블릿" />
                            <img src={browserImage.imgTb} alt="태블릿" />
                            <img src={browserImage.bgMobile} alt="배경모바일" />
                            <img src={browserImage.imgMobile} alt="모바일" />
                        </div>
                    </div>
                </div>
            </Style.UserUi>

            <Experience></Experience>
        </>
    );
};

export default Main;