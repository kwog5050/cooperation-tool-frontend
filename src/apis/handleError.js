import axios from "axios";

// 통신에러
const handleApiError = async (error) => {
    if (axios.isCancel(error)) {
        console.log("Request canceled:", error.message);
        return;
    }

    if (error.response) {
        // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        // window.location.replace(`/error/${error.response.status}`);
    } else if (error.request) {
        // 요청이 이루어 졌으나 응답을 받지 못함
        console.log(error.request);
        // window.location.replace("/error/serverNotRespons");
    } else {
        // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생
        console.log("Error", error.message);
        // window.location.replace("/error/notfound");
    }
    console.log(error.config);
};

export { handleApiError };