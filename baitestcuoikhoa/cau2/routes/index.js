var express = require('express');
const productRouter = require('./product.js');
const userRouter = require('./user.js');
const orderRouter = require('./order.js');
var router = express.Router();

router.use('/products', productRouter)
router.use('/users', userRouter)
router.use('/orders', orderRouter)

module.exports = router;
