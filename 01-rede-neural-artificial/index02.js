const brain = require('brain.js')
const net = new brain.NeuralNetwork();

net.train([
    {input: {entrada1: 0, entrada2: 0}, output: {saida: 0}},
    {input: {entrada1: 0, entrada2: 1}, output: {saida: 1}},
    {input: {entrada1: 1, entrada2: 0}, output: {saida: 1}},
    {input: {entrada1: 1, entrada2: 1}, output: {saida: 0}}

]);

const output00 = parseFloat(net.run( {entrada1: 0, entrada2: 0}).saida).toFixed(0);
const output10 = parseFloat(net.run( {entrada1: 0, entrada2: 1}).saida).toFixed(0);
const output01 = parseFloat(net.run( {entrada1: 1, entrada2: 0}).saida).toFixed(0);
const output11 = parseFloat(net.run( {entrada1: 1, entrada2: 1}).saida).toFixed(0);


console.log({
output00,
output01,
output10,
output11
})