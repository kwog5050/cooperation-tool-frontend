import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import SwitchBall from 'components/rewardy/switchBall/SwitchBall';
import ProfilePopup from 'components/rewardy/popup/profile/ProfilePopup';
import ModifyPasswordPopup from 'components/rewardy/popup/modifyPassword/ModifyPasswordPopup';

import * as Style from "./style";

import { browserImage, rewardyImage } from 'assets/images/imageConfig';

const Header = () => {
    const [isNote, setIsNote] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const [isNotificationChangeSetting, setIsNotificationChangeSetting] = useState(false);
    const [isAll, setIsAll] = useState(false);
    const [isTodaywork, setIsTodaywork] = useState(false);
    const [isChallenge, setIsChallenge] = useState(false);
    const [isParty, setIsParty] = useState(true);
    const [isLike, setIsLike] = useState(false);
    const [isCoin, setIsCoin] = useState(false);
    const [isMemo, setIsMemo] = useState(false);
    const [isProfile, setIsProfile] = useState(false);
    const [isProfilePopup, setIsProfilePopup] = useState(false);
    const [isModifyPasswordPopup, setIsModifyPasswordPopup] = useState(false);

    const openPopup = (type) => {
        switch (type) {
            case "쪽지":
                setIsNote(true);
                setIsNotification(false);
                setIsProfile(false);
                break;
            case "알림":
                setIsNote(false);
                setIsNotification(true);
                setIsProfile(false);
                break;
            case "프로필":
                setIsNote(false);
                setIsNotification(false);
                setIsProfile(true);
                break;

            default:
                break;
        }
    }

    const closePopup = () => {
        setIsNote(false);
        setIsNotification(false);
        setIsProfile(false);
    }

    const switchAllOn = (value) => {
        setIsAll(value);
        setIsTodaywork(value);
        setIsChallenge(value);
        setIsParty(value);
        setIsLike(value);
        setIsCoin(value);
        setIsMemo(value);
    }

    useEffect(() => { }, [isAll])

    useEffect(() => {
        if (!isTodaywork || !isChallenge || !isParty || !isLike || !isCoin || !isMemo) {
            setIsAll(false);
        }
        if (isTodaywork && isChallenge && isParty && isLike && isCoin && isMemo) {
            setIsAll(true);
        }
    }, [isTodaywork, isChallenge, isParty, isLike, isCoin, isMemo])

    return (
        <header>
            <Style.Head onMouseLeave={() => { closePopup() }}>
                <div className="mobileContainer">
                    <div className="mobileButton">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <Link to={"/rewardy"}>
                        <img src={browserImage.logo} alt="" />
                    </Link>
                </div>

                <h1>
                    <Link to={"/rewardy"}>
                        <img src={rewardyImage.bizLogo} alt="회사 로고" />
                    </Link>
                </h1>

                <div className="icons">
                    <ul>
                        <li>
                            <img className='pcimg' src={rewardyImage.message} alt="쪽지" onClick={() => { openPopup("쪽지") }} />
                            <img className='moimg' src={rewardyImage.mobileMessage} alt="쪽지" onClick={() => { openPopup("쪽지") }} />

                            <Style.Note on={isNote ? "true" : ""}>
                                <div className="head">
                                    <div className="flexBox">
                                        <div>
                                            <button className="on">받은쪽지</button>
                                            <span>|</span>
                                            <button>보낸쪽지</button>
                                        </div>

                                        <p>※쪽지는 최근 30일간의 내용만 볼 수 있습니다.</p>
                                    </div>
                                </div>

                                <div className="content">
                                    <div className="list">
                                        <div className="title">
                                            <span>날짜</span>
                                            <span>내용</span>
                                            <span className="name">보낸사람</span>
                                            <span className="name none">받은사람</span>
                                        </div>
                                        <ol>
                                            <li>
                                                <span>24/03/29</span>
                                                <span>어쩌구저쩌구쪽지입니다~!</span>
                                                <span>홍길동</span>
                                            </li>
                                            <li>
                                                <span>24/03/29</span>
                                                <span>어쩌구저쩌구쪽지입니다~!</span>
                                                <span>홍길동</span>
                                            </li>
                                            <li>
                                                <span>24/03/29</span>
                                                <span>어쩌구저쩌구쪽지입니다~!</span>
                                                <span>홍길동</span>
                                            </li>
                                            <li>
                                                <span>24/03/29</span>
                                                <span>어쩌구저쩌구쪽지입니다~!</span>
                                                <span>홍길동</span>
                                            </li>
                                            <li>
                                                <span>24/03/29</span>
                                                <span>어쩌구저쩌구쪽지입니다~!</span>
                                                <span>홍길동</span>
                                            </li>
                                            <li>
                                                <span>24/03/29</span>
                                                <span>어쩌구저쩌구쪽지입니다~!</span>
                                                <span>홍길동</span>
                                            </li>
                                        </ol>
                                    </div>

                                </div>
                            </Style.Note>
                        </li>
                        <li>
                            <img className='pcimg' src={rewardyImage.bell} alt="알림" onClick={() => { openPopup("알림") }} />
                            <img className='moimg' src={rewardyImage.mobileBell} alt="알림" onClick={() => { openPopup("알림") }} />

                            <Style.Notification on={isNotification ? "true" : ""} set={isNotificationChangeSetting ? "true" : ""}>
                                <div className="head">
                                    <div className="flexBox">
                                        <h3>
                                            <img src={rewardyImage.backArrow} alt="화살표" onClick={() => { setIsNotificationChangeSetting(false) }} />
                                            <span>알림</span>
                                        </h3>
                                        <button className="setting" onClick={() => { setIsNotificationChangeSetting(true) }}>
                                            <img src={rewardyImage.setting} alt="알림 설정 버튼" />
                                        </button>
                                    </div>
                                </div>

                                <div className="content">
                                    <div className="list">
                                        <ol>
                                            <li>
                                                <Link to={"/rewardy/todaywork"}>
                                                    <div className="title">
                                                        <div>
                                                            <img src={rewardyImage.share} alt="알림 아이콘" />

                                                            <h3>홍길동이 업무 공유</h3>
                                                        </div>

                                                        <button>
                                                            <img src={rewardyImage.close} alt="알림 삭제 버튼" />
                                                        </button>
                                                    </div>

                                                    <div className="text">
                                                        <p>
                                                            내용입니다내용입니다내용입니다내용입니다내용입니다
                                                            내용입니다내용입니다내용입니다내용입니다내용입니다
                                                            내용입니다내용입니다내용입니다내용입니다내용입니다
                                                        </p>
                                                    </div>

                                                    <div className="date">
                                                        <p>2024-04-01 오전 11:48</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ol>
                                    </div>

                                    <div className="setting">
                                        <div className="all">
                                            <div className="flexBox">
                                                <h3>전체알림 허용</h3>

                                                <SwitchBall value={isAll} setValue={switchAllOn}></SwitchBall>
                                            </div>
                                        </div>

                                        <ol>
                                            <li>
                                                <div className="flexBox">
                                                    <h3>오늘업무 알림</h3>

                                                    <SwitchBall value={isTodaywork} setValue={setIsTodaywork}></SwitchBall>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flexBox">
                                                    <h3>챌린지 알림</h3>

                                                    <SwitchBall value={isChallenge} setValue={setIsChallenge}></SwitchBall>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flexBox">
                                                    <h3>파티 알림</h3>

                                                    <SwitchBall value={isParty} setValue={setIsParty}></SwitchBall>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flexBox">
                                                    <h3>좋아요 알림</h3>

                                                    <SwitchBall value={isLike} setValue={setIsLike}></SwitchBall>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flexBox">
                                                    <h3>코인 알림</h3>

                                                    <SwitchBall value={isCoin} setValue={setIsCoin}></SwitchBall>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flexBox">
                                                    <h3>메모 알림</h3>

                                                    <SwitchBall value={isMemo} setValue={setIsMemo}></SwitchBall>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </Style.Notification>
                        </li>
                        <li>
                            <div className="profile" onClick={() => { openPopup("프로필") }}>
                                <img src={rewardyImage.profile} alt="" />
                                <span>홍길동님</span>
                                <img className='arrow' src={rewardyImage.downArrow} alt="" />
                            </div>

                            <Style.Profile on={isProfile ? "true" : ""}>
                                <div>
                                    <div className="flexBox">
                                        <div className="userBox">
                                            <div className="profileImage">
                                                <div className="imageBox">
                                                    <img src={rewardyImage.profile} alt="본인 프로필 사진" />
                                                </div>
                                                <button onClick={() => { setIsProfilePopup(true) }} className="setImageButton">
                                                    <img src={rewardyImage.setting} alt="프로필 설정 버튼 이미지" />
                                                </button>
                                            </div>

                                            <div className="name">
                                                <p>홍길동님, 안녕하세요!</p>
                                                <span>리워디</span>
                                            </div>
                                        </div>

                                        <div className="buttons">
                                            <button onClick={() => { setIsModifyPasswordPopup(true) }}>
                                                <span>비밀번호 재설정</span>
                                                <img src={rewardyImage.lock} alt="비밀번호 재설정" />
                                            </button>
                                            <button>
                                                <span>로그아웃</span>
                                                <img src={rewardyImage.logout} alt="로그아웃 버튼" />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="userInfo">
                                        <ol>
                                            <li>
                                                <span>공용코인</span>
                                                <b>
                                                    20,304
                                                    <img src={rewardyImage.coin} alt="공용 코인" />
                                                </b>
                                            </li>
                                            <li>
                                                <span>내 코인</span>
                                                <b>
                                                    3,500
                                                    <img src={rewardyImage.coin} alt="내 코인" />
                                                </b>
                                            </li>
                                            <li>
                                                <span>역량</span>
                                                <b>
                                                    13점
                                                </b>
                                            </li>
                                            <li>
                                                <span>좋아요</span>
                                                <b>
                                                    0개
                                                </b>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </Style.Profile>
                        </li>
                    </ul>
                </div>
            </Style.Head>

            <Style.Side>
                <ul>
                    <li>
                        <Link to={"/rewardy"}>
                            <div className="logoHide">
                                <img src={rewardyImage.logo} alt="" />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/rewardy/todaywork"}>
                            <img src={rewardyImage.sideIco01} alt="" />
                            <span>오늘업무</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/rewardy/live"}>
                            <img src={rewardyImage.sideIco02} alt="" />
                            <span>실시간 업무</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/rewardy/coin"}>
                            <img src={rewardyImage.sideIco03} alt="" />
                            <span>보상/코인</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/rewardy/challenge"}>
                            <img src={rewardyImage.sideIco04} alt="" />
                            <span>챌린지</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/rewardy/party"}>
                            <img src={rewardyImage.sideIco05} alt="" />
                            <span>파티</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/rewardy/insight"}>
                            <img src={rewardyImage.sideIco06} alt="" />
                            <span>인사이트</span>
                        </Link>
                    </li>
                </ul>
            </Style.Side>

            {/* 팝업 */}
            {isProfilePopup && <ProfilePopup setIsProfilePopup={setIsProfilePopup}></ProfilePopup>}
            {isModifyPasswordPopup && <ModifyPasswordPopup setIsModifyPasswordPopup={setIsModifyPasswordPopup}></ModifyPasswordPopup>}
        </header>
    );
};

export default Header;