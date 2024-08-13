const express = require('express')
const router = express.Router()
const controllers = require('../controllers/userControls')

router.post('/api/form', controllers.apiForm)
router.post('/api/check/user', controllers.apiCheckUser)
module.exports = router