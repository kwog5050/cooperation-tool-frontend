import React from 'react';
import { Link } from 'react-router-dom';

import Experience from 'components/browser/experience/Experience';

import { browserImage } from 'assets/images/imageConfig';

import * as Style from './style';

const Insight = () => {
    return (
        <>
            <Style.Experience style={{backgroundColor:"#fc6464"}}>
                <h3>순위 공개로 건강한 경쟁을 가능하게 합니다.</h3>
                <p>
                    역량, 좋아요, 코인 등 리워디 서비스를 통해 획득한 점수를 공유할 수 있습니다. <br />
                    회사를 성장시키고, 다 같이 성장하는 분위기를 만들어 줍니다.
                </p>
                <Link to="">무료체험</Link>

                <img src={browserImage.insightImage01} alt="인사이트 예시" />
            </Style.Experience>

            <Style.Container style={{backgroundColor:"#fff8f8",paddingTop:"320px"}}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>인사이트</h3>
                            <h4>성과 확인하기</h4>
                            <p>
                                각 구성원의 역량 및 적극성을 파악한 뒤 <br />
                                수치화해서 보여줍니다.
                            </p>
                        </div>

                        <img src={browserImage.insightImage02} alt="인사이트 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>순위 보기</h3>
                            <h4>개인별 순위 보기</h4>
                            <p>
                                성과 좋은 구성원을 뽑아 보여줌으로써 <br />
                                구성원의 사기를 북돋아 줍니다.
                            </p>
                        </div>

                        <img src={browserImage.insightImage03} alt="인사이트 예시" />
                    </div>
                </div>
            </Style.Container>

            <Style.Container style={{backgroundColor:"#f9fafb"}}>
                <div className="wrap">
                    <div className="flex">
                        <div className="content">
                            <h3>월간 데이터</h3>
                            <h4>월간 데이터 파악하기</h4>
                            <p>
                                월간 단위로 데이터를 집계해 보여줌으로써 <br />
                                해당 기간에 활약한 구성원을 파악할 수 있습니다.
                            </p>
                        </div>

                        <img src={browserImage.insightImage04} alt="인사이트 예시" />
                    </div>
                </div>
            </Style.Container>

            <Experience></Experience>
        </>
    );
};

export default Insight;