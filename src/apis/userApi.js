import { handleApiError } from "apis/handleError";
import axios from "./axios";

// 초대코드 검증
const invitationCodeCheck = async (data) => {
    try {
        const res = await axios.post("/invitationCode", data);

        return res.data;
    } catch (error) {
        handleApiError(error);
    }
}

// 이메일 중복 검사
const emailCheck = async (data) => {
    try {
        const res = await axios.post("/email", data);

        return res.data;
    } catch (error) {
        handleApiError(error);
    }
}

// 회원가입
const createUser = async (data) => {
    try {
        const res = await axios.post("/createUser", data);

        return res.data;
    } catch (error) {
        handleApiError(error);
    }
}

// 로그인
const login = async (data) => {
    try {
        const res = await axios.post("/login", data);

        return res.data;
    } catch (error) {
        handleApiError(error);
    }
}

// 토큰 검증
const tokenCheck = async (data) => {
    try {
        const res = await axios.post("/token", data);

        return res.data;
    } catch (error) {
        handleApiError(error)
    }
}

// 비밀번호 수정
const modifyPassword = async (data) => {
    try {
        const res = await axios.post("/modifyPassword", data);

        return res.data;
    } catch (error) {
        handleApiError(error)
    }
}

// 유저 정보 조회
const getUser = async (data) => {
    try {
        const res = await axios.post("/getUser", data);

        console.log(res.data);

        return res.data;
    } catch (error) {
        handleApiError(error)
    }
}
const userApi = { invitationCodeCheck, emailCheck, createUser, login, tokenCheck, modifyPassword, getUser };

export default userApi;