import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getSapmle } from 'apis/browser/sampleApi';

import SampleBanner from 'components/browser/sampleBanner/SampleBanner';

import randomColor from 'utils/rendomColor';

import Loading from 'components/loading/Loading';

import { browserImage } from 'assets/images/imageConfig';

import * as Style from "./style";

const Sample = () => {
    const [tap, setTap] = useState("전체");
    const [list, setList] = useState(null);
    const [copyList, setCopyList] = useState(null);

    const formatList = async () => {
        let arr = [];

        if (list === null) return;

        setCopyList(list);

        if (tap === "전체") {
            for (let i = 0; i < list.length; i++) {
                arr.push({
                    title: list[i].title,
                    category: list[i].category,
                    backgroundColor: randomColor(),
                    index: list[i].idx
                });
            }
        } else {
            for (let i = 0; i < list.length; i++) {
                if (list[i].category === tap) {
                    arr.push({
                        title: list[i].title,
                        category: list[i].category,
                        backgroundColor: randomColor(),
                        index: list[i].idx
                    });
                }
            }
        }

        setCopyList(arr);
    }

    useEffect(() => {
        if (list === null) {
            getSapmle(setList);
        }

        formatList();
    }, [tap, list]);


    if (copyList === null) return <Loading></Loading>

    return (
        <>
            <SampleBanner></SampleBanner>

            <Style.TapMenu>
                <div className="wrap">
                    <ul>
                        <li onClick={() => { setTap("전체") }} className={tap === "전체" ? "on" : ""}>전체</li>
                        <li onClick={() => { setTap("업무") }} className={tap === "업무" ? "on" : ""}>업무</li>
                        <li onClick={() => { setTap("교육") }} className={tap === "교육" ? "on" : ""}>교육</li>
                        <li onClick={() => { setTap("생활/문화") }} className={tap === "생활/문화" ? "on" : ""}>생활/문화</li>
                        <li onClick={() => { setTap("건강") }} className={tap === "건강" ? "on" : ""}>건강</li>
                        <li onClick={() => { setTap("행사") }} className={tap === "행사" ? "on" : ""}>행사</li>
                    </ul>
                </div>
            </Style.TapMenu>

            <Style.List>
                <div className="wrap">
                    <div className="top">
                        <h4>총 <b>{copyList.length}</b>건</h4>

                        <div className="search">
                            <input type="text" placeholder='검색' />
                            <img src={browserImage.search} alt="검색" />
                        </div>
                    </div>

                    <ul>
                        {
                            copyList.map((item, i) => {
                                return <li key={i}>
                                    <Link to={`/sample/${item.index}`} style={{ backgroundColor: item.backgroundColor }}>
                                        <h5 dangerouslySetInnerHTML={{ __html: item.title }}></h5>

                                        <span>{item.category}</span>
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </Style.List>
        </>
    );
};

export default Sample;