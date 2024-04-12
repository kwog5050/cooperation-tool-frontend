import axios from "axios";
import { handleApiError } from "apis/handleError";

const test =  async (data, success) => {
    try {
        const res = await axios.post("", data);

        console.log(res.data[0]);
        success(res.data[0]);
    } catch (error) {
        handleApiError(error);
    }
}

export { test };