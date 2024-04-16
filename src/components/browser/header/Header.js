import React from 'react';
import { Link } from 'react-router-dom';

import { browserImage } from 'assets/images/imageConfig.js';

import * as Style from './style.js';

const Header = () => {
    return (
        <Style.Head>
            <div className="wrap">
                <Style.FlexBox>
                    <Style.H1>
                        <Link to={"/"}>
                            <img src={browserImage.logo} alt="리워디 로고" />
                        </Link>
                    </Style.H1>

                    <Style.Ul>
                        <li>
                            <Link to={"/todaywork"}>
                                서비스소개
                                <img src={browserImage.arrow} alt="메뉴 화살표" />
                            </Link>

                            <ol>
                                <li><Link to={"/todaywork"}>오늘업무</Link></li>
                                <li><Link to={"/live"}>LIVE</Link></li>
                                <li><Link to={"/coin"}>보상</Link></li>
                                <li><Link to={"/challenge"}>챌린지</Link></li>
                                <li><Link to={"/party"}>파티</Link></li>
                                <li><Link to={"/insight"}>인사이트</Link></li>
                            </ol>
                        </li>
                        <li>
                            <Link to={"/price"}>가격안내</Link>
                        </li>
                        <li>
                            <Link to={"/question/1"}>
                                고객지원
                                <img src={browserImage.arrow} alt="메뉴 화살표" />
                            </Link>

                            <ol>
                                <li><Link to={"/question/1"}>자주묻는질문</Link></li>
                                <li><Link to={"/menual/start/1"}>사용자 메뉴얼</Link></li>
                                <li><Link to={"/notice/1"}>공지사항</Link></li>
                                <li><Link to={"/customer"}>고객센터</Link></li>
                            </ol>
                        </li>
                        <li>
                            <Link to={"/sample"}>
                                활용사례
                            </Link>
                        </li>
                        <li>
                            <Link>
                                무료체험
                                <img src={browserImage.rewardyCharacter} alt="리워디 캐릭터" />
                            </Link>
                        </li>
                    </Style.Ul>

                    <Style.buttons>
                        <button>가입하기</button>
                        <button>접속하기</button>
                    </Style.buttons>
                </Style.FlexBox>
            </div>
        </Style.Head>
    );
};

export default Header;