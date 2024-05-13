import React from 'react';
import { Link } from 'react-router-dom';

import Experience from 'components/browser/experience/Experience';

import { browserImage } from 'assets/images/imageConfig';

import * as Style from './style';

const Live = () => {
    return (
        <>
            <Style.Experience style={{ backgroundColor: "#43cfb3" }}>
                <h3>회사 전체 업무, 일정이 한눈에 보입니다.</h3>
                <p>
                    팀원별 오늘할일, 완료한 챌린지, 일정을 확인하세요. <br />
                    회사가 잘 돌아가고 있는지 한눈에 볼 수 있습니다.
                </p>
                <Link to="">무료체험</Link>

                <img src={browserImage.liveImage01} alt="라이브 예시" />
            </Style.Experience>

            <Style.Container style={{ backgroundColor: "#fffbf3", paddingTop: "320px" }}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>나의 업무현황</h3>
                            <h4>나의 상태 공유하기</h4>
                            <p>
                                급하게 회의가 있을 때는 회의 모드, <br />
                                일찍 퇴근한다면 퇴근을 알려주세요. <br />
                                서로의 시간을 알차게 쓸 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.liveImage02} alt="라이브 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>일정있음</h3>
                            <h4>업무 일정 공유하기</h4>
                            <p>
                                연차, 반차, 외출, 조퇴, 출장, 교육, 미팅, 회의 <br />
                                일정을 기록하면 팀원들과 공유할 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.liveImage03} alt="라이브 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container style={{ backgroundColor: "#f9fafb" }}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>오늘업무, 챌린지</h3>
                            <h4>업무 진행율 확인하기</h4>
                            <p>
                                팀원의 오늘업무와 완료한 챌린지를 볼 수 있어 <br />
                                연관된 업무의 진행 상황을 쉽게 알 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.liveImage04} alt="라이브 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>역량평가 리포트</h3>
                            <h4>개인역량 개발하기</h4>
                            <p>
                                오늘업무, 챌린지, 좋아요 등을 전반적으로 평가해 <br />
                                실시간으로 개인의 역량평가 리포트를 작성합니다.
                            </p>
                        </div>

                        <img src={browserImage.liveImage05} alt="라이브 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container style={{ backgroundColor: "#f9fafb" }}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>좋아요</h3>
                            <h4>성과를 응원하기</h4>
                            <p>
                                성과, 응원, 지식, 칭찬, 열정, 감사할 일을 보여주고 <br />
                                근태가 소홀할 때 페널티 카드가 발동해 문제를 개선합니다.
                            </p>
                        </div>

                        <img src={browserImage.liveImage06} alt="라이브 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>좋아요</h3>
                            <h4>성과를 바로 응원하기</h4>
                            <p>
                                성과, 응원, 지식, 칭찬, 열정, 감사할 일을 보여주고 <br />
                                바로 좋아요를 보내서 구성원을 응원합니다.
                            </p>
                        </div>

                        <img src={browserImage.liveImage07} alt="라이브 예시" />
                    </div>
                </div>
            </Style.Container>

            <Experience></Experience>
        </>
    );
};

export default Live;