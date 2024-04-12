import { AxiosResultEnum } from "enums/AxiosResult";

// api 통신 결과값 검사
export const axiosInspection = (res) =>{
    switch (res.result) {
        case AxiosResultEnum.SUCCESS: // 성공
            return true;
        case AxiosResultEnum.FAIL: // 값이 이상할때
            return false;
        case AxiosResultEnum.ERROR: // 에러 발생 
            return false;
        default:
            return false;
    }
}