const brain = require('brain.js');
const assert = require('assert');

const net = new brain.NeuralNetwork();


const a = character(
    ' ### ' +
    '#   #' +
    '#####' +
    '#   #' +
    '#   #'
)

const b = character(
    '##### ' +
    '#    #' +
    '######' +
    '#    #' +
    '##### '

)

const c = character(
    '#####' +
    '#    ' +
    '#    ' +
    '#    ' +
    '#####'

);

const e = character(
    '#####' +
    '#    ' +
    '#####' +
    '#    ' +
    '#####'

);


function character(string='') {
    const arrayStr = string.split('').map(integer);
    // console.log(arrayStr.length);
    // console.log(arrayStr)
    return arrayStr
}

function integer(character='') {
    // console.log(character);
	if('#' === character) return 1;
	else return 0;
}

const trainStatus = net.train([
    { input: a, output: { a: 1 } },
    { input: b, output: { b: 1 } },
    { input: c, output: { c: 1 } },
    { input: e, output: { e: 1 } }
], {
    iterations: 70000,
    errorThresh: 0.006,
    log: true,
    logPeriod: 10000
});

console.log(trainStatus);



const result = brain.likely(character(
    ' ####' +
    '#    ' +
    '#    ' +
    '#    ' +
    '##   '
), net);

// assert(result === 'a');

// console.log(`\n Letra mais próxima da entrada passada é: ${result}`)
console.log(`A letra mais proxima é  ${result}`);

