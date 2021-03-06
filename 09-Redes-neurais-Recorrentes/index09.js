const brain = require('brain.js');

const net = new brain.recurrent.GRUTimeStep({
    inputSize: 2,
    outputSize: 2
})

net.train([
    [1, 3],
    [2, 2],
    [3, 1]
])

const output = net.run([[1, 3], [2, 2]])

console.log(`O dado posterior a essa sequencia é: ${output}`);
