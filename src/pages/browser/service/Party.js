import React from 'react';
import { Link } from 'react-router-dom';

import Experience from 'components/browser/experience/Experience';

import { browserImage } from 'assets/images/imageConfig';

import * as Style from './style';

const Party = () => {
    return (
        <>
            <Style.Experience style={{backgroundColor:"#ff9f2d"}}>
                <h3>프로젝트 성공을 위한 첫 걸음</h3>
                <p>
                    함께 프로젝트 하는 구성원과 파티를 만들고 프로젝트 진행 상황을 확인해 보세요. <br />
                    프로젝트와 연관된 업무를 한데 모으고, 쉽게 공유할 수 있습니다.
                </p>
                <Link to="">무료체험</Link>

                <img src={browserImage.partyImage01} alt="파티 예시" />
            </Style.Experience>

            <Style.Container style={{backgroundColor:"#fdfaf5",paddingTop:"320px"}}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>원활/보통/지연된 파티</h3>
                            <h4>파티 흐름 파악하기</h4>
                            <p>
                                관련 업무를 파악해 원활, 보통, 지연으로 나누어 보여주므로 <br />
                                프로젝트 흐름을 쉽게 파악할 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.partyImage02} alt="파티 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>파티 만들기</h3>
                            <h4>파티 만들기</h4>
                            <p>
                                파티 참여자, 파티명을 등록한 뒤 바로 파티를 생성할 수 있고 <br />
                                파티에 업무를 연결할 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.partyImage03} alt="파티 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container style={{backgroundColor:"#f9fafb"}}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>파티 등록</h3>
                            <h4>등록파티 확인하기</h4>
                            <p>
                                파티 시작일, 파티명, 파티원, 관련 업무 등을 한눈에 확인할 수 있고 <br />
                                즐겨찾기 기능을 이용해 관심 파티를 상단에 배치할 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.partyImage04} alt="파티 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>코인 보내기</h3>
                            <h4>코인으로 파티 응원하기</h4>
                            <p>
                                파티 전체에 코인을 보낼 수 있으며 <br />
                                파티가 종료된 후 파티원들에게 공평하게 분배됩니다.
                            </p>
                        </div>

                        <img src={browserImage.partyImage05} alt="파티 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container style={{backgroundColor:"#f9fafb"}}>
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

                        <img src={browserImage.partyImage06} alt="파티 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>업무 연결</h3>
                            <h4>오늘업무 연결하기</h4>
                            <p>
                                오늘업무 작성 후 파티 연결 아이콘을 클릭해 파티를 연결할 수 있고 <br />
                                파티와 관련한 업무는 한곳에서 관리할 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.partyImage07} alt="파티 예시" />
                    </div>
                </div>
            </Style.Container>

            <Experience></Experience>
        </>
    );
};

export default Party;