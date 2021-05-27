const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
const fs = require('fs');

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/favicon.ico', (req, res) => { res.status(204).end() });

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(8080, () => {
    console.log('listening on port %s...', server.address().port);
});