const express = require('express')
const router = express.Router()

//CONTROLLER
const AuthController = require('../controllers/AuthController')
const AdsController = require('../controllers/AdsController')
const UserController = require('../controllers/UserController')

//MIDDLEWARE
const Auth = require('../middlewares/Auth')
//VALIDATOR
const AuthValidator = require('../validators/AuthValidator')

router.get('/', (req, res) => {
    res.send('entrou');
});

// AUTH - CONTROLLER
router.post('/user/signin', AuthController.signin)
router.post('/user/signup', AuthValidator.signup, AuthController.signup)

// USER - CONTROLLER
router.get('/states', UserController.getStates)
router.get('/user/me', Auth.private, UserController.info)
router.get('/user/me', Auth.private, UserController.editAction)

//ADS - CONTROLLER
router.get('/categories', AdsController.getCategories)
router.get('/ad/add', Auth.private, AdsController.addAction)
router.get('/ad/list', AdsController.getList)
router.get('/ad/item', AdsController.addItem)
router.post('/ad/:id', Auth.private, AdsController.editAction)

module.exports = router