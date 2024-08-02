import React, { useState } from 'react';

import userApi from 'apis/userApi';

import * as Style from './style';

const ModifyPasswordPopup = ({ setIsModifyPasswordPopup }) => {
    const [newPassword, setNewPassword] = useState("");

    const modifyPassword = async () => {
        const api = await userApi.modifyPassword({
            email: sessionStorage.getItem("email"),
            newPassword: newPassword
        })

        if (api.result === "success") {
            alert("비밀번호 변경 완료");
            setIsModifyPasswordPopup(false);
        } else {
            alert("ERROR" + api.msg);
        }
    }

    const onChange = (e) => {
        const value = e.target.value;
        setNewPassword(value);
    }
    return (
        <Style.Container>
            <div className="box">
                <h3>비밀번호 재설정</h3>
                <p>
                    비밀번호를 변경할 수 있습니다. <br />
                    현재 사용중인 비밀번호를 입력해주세요.
                </p>
                <input type="text" placeholder='현재 사용중인 비밀번호' name='password' onChange={onChange} />
                <div className="submit">
                    <button onClick={modifyPassword}>확인</button>
                </div>
            </div>
            <div onClick={() => { setIsModifyPasswordPopup(false) }} className="bg on"></div>
        </Style.Container>
    );
};

export default ModifyPasswordPopup;