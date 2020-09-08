const brain = require('brain.js');

const net = new brain.recurrent.RNNTimeStep()

net.train([
    [1,2,3]
])

const output = net.forecast([1, 2]);

console.log(output);
