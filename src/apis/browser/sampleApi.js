import axios from "apis/axios";
import { handleApiError } from "apis/handleError";
import { axiosInspection } from "apis/axiosInspection";


const getSapmle = async (success) => {
    try {
        const res = await axios.get("/bro-sample-list");

        axiosInspection(res.data) && success(res.data.data);
    } catch (error) {
        handleApiError(error);
    }
}

const getSapmleDetail = async (data, success) => {
    try {
        const res = await axios.get(`/bro-sample-detail?idx=${data.index}`);

        axiosInspection(res.data) && success(res.data.data);
    } catch (error) {
        handleApiError(error);
    }
}

export { getSapmle, getSapmleDetail }