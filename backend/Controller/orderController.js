const Orders = require("../models/OrderModel")
const getOrder = async (req,res,next)=>{
    try {
        const orders = await Orders.find({}).orFail()
    } catch (error) {
       next(error) 
    }
}

module.exports = getOrder