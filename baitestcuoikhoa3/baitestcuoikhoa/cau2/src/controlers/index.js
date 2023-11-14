const inventoryModel = require('../models/Inventory.js')
const userModel = require('../models/User.js')
const {generateAccessToken, generateRefreshToken} = require('../../middlewares/authenticator')
const bcrypt = require('bcrypt');
const orderModel = require('../models/Oder.js');

const getAllProducts = async (req, res) => {
    try {
        const products = await inventoryModel.find({})
        console.log(products)
        return res.status(201).json({
            products: products,
            status: 'success'
        })
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}

const getAllProductsUnder100 = async (req, res) => {
    try {
        const products = await inventoryModel.find({})
        const productArr = []
        for (const value of products) {
            if (value?.instock < 100) {
                productArr.push(value)
            }
        }
        return res.status(201).json({
            products: productArr,
            status: 'success'
        })
    } catch (error) {
        return res.status(400).json({
            error: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { password, username } = req.body;

        const usernameExist = await userModel.findOne({ username })

        // console.log(usernameExist)
        if (!usernameExist) {
            return res.status(400).json("Người dùng không tồn tại");
        }

        // const checkPassword = bcrypt.compareSync(password, usernameExist.password)
        // if (!checkPassword) {
        //     return res.status(400).json("Sai mật khẩu");
        // }

        //create access token,refresh token
        const accessToken = generateAccessToken(usernameExist._id)
        const refreshToken = generateRefreshToken(usernameExist._id)

        console.log(accessToken)
        await userModel.findByIdAndUpdate(usernameExist._id, { refreshToken });
        
        return res.status(201).json({
            username: username,
            status: "Đăng nhập thành công",
            accessToken: accessToken,
            refreshToken: refreshToken,
        })
    } catch (error) {
        return res.status(400).json({ message: error.message})
    }
}


const getAllOrder = async (req, res) => {
    try {
        const newArr = [];
        const orders = await orderModel.find({})
        const products = await inventoryModel.find({})
        for (const order of orders) {
            for (const product of products) {
                if(product.sku == order.item) {
                    newArr.push({order, description: product})
                } 
            }
        }
        return res.status(201).json({
            order: newArr,
            status: 'success'
        })

    } catch (error) {
        return res.status(400).json({ message: error.message})
        
    }
}

module.exports = {
    getAllProducts,
    getAllProductsUnder100, 
    login,
    getAllOrder
}