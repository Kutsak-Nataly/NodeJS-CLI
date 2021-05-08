const readline = require('readline');
const caesarCode = require('./docode');
const files = require('./files');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function consoleIn(options) {
    rl.question('Enter data for coding:\n', (input) => {
        const output = caesarCode.code(input, options);
        files.fileWrite(options, output);
        consoleInOut(options);
    });
}

function consoleOut(options) {
        files.fileRead(options);
}

function consoleInOut(options) {
    rl.question('Enter data for coding:\n', (input) => {
        const output = caesarCode.code(input, options);
        console.log('Result:\n' + output);
        consoleInOut(options);
    });
}

module.exports = {consoleIn, consoleOut, consoleInOut};
