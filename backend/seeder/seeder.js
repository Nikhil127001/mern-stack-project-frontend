const connectDB = require("../config/db")
connectDB()

const categoryData = require("./catagories")
const productDate = require("./products")
const reviewdata = require("./reviews")
const usersdata = require("./users")
const ordersData = require("./orders")
const Category = require("../models/CatagoryModel")
const Product = require("../models/ProductModels")
const Review = require("../models/ReviewModel")
const User = require("../models/UserModel")
const Order = require("../models/OrderModel")

const importData = async () => {
    try {
        await Category.collection.dropIndexes()
        // await Product.collection.dropIndexes()
        

        await Category.collection.deleteMany({})
        await Product.collection.deleteMany({})
        await Review.collection.deleteMany({})
        await User.collection.deleteMany({})
        await Order.collection.deleteMany({})

        await Category.insertMany(categoryData)
        const reviews = await Review.insertMany(reviewdata)
        const sampleProducts = productDate.map((product) => {
            reviews.map((review) => {
                product.reviews.push(review._id)
            })
            return{...product}
        })
        await Product.insertMany(sampleProducts)
        await User.insertMany(usersdata)
        await Order.insertMany(ordersData)

        console.log("Seeder data proceeded successfully")
        process.exit()
    } catch (error) {
        console.error("Error while proccessing seeder data", error)
        process.exit(1);
    }
}
importData()

