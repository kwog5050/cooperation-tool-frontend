import React from 'react';

import Faq from 'components/browser/faq/Faq';
import Paging from 'components/browser/paging/Paging';

import { browserImage } from 'assets/images/imageConfig';

import * as Style from "./style";

const Question = () => {
    return (
        <Style.Container>
            <div className="wrap">
                <div className="title">
                    <h3>자주 묻는 질문</h3>

                    <div className="search">
                        <input type="text" placeholder='질문을 입력하세요.'/>
                        <button><img src={browserImage.search} alt="" /></button>
                    </div>
                </div>

                <Faq></Faq>

                <Paging></Paging>
            </div>
        </Style.Container>
    );
};

export default Question;