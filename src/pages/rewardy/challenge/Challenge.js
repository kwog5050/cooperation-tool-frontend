import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SideMenu from 'components/rewardy/sideMenu/challenge/SideMenu';
import Select from 'components/select/Select';
import Search from 'components/search/Search';

import { rewardyImage } from 'assets/images/imageConfig';

import * as Style from "./style";

const Challenge = () => {
    const containerSize = useSelector((state) => state.containerSize.size);
    const [isType, setIsType] = useState(false);
    const [isSort, setIsSort] = useState(false);

    return (
        <>
            <SideMenu></SideMenu>
            <Style.Container width={containerSize}>
                <div className="top">
                    <div className="flex">
                        <h3>전체 <span>52</span></h3>

                        <div className="right">
                            <div className="selectBox">
                                <Select
                                    isSelect={isType} setIsSelect={setIsType}
                                    list={["전체", "에너지", "성과", "성장", "협업", "성실", "실행"]}
                                    span={"전체"}
                                    width={17}
                                ></Select>
                                <Select
                                    isSelect={isSort} setIsSelect={setIsSort}
                                    list={["최신순", "기간 짧은 순", "코인 높은 순", "참여자 많은 순"]}
                                    span={"최신순"}
                                    width={17}
                                ></Select>
                            </div>

                            <Search
                                width={23}
                                placeholder={"챌린지명 검색"}
                            ></Search>
                        </div>
                    </div>

                    <div className="checkBox">
                        <ul>
                            <li>
                                <button>
                                    <img src={rewardyImage.challengeCheckOn} alt="" />
                                </button>
                                <span>전체</span>
                            </li>
                            <li>
                                <button>
                                    <img src={rewardyImage.challengeCheckOn} alt="" />
                                </button>
                                <span>도전가능한 챌린지</span>
                            </li>
                            <li>
                                <button>
                                    <img src={rewardyImage.challengeCheckOn} alt="" />
                                </button>
                                <span>도전중인 챌린지</span>
                            </li>
                            <li>
                                <button>
                                    <img src={rewardyImage.challengeCheckOn} alt="" />
                                </button>
                                <span>내가 완료한 챌린지</span>
                            </li>
                            <li>
                                <button>
                                    <img src={rewardyImage.challengeCheckOn} alt="" />
                                </button>
                                <span>종료된 챌린지</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="list">
                    <ul>
                        <li className='end'>
                            <Link to={"/rewardy/challenge/1"}>
                                <div className="subTitle">
                                    <h5>송별회(퇴사)</h5>
                                    <strong>100 <img src={rewardyImage.coin} alt="" /></strong>
                                </div>

                                <h3>굿바이 챌린지 <br /> 안녕은 영원한 헤어짐은 아니겠지요</h3>

                                <div className="info">
                                    <div className="members">
                                        <img src={rewardyImage.challengeMember} alt="" />
                                        <span>7/26명</span>
                                    </div>
                                    <div className="situation">
                                        <img src={rewardyImage.challengeDate} alt="" />
                                        <span>종료</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <div className="subTitle">
                                    <h5>송별회(퇴사)</h5>
                                    <strong>100 <img src={rewardyImage.coin} alt="" /></strong>
                                </div>

                                <h3>굿바이 챌린지</h3>

                                <div className="info">
                                    <div className="members">
                                        <img src={rewardyImage.challengeMember} alt="" />
                                        <span>7/26명</span>
                                    </div>
                                    <div className="situation">
                                        <img src={rewardyImage.challengeDate} alt="" />
                                        <span>종료</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Style.Container>
        </>
    );
};

export default Challenge;