import React from 'react';

import * as Style from "./style";

const SwitchBall = ({ value, setValue }) => {
    return (
        <Style.Ball off={!value ? "true" : ""} onClick={() => { setValue(!value) }}>
            <span className="on">ON</span>
            <span className="off">OFF</span>

            <div className="ball"></div>

            {/* <input type="hidden" name={name} value={value} /> */}
        </Style.Ball>

    );
};

export default SwitchBall;