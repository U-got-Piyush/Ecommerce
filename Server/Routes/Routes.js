const express = require ('express')

const router = express.Router()

const myController = require('../Controllers/Controller')

router.post('/user_register' , myController.getRegData)
router.post('/user_login' , myController.userLogin)


router.post('/add_product' , myController.addProduct)
router.get('/get-products' , myController.getAllProducts)



router.post('/add-to-cart' , myController.addToCart)
router.get('/get-from-cart' , myController.getCartItems)

router.get('/delete-from-cart' , myController.deleteCartItem)





module.exports = router;