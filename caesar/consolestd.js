const readline = require('readline');
const caesarCode = require('./docode');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function consoleIn(options) {
    rl.question('Enter data for coding:\n', (input) => {
        caesarCode.code(input, options);
        //запись в файл
        consoleInOut(options);
    });
}

function consoleOut(options) {

}

function consoleInOut(options) {
    rl.question('Enter data for coding:\n', (input) => {
        caesarCode.code(input, options);
        console.log('Result:\n' + caesarCode.code(input, options));
        consoleInOut(options);
        // rl.close();
    });
}

module.exports = {consoleIn, consoleOut, consoleInOut};
