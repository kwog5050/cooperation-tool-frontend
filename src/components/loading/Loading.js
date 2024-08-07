import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { componentImages } from 'assets/images/imageConfig';

import * as Style from "./style";

const Loading = () => {
    return (
        <Style.Loading>
            <div>
                <img src={componentImages.loading01} alt="로딩1" />
                <p>LODAING</p>
            </div>
        </Style.Loading>
    );
};

export default Loading;