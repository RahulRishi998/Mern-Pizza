const mongoose = require("mongoose");

const pizzaSchema = mongoose.Schema({
    name:{type:String , require},
    varient:[],
    prices:[],
    category:{type:String,require},
    image:{type:String , require},
    description:{type:String,require}
},{timestamp:true})


const pizzaModel = mongoose.model("pizzas", pizzaSchema)

module.exports = pizzaModel