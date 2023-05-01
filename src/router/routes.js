const express = require('express')
const router = express.Router()

const AuthController = require('../controllers/AuthController')
const AdsController = require('../controllers/AdsController')
const UserController = require('../controllers/UserController')

router.get('/', (req, res) => {
    res.send('entrou');
});

// AUTH - CONTROLLER
router.post('/user/signin', AuthController.signin)
router.post('/user/signup', AuthController.signup)

// USER - CONTROLLER
router.get('/states', UserController.getStates)
router.get('/user/me', UserController.info)
router.get('/user/me', UserController.editAction)

//ADS - CONTROLLER
router.get('/categories', AdsController.getCategories)
router.get('/ad/add', AdsController.addAction)
router.get('/ad/list', AdsController.getList)
router.get('/ad/item', AdsController.addItem)
router.post('/ad/:id', AdsController.editAction)

module.exports = router