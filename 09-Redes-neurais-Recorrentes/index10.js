const brain = require('brain.js');

const net = new brain.recurrent.LSTM()

net.train([
    'Olá como vai você ?',
    'Bom dia! Seja bem vindo'
])

const output = net.run('Olá')

console.log(output.trim());
