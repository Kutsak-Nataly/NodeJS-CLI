const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
const abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';

function code(input, options) {
    if ((options.action === 'encode' && options.shift > 0) || (options.action === 'decode' && options.shift < 0)) {
        return encode(input, options.shift);
    } else {
        return decode(input, options.shift);
    }
}

function decode(input, shift) {
    let answer = '';
    for (let i = 0; i < input.length; i++) {
        if (!ABC.includes(input[i]) && !abc.includes(input[i])) {
            answer += input[i];
        } else if (abc.includes(input[i])) {
            let position = abc.indexOf(input[i]) - shift;
            answer += abc.substr(position, 1);
        } else {
            let position = ABC.indexOf(input[i]) - shift;
            answer += ABC.substr(position, 1);
        }
    }
    return answer;
}

function encode(input, shift) {
    let answer = '';
    for (let i = 0; i < input.length; i++) {
        if (!ABC.includes(input[i]) && !abc.includes(input[i])) {
            answer += input[i];
        } else if (abc.includes(input[i])) {
            let position = abc.indexOf(input[i]) + shift;
            answer += abc.substr(position, 1);
        } else {
            let position = ABC.indexOf(input[i]) + shift;
            answer += ABC.substr(position, 1);
        }
    }
    return answer;
}

module.exports = {code};
