const consoleStd = require('./streams');

const ALLOWED_ACTIONS = ['encode', 'decode'];

function doCli(options) {
    if (!options.shift || !options.action || !ALLOWED_ACTIONS.includes(options.action) || !Number.isInteger(options.shift) || (options.shift === 0)) {
        if (!ALLOWED_ACTIONS.includes(options.action)) process.stderr.end(`error: action should be ${ALLOWED_ACTIONS.join(' or ')}\n`);
        if (!Number.isInteger(options.shift)) process.stderr.end('error: configuration is missing \'isInteger\' parameter!\n');
        if (options.shift === 0) process.stderr.end('error: When set --shift to value 0, no offset (encoding) will occur. Set the correct parameters \n');
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
            consoleStd.fileReadWrite(options);
        }
    }
}

module.exports = {doCli};
