import { axiosInspection } from "apis/axiosInspection";
import { handleApiError } from "apis/handleError";
import axios from "./axios";

const login = async (data) => {
    try {
        const res = await axios.post("/login", data);

        if (!axiosInspection(res.data)) return;

        sessionStorage.setItem("loginToken", res.data.data.token);

        return res.data.result;
    } catch (error) {
        handleApiError(error);
    }
}

export { login };