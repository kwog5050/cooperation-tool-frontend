import React from 'react';

import { rewardyImage } from 'assets/images/imageConfig';

import * as Style from "./style";

const Like = () => {
    return (
        <Style.Container>
            <div className="box">
                <img src={rewardyImage.close2} alt="" />
                <h3>좋아요</h3>

                <div className="user">
                    <div className="profile">
                        <div className="profileImage">
                            <img src={rewardyImage.profile} alt="" />
                        </div>
                        <div className="info">
                            <h4>홍길동</h4>
                            <span>리워디</span>
                        </div>
                    </div>

                    <button><img src={rewardyImage.bars} alt="" /></button>
                </div>
            </div>
            <div className="bg on"></div>
        </Style.Container>
    );
};

export default Like;