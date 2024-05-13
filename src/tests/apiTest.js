import axios from "axios";
import { handleApiError } from "apis/handleError";

const apiTest = async (data, success) => {
    try {
        const res = await axios.get("http://192.168.0.102:8080/api/bro-faq");

        console.log(res.data);
        // success(res.data);
    } catch (error) {
        handleApiError(error);
    }
}
// const test =  async (data, success) => {
//     try {
//         const res = await axios.post("http://192.168.0.102:8080/api/bro-faq", data);

//         console.log(res.data[0]);
//         success(res.data[0]);
//     } catch (error) {
//         handleApiError(error);
//     }
// }

export { apiTest };