const {program} = require('commander');
const actions = require('./actions');

program
    .version('0.0.1')
    .description('Encode and decode a text by Caesar cipher')
    .requiredOption('-s, --shift <number>', 'shift in the alphabet, integer/-integer, required', Number)
    .option('-i, --input <value>', 'an input file', String)
    .option('-o, --output <value>', 'an output file', String)
    .requiredOption('-a, --action <value>', 'encode or decode, required', String)
    .action(() => {
    })
    .parse();

const options = program.opts();

actions.doCli(options);



