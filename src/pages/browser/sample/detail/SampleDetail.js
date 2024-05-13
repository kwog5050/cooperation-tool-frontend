import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getSapmleDetail } from 'apis/browser/sampleApi';

import SampleBanner from 'components/browser/sampleBanner/SampleBanner';
import Loading from 'components/loading/Loading';

import * as Style from "./style";

const SampleDetail = () => {
    const { boardIndex } = useParams();
    const [deatil, setDetail] = useState(null);

    useEffect(() => {
        getSapmleDetail({
            index: boardIndex
        }, setDetail);
    }, [])

    if (deatil === null) return <Loading></Loading>

    return (
        <>
            <SampleBanner></SampleBanner>

            <div className="wrap">
                <Style.Content>
                    <h3>{deatil[0].title.replace('<br>', '')}</h3>
                    <h4>{deatil[0].service}</h4>

                    <div className="container">
                        <p dangerouslySetInnerHTML={{ __html: deatil[0].contents }}></p>
                    </div>
                </Style.Content>
            </div>
        </>
    );
};

export default SampleDetail;