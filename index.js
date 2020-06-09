const express = require('express');

const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/api/hello', (req, res) => {

    res.send('Hello Azure')
});

app.post('/api/name', (req, res) => {

    if (req.body.name !== undefined) {
        const name = req.body.name
        res.send('Hello '+name)
    } else {
        res.send('No Name')
    }
});

app.listen(8080, () => {
    console.log('app server is running')
});