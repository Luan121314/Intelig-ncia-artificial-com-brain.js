const brain = require('brain.js');

const net1 = new brain.NeuralNetwork();
const net2 = new brain.NeuralNetwork();

const data1 = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
]

const data2 = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [0] },
    { input: [1, 0], output: [0] },
    { input: [1, 1], output: [1] }
]

const options = {
    iterations: 10000,
    errorThresh: 0.004,
    log: true,
    logPeriod: 100
}

const t1 = net1.trainAsync(data1, options);
const t2 = net2.trainAsync(data2, options);
const dataRun = [
    [0, 0],
    [0, 1],
    [1, 0],
    [1, 1],
]

Promise.all([t1, t2]).then(values => {
    const res1 = values[0]
    const res2 = values[1]
    console.log({ res1, res2 }, '\n')
    const run1 = dataRun.map(data => {
        const result = parseFloat(net1.run(data)).toFixed(0)
        return `${data[0]} xor ${data[1]} : ${result}`
    })

    const run2 = dataRun.map(data => {
        const result = parseFloat(net2.run(data)).toFixed(0)
        return `${data[0]} and ${data[1]} : ${result}`
    })

    console.log({ run1, run2 })
})
