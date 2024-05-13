import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { componentImages } from 'assets/images/imageConfig';

import * as Style from './style';

const Nav = () => {
    const loaction = useLocation();
    const nav = useNavigate();
    const [menuIndex, setMenuIndex] = useState(0);

    useEffect(() => {
        switchMenu();
    }, [nav])


    const switchMenu = () => {
        switch (loaction.pathname) {
            case "/menual/start":
                setMenuIndex(0);
                break;
            case "/menual/team":
                setMenuIndex(1);
                break;
            case "/menual/todaywork":
                setMenuIndex(2);
                break;
            case "/menual/live":
                setMenuIndex(3);
                break;
            case "/menual/coin":
                setMenuIndex(4);
                break;
            case "/menual/challenge":
                setMenuIndex(5);
                break;
            case "/menual/party":
                setMenuIndex(6);
                break;
            case "/menual/insight":
                setMenuIndex(7);
                break;
            case "/menual/admin":
                setMenuIndex(8);
                break;
            default:
                break;
        }
    }

    return (
        <Style.Menu>
            <div className="wrap">
                <ul>
                    <li className={menuIndex === 0 ? "on" : ""}>
                        <Link to={"/menual/start"}>
                            <img src={componentImages.menualIcon01} alt="메뉴아이콘" />
                            <span>처음</span>
                        </Link>
                    </li>
                    <li className={menuIndex === 1 ? "on" : ""}>
                        <Link to={"/menual/team"}>
                            <img src={componentImages.menualIcon02} alt="메뉴아이콘" />
                            <span>메인화면</span>
                        </Link>
                    </li>
                    <li className={menuIndex === 2 ? "on" : ""}>
                        <Link to={"/menual/todaywork"}>
                            <img src={componentImages.menualIcon03} alt="메뉴아이콘" />
                            <span>오늘업무</span>
                        </Link>
                    </li>
                    <li className={menuIndex === 3 ? "on" : ""}>
                        <Link to={"/menual/live"}>
                            <img src={componentImages.menualIcon04} alt="메뉴아이콘" />
                            <span>라이브</span>
                        </Link>
                    </li>
                    <li className={menuIndex === 4 ? "on" : ""}>
                        <Link to={"/menual/coin"}>
                            <img src={componentImages.menualIcon05} alt="메뉴아이콘" />
                            <span>보상/코인</span>
                        </Link>
                    </li>
                    <li className={menuIndex === 5 ? "on" : ""}>
                        <Link to={"/menual/challenge"}>
                            <img src={componentImages.menualIcon06} alt="메뉴아이콘" />
                            <span>챌린지</span>
                        </Link>
                    </li>
                    <li className={menuIndex === 6 ? "on" : ""}>
                        <Link to={"/menual/party"}>
                            <img src={componentImages.menualIcon07} alt="메뉴아이콘" />
                            <span>파티</span>
                        </Link>
                    </li>
                    <li className={menuIndex === 7 ? "on" : ""}>
                        <Link to={"/menual/insight"}>
                            <img src={componentImages.menualIcon08} alt="메뉴아이콘" />
                            <span>인사이트</span>
                        </Link>
                    </li>
                    <li className={menuIndex === 8 ? "on" : ""}>
                        <Link to={"/menual/admin"}>
                            <img src={componentImages.menualIcon09} alt="메뉴아이콘" />
                            <span>관리자</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </Style.Menu>
    );
};

export default Nav;