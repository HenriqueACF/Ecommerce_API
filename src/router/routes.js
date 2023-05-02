const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')
const AdsController = require('../controllers/AdsController')
const UserController = require('../controllers/UserController')
const Auth = require('../middlewares/Auth')

router.get('/', (req, res) => {
    res.send('entrou');
});

// AUTH - CONTROLLER
router.post('/user/signin', AuthController.signin)
router.post('/user/signup', AuthController.signup)

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