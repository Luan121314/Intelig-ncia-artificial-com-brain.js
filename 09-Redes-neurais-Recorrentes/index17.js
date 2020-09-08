const brain = require('brain.js');

const net = new brain.recurrent.GRU();

net.train([
    {input: 'Olá Hoje está um dia lindo' , output:' feliz' },
    {input: 'OI. Tive um dia péssimo hoje' , output:'triste' },
])

const output = net.run('Tive um dia péssimo hoje');

console.log(output);
