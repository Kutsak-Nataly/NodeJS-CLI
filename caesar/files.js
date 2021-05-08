const fs = require('fs');
const caesarCode = require('./docode');

function fileRead(options) {
    let readStream = fs.createReadStream(options.input, {flags: 'r', encoding: 'utf8'});
    readStream.on('error', (err) => {
        console.log(err);
    });
    readStream.on('data', (chunk) => {
        let t = caesarCode.code(chunk, options);
        process.stderr.write('Результат:\n' + t);
        // console.log('Результат:\n' + t);
    });
}

function fileWrite(options, output) {
    let writeStream = fs.createWriteStream(options.output, {flags: 'a', encoding: 'utf8'});
    writeStream.on('data', (chunk) => {
        let t = caesarCode.code(chunk, options);
        writeStream.write(t);
    });
    writeStream.on('finish', () => console.log('Запись завершена'));
    writeStream.on('error', (err) => console.log(err));
}

function fileReadWrite(options) {
    let writeStream = fs.createWriteStream(options.output, {flags: 'a', encoding: 'utf8'});
    let readStream = fs.createReadStream(options.input, {flags: 'r', encoding: 'utf8'});
    readStream.pipe(writeStream);
}

module.exports = {fileRead, fileWrite, fileReadWrite};
