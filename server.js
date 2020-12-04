const express = require('express');
const app = express();
const linter = require('./linter.js');

app.use(express.json());

app.post('/test/', (req, res) => {
    console.log(req.body);
    res.status(200).json({ greeting: 'hey hi hello!' })
})

app.post('/lint/', (req, res) => {
    const passedData = req.body;
    const result = linter(passedData);
    res.status(200).json(result)

})

app.listen(3000, () => {
    console.log('HI! 3000')
})
