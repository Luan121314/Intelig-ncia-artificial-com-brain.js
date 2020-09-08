const brain = require('brain.js');

const net = new brain.NeuralNetwork();
const trainingStatus = net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
]);

const run = net.toFunction()

const output00 = parseFloat(run([0, 0])).toFixed(0);
const output01 = parseFloat(run([0, 1])).toFixed(0);
const output10 = parseFloat(run([1, 0])).toFixed(0);
const output11 = parseFloat(run([1, 1])).toFixed(0);

console.log(trainingStatus)

console.log({
    output00,
    output01,
    output10,
    output11
});