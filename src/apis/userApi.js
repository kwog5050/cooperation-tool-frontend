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

const create = async (data) => {
    try {
        const res = await axios.post("/user", data);

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

const userApi = { invitationCodeCheck, create, login, tokenCheck }

export default userApi;