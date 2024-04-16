import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { browserImage } from 'assets/images/imageConfig';

import * as Style from "./style";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <Style.NotFound>
            <img src={browserImage.logo} alt="" />
            <h1>요청한 페이지를 찾을 수 없습니다.</h1>
            <p>
                페이지 주소가 잘못 입력되었거나 <br />
                페이지 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
            </p>
            <p>
                입력하신 주소를 다시 한번 확인해 주시기 바랍니다. <br />
                관련 문의사항은 <Link to="/customer">리워디 고객센터</Link>로 문의해 주시면 친절히 안내해 드리겠습니다.
            </p>
            <div className="buttons">
                <Link to="/">홈으로</Link>
                <button onClick={()=>{navigate(-1)}}>이전 페이지</button>
            </div>
            <span>Copyright ⓒ bizforms. All Rights Reserved.</span>
        </Style.NotFound>
    );
};

export default NotFound;