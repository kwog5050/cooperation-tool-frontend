import React from 'react';

import * as Style from "./style";
import { cooperationImage } from 'assets/images/imageConfig';

const ProfilePopup = ({ setIsProfilePopup }) => {
    return (
        <Style.Container>
            <div className="box">
                <h3>프로필</h3>
                <div className="profileImage">
                    <div className="imageBox">
                        <img src={cooperationImage.profile} alt="" />
                        <button>
                            <img src={cooperationImage.setting} alt="" />
                        </button>
                    </div>
                </div>

                <div className="input">
                    <input type="text" maxLength={28} placeholder='상태 메시지를 입력해 주세요.' />
                    <p><span>0</span>자 / 28자</p>
                </div>

                <div className="submit">
                    <button>확인</button>
                </div>
            </div>
            <div onClick={() => { setIsProfilePopup(false) }} className="bg on"></div>
        </Style.Container>
    );
};

export default ProfilePopup;