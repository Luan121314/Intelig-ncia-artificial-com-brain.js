const brain = require('brain.js');
const config = {
    binaryThresh: 0.5, //debulhador binério, tendência nos valores de resposta
    hiddenLayers: [3], //matriz de camada ocultas
    activation: 'sigmoid', // sigmoid (0,1), tanh (-1, 1), relu(0, n) e leacky-relu()0.01, n
    leakyReluAlpha: 0.01962, // precisão da função de ativação leaky-relu
    inputSize: 2, //  Quantidade de elementos de entrada.
    inputRange: 2,  //Quantidade maxíma de elementos de netrada
    outputSize: 1,//  quantidade de elemntos de saida
    learningRate: 0.01, // taxa de aprendizagem,
    decayRate: 0.999 // taxa de decaimento - diminuição da taxa de erro
}
const net = new brain.NeuralNetwork(config);

net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [1] }
]);

setInterval(()=>{
    console.log(net.run([0, 1])[0])
},1000)

// console.log(output)
