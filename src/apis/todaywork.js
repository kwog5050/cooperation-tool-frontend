import { handleApiError } from "apis/handleError";
import axios from "./axios";

const createTodaywork = async (data) => {
    try {
        const res = await axios.post("/createTodaywork", data);

        return res.data;
    } catch (error) {
        handleApiError(error);
    }
}

const todayworkApi = { createTodaywork }

export default todayworkApi;