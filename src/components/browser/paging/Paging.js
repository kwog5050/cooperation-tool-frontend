import React, { useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { componentImages } from 'assets/images/imageConfig';

import * as Style from "./style";

/**
 * 
 * @param {*} page 데이터
 * @param {*} borderType 게시판 타입
 * @param {*} boardIndex 현재 페이지 위치
 * @returns 
 */
const Paging = ({ page, boardType, boardIndex }) => {
    const nav = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const NOW_PAGE = Number(boardIndex);
    const MAX_PAGE = page.totalPage;

    // 이상한 페이지로 이동하면 에러 페이지로
    useEffect(() => {
        if (NOW_PAGE > MAX_PAGE || NOW_PAGE < 1) {
            nav("/error/notfound");
        }
    }, [nav]);

    // 쿼리스트링 있으면 페이지 url에 추가
    const setLink = (pageNumber) => {
        const searchQuery = searchParams.get("search");
        const searchParam = searchQuery ? `?search=${searchQuery}` : '';
        return `/${boardType}/${pageNumber}${searchParam}`;
    };

    // 페이징 처리
    const setPaging = () => {
        const pageLinks = [];
        const startPage = Math.max(1, NOW_PAGE - 2);
        const endPage = Math.min(MAX_PAGE, startPage + 2);

        for (let i = startPage; i <= endPage; i++) {
            pageLinks.push(
                <Link className={NOW_PAGE === i ? "on" : ""} key={i} to={setLink(i)}>{i}</Link>
            );
        }

        return pageLinks;
    };

    return (
        <Style.PageNav>
            <Link to={setLink(1)}>
                <img src={componentImages.firstPage} alt="첫페이지" />
            </Link>

            <Link to={setLink(Math.max(1, NOW_PAGE - 1))}>
                <img src={componentImages.prev} alt="이전페이지" />
            </Link>

            <div className="paging">
                {setPaging()}
            </div>

            <Link to={setLink(Math.min(MAX_PAGE, NOW_PAGE + 1))}>
                <img src={componentImages.next} alt="다음페이지" />
            </Link>

            <Link to={setLink(MAX_PAGE)}>
                <img src={componentImages.lastPage} alt="마지막페이지" />
            </Link>
        </Style.PageNav>
    );
};

export default Paging;