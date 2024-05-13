import React, { useRef, useState } from 'react';

import { componentImages } from 'assets/images/imageConfig';

import * as Style from "./style";

/**
 * 
 * @param {*} list 데이터
 * @returns 
 */
const Faq = ({ list }) => {
    const [isFaqSwitch, setIsFaqSwitch] = useState(false);
    const [faqSwitch, setFaqSwitch] = useState(0);
    const heigth = useRef([]);

    return (
        <Style.FaqList>
            <ul>
                {
                    list.map((item, i) => {
                        return <li className={isFaqSwitch && faqSwitch === i ? "" : "off"} key={i} onClick={() => {
                            if (faqSwitch === i) {
                                setIsFaqSwitch(!isFaqSwitch);
                            } else {
                                setIsFaqSwitch(true);
                            }
                            setFaqSwitch(i);
                        }}>
                            <div className="q">
                                <img src={componentImages.question} alt="질문" />

                                <p>{item.title}</p>

                                <img src={componentImages.downArrow} alt="화살표" />
                            </div>
                            <div className="a" style={{ maxHeight: `${heigth.current[i]?.clientHeight + 80}px` }}>
                                <img src={componentImages.answer} alt="답변" />

                                <div className="content" ref={el => heigth.current[i] = el}>
                                    <p dangerouslySetInnerHTML={{ __html: item.contents }}></p>
                                </div>
                            </div>
                        </li>
                    })
                }
            </ul>
        </Style.FaqList>
    );
};

export default Faq;