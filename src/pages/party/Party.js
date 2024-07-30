import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SideMenu from 'components/sideMenu/party/SideMenu';
import Search from 'components/search/Search';
import Select from 'components/select/Select';

import { cooperationImage } from 'assets/images/imageConfig';

import * as Style from "./style";

const Party = () => {
    const containerSize = useSelector((state) => state.containerSize.size);
    const [isSelect, setIsSelect] = useState(false);
    return (
        <>
            <SideMenu></SideMenu>
            <Style.Container width={containerSize}>
                <div className="top">
                    <div className="flex">
                        <h3>전체 <span>52</span></h3>

                        <Search
                            width={23}
                            placeholder={"파티명 검색"}
                        ></Search>
                    </div>

                    <div className="tap">
                        <button className="userParty">
                            <img src={cooperationImage.challengeCheckOff} alt="" />
                            <span>내 파티(4)</span>
                        </button>

                        <div>
                            <div className="buttons">
                                <button>전체</button>
                                <button>원활</button>
                                <button>보통</button>
                                <button>지연</button>
                                <button>종료</button>
                            </div>

                            <Select
                                isSelect={isSelect}
                                setIsSelect={setIsSelect}
                                list={["파티 생성일 순", "업데이트 순", "업무 많은 순", "업무 적은 순", "코인 많은 순"]}
                                span={"파티 생성일 순"}
                                width={17}
                            ></Select>

                            <div className="sort">
                                <button className='on'>
                                    <img src={cooperationImage.partySort01_on} alt="" />
                                </button>
                                <button>
                                    <img src={cooperationImage.partySort02_off} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="list">
                    <ul>
                        <li>
                            <Link>
                                <div className="day">
                                    <span>2024-04-22~</span>
                                    <button><img src={cooperationImage.partyStar_on} alt="" /></button>
                                </div>

                                <h3>[리워디]업데이트</h3>

                                <div className="userList">
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <span>+5</span>
                                </div>

                                <div className="info">
                                    <div className="some">
                                        <div>
                                            <img src={cooperationImage.coin} alt="" />
                                            <strong>0</strong>
                                        </div>
                                        <span>|</span>
                                        <div>
                                            <span>업무</span>
                                            <strong>16</strong>
                                        </div>
                                    </div>
                                    <div className="situation">원활</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <div className="day">
                                    <span>2024-04-22~</span>
                                    <button><img src={cooperationImage.partyStar_on} alt="" /></button>
                                </div>

                                <h3>[리워디]업데이트</h3>

                                <div className="userList">
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <span>+5</span>
                                </div>

                                <div className="info">
                                    <div className="some">
                                        <div>
                                            <img src={cooperationImage.coin} alt="" />
                                            <strong>0</strong>
                                        </div>
                                        <span>|</span>
                                        <div>
                                            <span>업무</span>
                                            <strong>16</strong>
                                        </div>
                                    </div>
                                    <div className="situation">원활</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <div className="day">
                                    <span>2024-04-22~</span>
                                    <button><img src={cooperationImage.partyStar_on} alt="" /></button>
                                </div>

                                <h3>[리워디]업데이트</h3>

                                <div className="userList">
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <span>+5</span>
                                </div>

                                <div className="info">
                                    <div className="some">
                                        <div>
                                            <img src={cooperationImage.coin} alt="" />
                                            <strong>0</strong>
                                        </div>
                                        <span>|</span>
                                        <div>
                                            <span>업무</span>
                                            <strong>16</strong>
                                        </div>
                                    </div>
                                    <div className="situation">원활</div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link>
                                <div className="day">
                                    <span>2024-04-22~</span>
                                    <button><img src={cooperationImage.partyStar_on} alt="" /></button>
                                </div>

                                <h3>[리워디]업데이트</h3>

                                <div className="userList">
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <div className="profile">
                                        <img src={cooperationImage.profile} alt="" />
                                    </div>
                                    <span>+5</span>
                                </div>

                                <div className="info">
                                    <div className="some">
                                        <div>
                                            <img src={cooperationImage.coin} alt="" />
                                            <strong>0</strong>
                                        </div>
                                        <span>|</span>
                                        <div>
                                            <span>업무</span>
                                            <strong>16</strong>
                                        </div>
                                    </div>
                                    <div className="situation">원활</div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </Style.Container>
        </>
    );
};

export default Party;