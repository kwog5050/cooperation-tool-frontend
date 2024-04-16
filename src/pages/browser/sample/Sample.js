import React from 'react';
import { Link } from 'react-router-dom';

import { browserImage } from 'assets/images/imageConfig';

import * as Style from "./style";

const Sample = () => {
    return (
        <>
            <Style.Banner style={{backgroundImage:`url(${browserImage.sampleBanner})`}}>
                <h3>리워디로 우리회사의 문화가 달라집니다.</h3>
                <p>
                    리워디를 통해서 회사가 얼마나 더 좋아질 수 있는지 <br />
                    아래의 활용사례들을 통해서 알아보세요~
                </p>
            </Style.Banner>

            <Style.TapMenu>
                <div className="wrap">
                    <ul>
                        <li className='on'>전체</li>
                        <li>업무</li>
                        <li>교육</li>
                        <li>생활/문화</li>
                        <li>건강</li>
                        <li>행사</li>
                    </ul>
                </div>
            </Style.TapMenu>

            <Style.List>
                <div className="wrap">
                    <div className="top">
                        <h4>총 <b>11</b>건</h4>

                        <div className="search">
                            <input type="text" placeholder='검색'/>
                            <img src={browserImage.search} alt="" />
                        </div>
                    </div>

                    <ul>
                        <li>
                            <Link to="" style={{backgroundColor:"#363660"}}>
                                <h5>
                                    성장하는 기업의 <br />
                                    필수 요소
                                </h5>

                                <span>건강</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" style={{backgroundColor:"#773cc8"}}>
                                <h5>
                                    리워디로 <br />
                                    회사 임직원들의 <br />
                                    건강을 챙기는 방법
                                </h5>

                                <span>생활/문화</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" style={{backgroundColor:"#3482ed"}}>
                                <h5>
                                    지각 안하는 <br />
                                    회사 만들기 위한 <br />
                                    즐거운 캠페인
                                </h5>

                                <span>건강</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" style={{backgroundColor:"#ed8734"}}>
                                <h5>
                                    여기저기 <br />
                                    뒤섞인 문서 찾는 <br />
                                    직장인 주목
                                </h5>

                                <span>업무</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" style={{backgroundColor:"#face00"}}>
                                <h5>
                                    일할 맛 나는 <br />
                                    회사 만드는 방법
                                </h5>

                                <span>업무</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" style={{backgroundColor:"#3cc8ac"}}>
                                <h5>
                                    개인 사생활 없는 <br />
                                    단톡방은 <br />
                                    이제 그만!
                                </h5>

                                <span>업무</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" style={{backgroundColor:"#8c8965"}}>
                                <h5>
                                    알아두면 쓸모있고 <br />
                                    상관있는 회사 이야기! <br />
                                    알.쏠.상.회
                                </h5>

                                <span>업무</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" style={{backgroundColor:"#5dcbe2"}}>
                                <h5>
                                    부서 간 장벽 없애는 <br />
                                    간단한 방법
                                </h5>

                                <span>업무</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" style={{backgroundColor:"#3c3cc8"}}>
                                <h5>
                                    한눈에 업무 상황을 <br />
                                    파악할 수 있는 <br />
                                    회사가 있다?!
                                </h5>

                                <span>업무</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" style={{backgroundColor:"#4e5e95"}}>
                                <h5>
                                    이것으로 바꾸는 <br />
                                    회사 분위기
                                </h5>

                                <span>생활/문화</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="" style={{backgroundColor:"#38863c"}}>
                                <h5>
                                    쉽게 해결하는 <br />
                                    신입 온보딩
                                </h5>

                                <span>교육</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Style.List>
        </>
    );
};

export default Sample;