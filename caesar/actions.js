const errors = require('./errors');
const consoleStd = require('./consolestd');
const files = require('./files');

const ALLOWED_ACTIONS = ['encode', 'decode'];

function doCli(options) {
    if (!options.shift || !options.action || !ALLOWED_ACTIONS.includes(options.action) || !Number.isInteger(options.shift) || (options.shift === 0)) {
        if (!options.shift) process.stderr.write(errors.required + '\n', options.shift);
        if (!options.action) process.stderr.write('Configuration is missing \'action\' parameter!\n');
        if (!Number.isInteger(options.shift)) process.stderr.write('Configuration is missing \'isInteger\' parameter!\n');
        if (options.shift === 0) process.stderr.write(errors.incorrect + '\n');
        process.exit(9);
    } else {
        options.shift = options.shift % 26;
        if (!options.input && !options.output) {
            consoleStd.consoleInOut(options);
        } else if (!options.input) {
            consoleStd.consoleIn(options);
        } else if (!options.output) {
            consoleStd.consoleOut(options);
        } else {
            files.fileReadWrite(options);
        }
    }
}

module.exports = {doCli};
