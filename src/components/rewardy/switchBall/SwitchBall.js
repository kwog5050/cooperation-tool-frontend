import React from 'react';

import * as Style from "./style";

const SwitchBall = ({ name, value, setValue }) => {
    return (
        <Style.Ball off={value ? "true" : ""}>
            <span className="on">ON</span>
            <span className="off">OFF</span>

            <div className="ball"></div>

            <input type="hidden" name={name} value={value} />
        </Style.Ball>

    );
};

export default SwitchBall;