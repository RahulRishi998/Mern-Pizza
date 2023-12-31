const express = require("express")
const router = express.Router()
const {v4: uuidv4} = require("uuid")
const stripe = require("stripe")("sk_test_51NNBcBSHmXlfZWsqR9reGFZoHtIJj6MfOWYroVdCZCXjILMRFn6W6bLQOULqSRGPh84WZtrOEIo0lPQf7KZ2DWRE00HD7Ow3wY")

router.post("/placeorder",async (req,res)=>{

    const {token,subtotal,currentUser,cartItems} = req.body;

    console.log(currentUser)
    console.log(cartItems)
    console.log(token)

    try {
        const customer = await stripe.customers.create({
            email:token.email,
            source:token.id
        })
        
        const payment = await stripe.charges.create({
            amount:subtotal*100,
            currency:"inr",
            customer:customer.id,
            receipt_email:token.email
        },{
            idempotencyKey:uuidv4()
        })

        if(payment){
            res.send("Payment Done")
        }else{
            res.send("Payment Failed")
        }
     } catch (error) {
        return res.status(400).json({message:"Something went wrong..." + error})
        
     }
})

module.exports = router