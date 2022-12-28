const express = require('express')
const {getCategory,newCategory,deleteCategory,saveAttr} = require('../Controller/categoryController')
const router = express.Router()

router.get("/", getCategory)
router.post("/", newCategory)
router.delete("/:category", deleteCategory)
router.post("/attr", saveAttr)

module.exports = router