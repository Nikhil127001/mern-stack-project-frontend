const express = require('express')
const getOrder = require('../Controller/orderController')
const router = express.Router()

router.get("/", getOrder)


module.exports = router