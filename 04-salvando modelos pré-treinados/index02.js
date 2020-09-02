const brain = require('brain.js');
const fs = require('fs');
const path = require('path');

const net = new brain.NeuralNetwork();

const json = fs.readFileSync(path.resolve(__dirname, 'model-xor.json'), 'utf-8');
net.fromJSON(JSON.parse(json));

const output00 = parseFloat(net.run([0, 0])).toFixed(0);
const output01 = parseFloat(net.run([0, 1])).toFixed(0);
const output10 = parseFloat(net.run([1, 0])).toFixed(0);
const output11 = parseFloat(net.run([1, 1])).toFixed(0);

console.log({
output00,
output01,
output10,
output11
})