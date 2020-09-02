const brain = require('brain.js');
const fs  = require('fs');
const path = require('path')


const net = new brain.NeuralNetwork();

net.train([
    {input: [0, 0], output:[0]},
    {input: [0, 1], output:[1]},
    {input: [1, 0], output:[1]},
    {input: [1, 1], output:[0]},
])

const json = net.toJSON();

const pathSaved = path.resolve(__dirname, 'model-xor.json');
fs.writeFileSync(pathSaved, JSON.stringify(json))
if(fs.existsSync(pathSaved)) console.log('Arquivo gravado co sucesso.')