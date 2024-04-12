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
                            <img src={browserImage.logo} alt="" />
                        </Link>
                    </Style.H1>

                    <Style.Ul>
                        <li>
                            <Link>
                                서비스소개
                                <img src={browserImage.arrow} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link>가격안내</Link>
                        </li>
                        <li>
                            <Link>
                                고객지원
                                <img src={browserImage.arrow} alt="" />
                            </Link>
                        </li>
                        <li>
                            <Link>
                                활용사례
                            </Link>
                        </li>
                        <li>
                            <Link>
                                무료체험
                                <img src={browserImage.rewardyCharacter} alt="" />
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