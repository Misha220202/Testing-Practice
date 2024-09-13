//A-Z:65-90
//a-z:97-122

const upperCaseCipher = (char, shiftFactor) => {
    const charCode = char.charCodeAt(0);
    const newCharCode = (charCode + shiftFactor - 65) % 26 + 65;
    return String.fromCharCode(newCharCode);
}

const lowerCaseCipher = (char, shiftFactor) => {
    const charCode = char.charCodeAt(0);
    const newCharCode = (charCode + shiftFactor - 97) % 26 + 97;
    return String.fromCharCode(newCharCode);
}

const caesarCipher = (string, key) => {
    if (!Number.isInteger(key)) {
        throw new Error('Key is not integer');
    }
    const shiftFactor = (key % 26 + 26) % 26;
    let result = '';
    for (let char of string) {
        if (!/[a-zA-Z]/.test(char)) {
            result += char;
        } else if (/[a-z]/.test(char)) {
            result += lowerCaseCipher(char, shiftFactor);
        } else {
            result += upperCaseCipher(char, shiftFactor);
        }
    }
    return result;
}

module.exports = caesarCipher;