import React from 'react';

import { browserImage } from 'assets/images/imageConfig';

import * as Style from "./style";

const SampleBanner = () => {
    return (
        <Style.Banner style={{ backgroundImage: `url(${browserImage.sampleBanner})` }}>
            <h3>리워디로 우리회사의 문화가 달라집니다.</h3>
            <p>
                리워디를 통해서 회사가 얼마나 더 좋아질 수 있는지 <br />
                아래의 활용사례들을 통해서 알아보세요~
            </p>
        </Style.Banner>
    );
};

export default SampleBanner;