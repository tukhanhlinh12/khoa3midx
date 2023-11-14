var express = require('express');
const { login } = require('../src/controlers');
var userRouter = express.Router();


userRouter.post('/login', login),

module.exports = userRouter;
