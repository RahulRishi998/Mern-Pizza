const express = require("express");
const app = express()
const Port = process.env.PORT||5000
require("./src/db/conn")
const Pizza = require("./src/db/model")
const pizzaRoutes = require("./src/routes/pizzasRoutes")
const userRoutes = require("./src/routes/userRoutes")
const orderRoutes = require("./src/routes/orderRoutes")
const cors = require("cors")

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use("/api/pizzas/",pizzaRoutes)
app.use("/api/users/",userRoutes)
app.use("/api/orders/",orderRoutes)
app.use(cors())

app.get("/" ,(req,res)=>{
    res.send("working server")
})


app.listen(Port , ()=>{
    console.log(`Server is running on port ${Port} `)
})