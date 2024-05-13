//3자리마다 콤마
export const comma = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}