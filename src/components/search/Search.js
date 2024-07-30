import React from 'react';

import { cooperationImage } from 'assets/images/imageConfig';

import * as Style from './style';

const Search = ({ value, setValue, placeholder, width }) => {
    return (
        <Style.Container className='searchBox' width={width}>
            <input type="text" placeholder={placeholder} />
            <button>
                <img src={cooperationImage.search} alt="" />
            </button>
        </Style.Container>
    );
};

export default Search;