import React from 'react';
import { Link } from 'react-router-dom';

import * as Style from './style.js';

const Footer = () => {
    return (
        <Style.Foot>
            <div className="wrap">
                <p>
                    (주)비즈폼 <span>|</span> 서울특별시 강남구 역삼로 204 (역삼동) 604호 <span>|</span> 부산광역시 해운대구 해운대해변로 257 (우동, 하버타운) 1601호 <span>|</span> 대표이사 : 이선규
                </p>

                <p>
                    사업자등록번호 : 605-81-38178 <span>|</span> 통신판매업 신고번호 : 제2015-부산해운-0582호 <span>|</span> 이메일 : rewardy@rewardy.co.kr
                </p>

                <b>Copyright (c) 2000-2022 by bizforms.co.kr All rights reserved.</b>

                <div className="nav">
                    <Link to="">이용약관</Link>
                    <Link to="">개인정보취급방침</Link>
                </div>
            </div>
        </Style.Foot>
    );
};

export default Footer;