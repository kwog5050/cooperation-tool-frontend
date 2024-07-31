import { handleApiError } from "apis/handleError";
import axios from "./axios";

const login = async (data) => {
    try {
        const res = await axios.post("/login", data);

        return res.data;
    } catch (error) {
        handleApiError(error);
    }
}

const tokenCheck = async (data) => {
    try {
        const res = await axios.post("/token", data);

        return res.data;
    } catch (error) {
        handleApiError(error)
    }
}

const userApi = { login, tokenCheck }

export default userApi;