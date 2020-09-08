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
    return arrayStr
}

function integer(character='') {
	if('#' === character) return 1;
	else return 0;
}

net.train([
    { input: a, output: { a: 1 } },
    { input: b, output: { b: 1 } },
    { input: c, output: { c: 1 } },
    { input: e, output: { e: 1 } }
], {
    log: res => console.log(res)
});




const result = brain.likely(character(
    ' ####' +
    '#    ' +
    '#    ' +
    '#    ' +
    '##   '
), net);

console.log(result);

