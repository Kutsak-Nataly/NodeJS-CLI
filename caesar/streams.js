const caesarCode = require('./docode');
const stream = require('stream');
const fs = require('fs');
const Transform = require('stream').Transform;

function streamTransform(options) {
    const codeTransform = new Transform({
        transform(chunk, encoding, callback) {
            chunk = chunk.toString();
            chunk = caesarCode.code(chunk, options);
            callback(null, chunk);
        }
    });
    return codeTransform;
}

function consoleIn(options) {
    const writeStream = fs.createWriteStream(options.output, {flags: 'a', encoding: 'utf8'});
    stream.pipeline(
        process.stdin,
        streamTransform(options),
        writeStream,
        (err) => {
            if (err) throw err;
        });
}

function consoleOut(options) {
    const readStream = fs.createReadStream(options.input, {flags: 'r', encoding: 'utf8'});
    stream.pipeline(
        readStream,
        streamTransform(options),
        process.stdout,
        (err) => {
            if (err) throw err;
        });
}

function consoleInOut(options) {
    stream.pipeline(
        process.stdin,
        streamTransform(options),
        process.stdout,
        (err) => {
            if (err) throw err;
        });
}

function fileReadWrite (options) {
    const readStream = fs.createReadStream(options.input, {flags: 'r', encoding: 'utf8'});
    const writeStream = fs.createWriteStream(options.output, {flags: 'a', encoding: 'utf8'});
    stream.pipeline(
        readStream,
        streamTransform(options),
        writeStream,
        (err) => {
            if (err) throw err;
        });
}

module.exports = {consoleIn, consoleOut, consoleInOut, fileReadWrite};
