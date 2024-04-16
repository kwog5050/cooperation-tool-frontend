import React from 'react';
import { Link } from 'react-router-dom';

import Experience from 'components/browser/experience/Experience';

import { browserImage } from 'assets/images/imageConfig';

import * as Style from './style';

const Challenge = () => {
    return (
        <>
            <Style.Experience style={{backgroundColor:"#367ec9"}}>
                <h3>챌린지에 도전하면 팀원이 성장합니다.</h3>
                <p>
                    직무, 자기계발, 문화, 신입사원 챌린지에 도전하세요. <br />
                    개인 역량도 UP, 사내 분위기도 UP 됩니다.
                </p>
                <Link to="">무료체험</Link>

                <img src={browserImage.challengeImage01} alt="챌린지 예시" />
            </Style.Experience>

            <Style.Container style={{backgroundColor:"#e2f0ff",paddingTop:"320px"}}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>챌린지 테마</h3>
                            <h4>챌린지 샘플 활용하기</h4>
                            <p>
                                회사에 꼭 필요한 베이직 챌린지 샘플이 준비되어 있습니다. <br />
                                미리 작성해둔 샘플을 활용하면 시간이 줄고, 효율은 올라갑니다.
                            </p>
                        </div>

                        <img src={browserImage.challengeImage02} alt="챌린지 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>내가 만든 챌린지</h3>
                            <h4>챌린지 관리하기</h4>
                            <p>
                                매번 새로운 챌린지를 생성하지 않으셔도 됩니다. <br />
                                한번 만들어둔 챌린지는 다시 활용할 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.challengeImage03} alt="챌린지 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container style={{backgroundColor:"#f9fafb"}}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>획득 가능한 코인</h3>
                            <h4>코인으로 보상받기</h4>
                            <p>
                                챌린지에 도전해 완료할 경우 코인이 지급됩니다. <br />
                                최대한 많은 챌린지에 도전해 코인을 획득해 보세요.
                            </p>
                        </div>

                        <img src={browserImage.challengeImage04} alt="챌린지 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>분야별 챌린지</h3>
                            <h4>챌린지 도전하기</h4>
                            <p>
                                직무, 자기계발, 문화, 신입사원, 공용 챌린지에 도전하면 <br />
                                직무 능력 UP, 분위기 UP, 코인 UP
                            </p>
                        </div>

                        <img src={browserImage.challengeImage05} alt="챌린지 예시" />
                    </div>
                </div>
            </Style.Container>

            <Experience></Experience>
        </>
    );
};

export default Challenge;