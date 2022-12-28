const express = require('express')
const getUser = require('../Controller/userController')
const router = express.Router()

router.get("/", getUser)


module.exports = router