// 사업자 등록 번호 검사
export const formatCompanyNumber = (number) => {
    const numberRegex = number.replace(/\D/g, '');

    const formatdNumber = numberRegex.replace(
        /^(\d{3})(\d{2})(\d{5})$/,
        '$1-$2-$3'
    );

    return formatdNumber;
};