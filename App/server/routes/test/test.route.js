const express = require('express');
const TestRouter = express.Router();

TestRouter.get('/', (req, res) => {
    res.json({
        status: 'OK',
        message: 'RestCall works'
    });
});

module.exports = TestRouter;