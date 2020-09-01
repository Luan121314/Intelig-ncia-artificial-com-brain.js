const brain = require('brain.js');
const config = {
    hiddenLayers: [7], //matriz de camada ocultas
    activation: 'leaky-relu', // sigmoid (0,1), tanh (-1, 1), relu(0, n) e leaky-relu()0.01, n
    decayRate: 0.999 // taxa de decaimento - diminuição da taxa de erro
}
const net = new brain.NeuralNetwork(config);

net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [1] }
]);

    console.log(net.run([1, 0])[0])

// console.log(output)
