import React from 'react';

import * as Style from "./style";
import { componentImages } from 'assets/images/imageConfig';

const Paging = () => {
    return (
        <Style.PageNav>
            <button><img src={componentImages.firstPage} alt="" /></button>
            <button><img src={componentImages.prev} alt="" /></button>
            <div className="paging">
                <button className='on'>1</button>
                <button>2</button>
                <button>3</button>
            </div>
            <button><img src={componentImages.next} alt="" /></button>
            <button><img src={componentImages.lastPage} alt="" /></button>
        </Style.PageNav>
    );
};

export default Paging;