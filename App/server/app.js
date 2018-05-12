const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const logRequests = require('./utils/request-logger');
const IndexRouter = require('./routes/index.route');

const port = 5000;
const app = express();

app.use(helmet());
app.use(logRequests);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', IndexRouter);

app.listen(port, () => {
    console.log('NodeJS app started on port: ' + port);
})