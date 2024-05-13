import axios from "apis/axios";
import { axiosInspection } from "apis/axiosInspection";
import { handleApiError } from "apis/handleError";

const getFaq = async (data, success) => {
    try {
        const res = await axios.get(`/bro-faq?boardIndex=${data.boardIndex}&searchText=${data.searchText}`);

        axiosInspection(res.data) && success(res.data.data);
    } catch (error) {
        handleApiError(error);
    }
}

export { getFaq };