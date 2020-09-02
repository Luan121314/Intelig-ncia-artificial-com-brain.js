const brain = require('brain.js');
const net = new brain.NeuralNetwork();

net.train([
    {input: [0, 0], output: [0]},
    {input: [0, 1], output: [1]},
    {input: [1, 0], output: [1]},
    {input: [1, 1], output: [0]},
], {
    iterations: 10000, // quantidade de backpropagations
    errorThresh: 0.005, // porcentagem máxima aceitavel para a taxa de erro
    log: true, //exibição do log de treinamento
    logPeriod: 10, //número de interações antes da exibição do log
    learningRate: 0.3, //taxa de aprendizagem
    momentum: 0.1, // precisão na interação do peso da próxima camada
    callback: null, //chamada de função durante o treinamento
    callbackPeriod: 10, //número de interações antes da proxima execução da função de callback
    timeout: Infinity, //o número máximo de milesegundos que o treinamento poderá durar,

})

const output = net.run([0, 1])

console.log(output)