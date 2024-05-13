import React from 'react';
import { Link } from 'react-router-dom';

import Experience from 'components/browser/experience/Experience';

import { browserImage } from 'assets/images/imageConfig';

import * as Style from './style';

const Todaywork = () => {
    return (
        <>
            <Style.Experience style={{ backgroundColor: "#39c9d2" }}>
                <h3>오늘업무를 알아야 일의 순서가 보입니다.</h3>
                <p>
                    오늘 할 일을 기록하고 공유하세요. <br />
                    업무 진행이 물 흐르듯 매끄러워집니다.
                </p>
                <Link to="">무료체험</Link>

                <img src={browserImage.todayworkImage01} alt="오늘업무 예시" />
            </Style.Experience>

            <Style.Container style={{ paddingTop: "320px" }}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>오늘업무</h3>
                            <h4>효율적으로 관리하기</h4>
                            <p>
                                오늘할일을 작성하고, 우선순위를 설정할 수 있으며 <br />
                                시간, 날짜 등을 변경해 효율적으로 관리할 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.todayworkImage02} alt="오늘업무 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container style={{ backgroundColor: "#f9fafb" }}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>일정예약</h3>
                            <h4>한눈에 확인하기</h4>
                            <p>
                                연차, 반차, 외출, 조퇴, 출장, 교육, 미팅, 회의 <br />
                                일정을 기록하면 팀원들과 공유할 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.todayworkImage03} alt="오늘업무 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>업무요청</h3>
                            <h4>투명하게 전달하기</h4>
                            <p>
                                상대를 지정해 업무를 요청할 수 있으며 <br />
                                업무요청 시 상대방의 업무에 자동 등록됩니다.
                            </p>
                        </div>

                        <img src={browserImage.todayworkImage04} alt="오늘업무 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container style={{ backgroundColor: "#f9fafb" }}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>일일/주간/월간 업무</h3>
                            <h4>체계적으로 관리하기</h4>
                            <p>
                                일일, 주간, 월간 단위로 업무를 확인할 수 있으며 <br />
                                업무별 완료율을 점검할 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.todayworkImage05} alt="오늘업무 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>공유하기</h3>
                            <h4>빠르게 공유하기</h4>
                            <p>
                                작성한 업무를 바로 공유할 수 있으며 <br />
                                구성원들로부터 피드백을 받을 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.todayworkImage06} alt="오늘업무 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container style={{ backgroundColor: "#f9fafb" }}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>한줄 소감</h3>
                            <h4>한줄 소감 작성하기</h4>
                            <p>
                                하루 업무에 대한 한줄 소감을 남길 수 있고 <br />
                                매일 어떤 컨디션으로 근무했는지 점검할 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.todayworkImage07} alt="오늘업무 예시" />
                    </div>
                </div>
            </Style.Container>

            <Experience></Experience>
        </>
    );
};

export default Todaywork;