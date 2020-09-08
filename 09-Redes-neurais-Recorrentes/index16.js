const brain = require('brain.js');

const net = new brain.recurrent.LSTM();

net.train([
    {input: 'Olá Hoje está um dia lindo' , output:' feliz' },
    {input: 'OI. Tive um dia péssimo hoje' , output:'triste' },
])

const output = net.run('Hoje está um dia lindo');

console.log(output);
