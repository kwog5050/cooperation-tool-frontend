import React from 'react';

import { browserImage } from 'assets/images/imageConfig.js';

import * as Style from './style.js';

const Main = () => {
    return (
        <>
            <Style.Banner style={{backgroundImage : `url(${browserImage.banner})`}}>
                <div className="wrap">
                    <div className="content">
                        <h2>
                            일 좀 하는 회사의 <br />
                            스마트한 보상플랫폼!
                        </h2>

                        <p>
                            한눈에 보이는 회사현황, <br />
                            적극적으로 일하는 구성원, <br />
                            즉시 적립되는 합리적인 보상, <br />
                            매일 성장하는 우리회사
                        </p>

                        <button>무료 체험</button>
                    </div>
                </div>
            </Style.Banner>
        </>
    );
};

export default Main;