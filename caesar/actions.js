const errors = require('./errors');
const abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(errors.required, '1234');

function decode(letter, shift) {
    const position = abc.indexOf(letter) - shift;
    return (abc.indexOf(letter) === -1) ? letter : abc.substr(position, 1);
}

function encode(letter, shift) {
    const position = abc.indexOf(letter) + shift;
    return (abc.indexOf(letter) === -1) ? letter : abc.substr(position, 1);
}

// function temp(letter, shift) {
//     const ALLOWED_ACTIONS = ['encode', 'decode'];
//     if (!ALLOWED_ACTIONS.includes(action)) return `Action "${action}" is not allowed. Use one of these instead: ${ALLOWED_ACTIONS.reduce((_, action) => `${_} ${action}`, '')}`;
//     if (!shift) {
//         return 'No shift value accepted';
//     } else {
//         if (!isInteger(shift)) {
//             return 'Shift must be integer number';
//         }
//     }
//
// }

function doCli(options) {


    console.log(options);

}

module.exports = {doCli};
