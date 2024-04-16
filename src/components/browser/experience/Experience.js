import React from 'react';
import { Link } from 'react-router-dom';

import { browserImage } from 'assets/images/imageConfig.js';

import * as Style from './style.js';

const Experience = () => {
    return (
        <Style.Experience style={{ backgroundImage: `url(${browserImage.experience})` }}>
            <h3>
                역량 개발은 개인의 몫이 아닙니다. <br />
                구성원이 성장하면 회사도 성장합니다.
            </h3>
            <p>보상을 통한 역량 개발 플랫폼, 리워디와 함께 성장하세요.</p>
            <Link to="">무료 체험</Link>
        </Style.Experience>
    );
};

export default Experience;