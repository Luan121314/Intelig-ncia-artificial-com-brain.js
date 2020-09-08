const brain = require('brain.js');

const net = new brain.recurrent.GRUTimeStep()

net.train([
    [1,2,3]
])

const output = net.forecast([1, 2], 2);

console.log(output);
