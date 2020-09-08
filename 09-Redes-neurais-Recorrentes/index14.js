const brain = require('brain.js');

const net = new brain.recurrent.LSTMTimeStep()

net.train([
    [1,2,3]
])

const output = net.forecast([1, 2], 2);

console.log(output);
