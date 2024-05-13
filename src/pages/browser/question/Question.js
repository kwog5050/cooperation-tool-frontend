import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import { getFaq } from 'apis/browser/questionApi';

import Faq from 'components/browser/faq/Faq';
import Paging from 'components/browser/paging/Paging';
import Loading from 'components/loading/Loading';

import { browserImage } from 'assets/images/imageConfig';

import * as Style from "./style";

const Question = () => {
    const nav = useNavigate();
    const { boardIndex } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [list, setList] = useState(null);
    const [searchText, setSearchText] = useState("");

    const onChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "searchText":
                setSearchText(value);
                break;

            default:
                break;
        }
    }

    const searching = () => {
        if (searchText.length < 2) {
            alert("두글자 이상 입력해주세요.");
            return;
        }

        getFaq({
            boardIndex: 1,
            searchText: searchText
        }, setList);

        nav(`/question/1?search=${searchText}`);
    }

    const keyDownSearch = (el) => {
        if (el.code === "Enter") {
            searching();
        }
    }

    useEffect(() => {
        getFaq({
            boardIndex: boardIndex,
            searchText: searchParams.get("search")
        }, setList);
    }, [nav])

    if (list === null) return <Loading></Loading>

    return (
        <Style.Container>
            <div className="wrap">
                <div className="title">
                    <h3>자주 묻는 질문</h3>

                    <div className="search">
                        <input onChange={onChange} onKeyPress={keyDownSearch} type="text" name="searchText" placeholder='질문을 입력하세요.' value={searchText} />
                        <button onClick={searching}><img src={browserImage.search} alt="검색" /></button>
                    </div>
                </div>

                <Faq list={list.List}></Faq>

                <Paging page={list.page} boardType={"question"} boardIndex={boardIndex}></Paging>
            </div>
        </Style.Container>
    );
};

export default Question;