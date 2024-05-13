import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import * as Style from './style';

const MenualSide = ({ list }) => {
    return (
        <Style.Side>
            <ul>
                {
                    list.map((item, i) => {
                        return <li key={i} className={i + 1 === item.index ? "on" : ""}>
                            <Link to={item.url}>{item.text}</Link>
                        </li>
                    })
                }
            </ul>
        </Style.Side>
    );
};

export default MenualSide;