const randomHexCode = () => {
    const characters = '0123456789abcdef';
    const randomIndex = Math.floor(Math.random() * 14)
    return characters[randomIndex];
}

const randomColor = () => {
    let sequence = '';
    sequence += randomHexCode();

    for (let i = 0; i < 5; i++) {
        sequence += randomHexCode();
    }

    return '#' + sequence;
}

export default randomColor;