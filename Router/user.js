const express = require('express')
const userControler = require('../Controller/user')
const router = express.Router()

router.post('/login', userControler.logInController)
router.post('/signup', userControler.registerController)
router.get('/user', userControler.getAllUser)
module.exports = router;