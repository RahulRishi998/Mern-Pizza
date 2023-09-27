const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/pizzashop")
.then(()=>{
    console.log("Connection Successfully")
}).catch(()=>{
    console.log("No Connection")
})

module.exports = mongoose