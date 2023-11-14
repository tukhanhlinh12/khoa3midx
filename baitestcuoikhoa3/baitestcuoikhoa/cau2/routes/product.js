var express = require('express');
const { getAllProducts, getAllProductsUnder100 } = require('../src/controlers');
const { authentication } = require('../middlewares/authenticator');
var productRouter = express.Router();


productRouter.get('/',authentication ,getAllProducts),
productRouter.get('/under100',authentication, getAllProductsUnder100)



module.exports = productRouter;
