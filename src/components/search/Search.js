import React from 'react';

import { rewardyImage } from 'assets/images/imageConfig';

import * as Style from './style';

const Search = ({ value, setValue, placeholder, width }) => {
    return (
        <Style.Container className='searchBox' width={width}>
            <input type="text" placeholder='챌린지명 검색' />
            <button>
                <img src={rewardyImage.search} alt="" />
            </button>
        </Style.Container>
    );
};

export default Search;