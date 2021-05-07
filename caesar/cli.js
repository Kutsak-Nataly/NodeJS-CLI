// const fs = require('fs');
const {program} = require('commander');
const actions = require('./actions');

program
    .version('0.0.1')
    .description('Encode and decode a text by Caesar cipher')
    .option('-s, --shift <number>', 'shift in the alphabet, integer/-integer, required', Number)
    .option('-i, --input <value>', 'an input file', String)
    .option('-o, --output <value>', 'an output file', String)
    .option('-a, --action <value>', 'encode or decode, required', String)
    .action(() => {
    })
    .parse();

const options = program.opts();
actions.doCli(options);


//
// if (options.shift) {
//     console.log();
// }
// else {
//     console.log('shift - Обязательный параметр');
// }
// if (options.action) console.log(options.action);
// if (options.input) console.log(options.input);
// if (options.output) console.log(options.output);



