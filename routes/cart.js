const express = require('express')
const router = express.Router()
const cart = require('../controller/cart')

router.get('/',cart.getAllCarts)
router.get('/:id',cart.getSingleCart)
router.get('/user/:userid',cart.getCartsbyUserid)

router.post('/',cart.addCart)
//router.post('/:id',cart.addtoCart)
router.put('/updateProduct', cart.updateProductToCart);

router.put('/:id',cart.editCart)
router.put('/',cart.editCart);
router.patch('/:id',cart.editCart)
router.delete('/:id',cart.deleteCart)

module.exports = router
