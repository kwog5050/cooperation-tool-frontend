import React from 'react';

import * as Style from './style';

const ModifyPasswordPopup = ({ setIsModifyPasswordPopup }) => {
    return (
        <Style.Container>
            <div className="box">
                <h3>비밀번호 재설정</h3>
                <p>
                    비밀번호를 변경할 수 있습니다. <br />
                    현재 사용중인 비밀번호를 입력해주세요.
                </p>
                <input type="text" placeholder='현재 사용중인 비밀번호' />
                <div className="submit">
                    <button>확인</button>
                </div>
            </div>
            <div onClick={() => { setIsModifyPasswordPopup(false) }} className="bg on"></div>
        </Style.Container>
    );
};

export default ModifyPasswordPopup;