const capitalize = (string) => {
    let result = '';
    let isCapitalized = false;
    for (let char of string) {
        if (!isCapitalized && /[a-zA-Z]/.test(char)) {
            result += char.toUpperCase();
            isCapitalized = true;
        } else {
            result += char;
        }
    }
    return result;
}

module.exports = capitalize;