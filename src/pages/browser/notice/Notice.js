import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import * as Style from "./style";
import Paging from 'components/browser/paging/Paging';

const Notice = () => {
    const { boardIndex } = useParams();

    return (
        <Style.Container>
            <div className="wrap">
                <h3>공지사항</h3>

                <div className="title">
                    <h4>번호</h4>
                    <h4>제목</h4>
                    <h4>등록일</h4>
                </div>

                <ul>
                    <li>
                        <Link>
                            <div className="index">1</div>
                            <p>오픈기념 가입비 면제 + 100원 이벤트</p>
                            <div className="date">2024-02-16</div>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <div className="index">1</div>
                            <p>오픈기념 가입비 면제 + 100원 이벤트</p>
                            <div className="date">2024-02-16</div>
                        </Link>
                    </li>
                </ul>

                {/* <Paging></Paging> */}
            </div>
        </Style.Container>
    );
};

export default Notice;