const brain = require('brain.js');
const net = new brain.NeuralNetwork();

const data = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
]

const trainStream = new brain.TrainStream({
    neuralNetwork: net,
    floodCallback: function () {
        console.log('Chamando a função de floodCallback')
        readInputs(trainStream, data)
    },
    doneTrainingCallback: function (state) {
        console.log(state);

        const output00 = parseFloat(net.run([0, 0])).toFixed(0)
        const output01 = parseFloat(net.run([0, 1])).toFixed(0)
        const output10 = parseFloat(net.run([1, 0])).toFixed(0)
        const output11 = parseFloat(net.run([1, 1])).toFixed(0)

        console.log({
            output00,
            output01,
            output10,
            output11   
        });
    }
});
let chamadas = 0

function readInputs(stream, data){
    console.log('Chamada ...'+ chamadas++)
    for (let i = 0; i < data.length; i++) {
        stream.write(data[i])
        
    }
    stream.endInputs();
}

readInputs(trainStream, data)