import { handleApiError } from "apis/handleError";
import axios from "./axios";

// 오늘업무 작성
const createTodaywork = async (data) => {
    try {
        const res = await axios.post("/createTodaywork", data);

        return res.data;
    } catch (error) {
        handleApiError(error);
    }
}

// 오늘업무 가져오기
const getTodaywork = async (data) => {
    try {
        const res = await axios.post("/getTodaywork", data);

        return res.data;
    } catch (error) {
        handleApiError(error);
    }
}

const todayworkApi = { createTodaywork, getTodaywork };

export default todayworkApi;