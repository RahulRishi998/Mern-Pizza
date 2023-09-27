const express = require("express");
const router = express.Router()
const User = require("../db/userModel")

router.post("/register", (req,res)=>{
    const {name,email,password} = req.body

    const newUser = new User({
        name,
        email,
        password,
    })

    try {
        newUser.save()
        res.status(200).send("User Registered Successfully")
    } catch (error) {
        return res.status(500).json({message:error})
    }
})

router.post("/login", async (req,res)=>{
    const {email,password} = req.body 

    try {
        const user = await User.find({
            email,
            password,
        })

        if(user.length > 0){
            const currentUser = {
                name:user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _id:user[0]._id
            }
            res.send(currentUser)
        }else{
            return res.send(400).json({message:"User Login Failed"})
        }
    } catch (error) {
        return res.status(500).json({message:"Something went Wrong"})
    }
})

module.exports = router