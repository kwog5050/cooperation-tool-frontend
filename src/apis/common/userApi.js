import { axiosInspection } from "apis/axiosInspection";
import { handleApiError } from "apis/handleError";
import axios from "../axios";

// 사업자 번호 중복 체크
const companyNumberCheck = async (data, success) => {
    try {
        const res = await axios.post(url, data);

        axiosInspection(res.data) && success(res.data.data);
    } catch (error) {
        handleApiError(error);
    }
}

// 이메일 체크
const emailCheck = async (data, success) => {
    try {
        const res = await axios.post(url, data);

        axiosInspection(res.data) && success(res.data.data);
    } catch (error) {
        handleApiError(error);
    }
}


export { companyNumberCheck, emailCheck }
