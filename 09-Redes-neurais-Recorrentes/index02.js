const brain = require('brain.js');

const net =new  brain.recurrent.RNNTimeStep();

net.train([
    [1,2,3]
]);

const output = net.run([1,2])

console.log(`O dado posterior a essa sequencia é: ${output}`);