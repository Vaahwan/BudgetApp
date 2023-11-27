const express = require("express");
const { userModel } = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRoute = express.Router(); // Use express.Router() to create a router instance

userRoute.get("/", async (req, res) => {
    try {
        res.send("Welcome to the login page");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

userRoute.post("/register", async (req, res) => {
    try {
        console.log(req.body);
        if (!req.body) {
            return res.status(400).send("Request body is empty or undefined.");
        }

        const { name, email, password } = req.body;

        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.send("This email is already registered.");
        }
        // this line of code will cryptify the password
        let hashedPassword = await bcrypt.hash(password, 8)
            
        const user = new userModel({ name, email, password : hashedPassword });
        await user.save();
        res.send("User has been registered successfully.");
    } catch (error) {
        res.status(500).send(error.message);
    }
});

userRoute.post("/login", async(req,res)=>{
    try{
        const {email,password} = req.body;
        const existingUser = await userModel.findOne({email});
        if(!existingUser){
            res.send("this user is not exist please register first");
        }
        // this code will check that input password match with saved password or not
        const isValidPassword = await bcrypt.compare(password,existingUser.password);
        if(!isValidPassword){
            res.send("password is not correct")
        }
        // here we will send token
    }
    catch(error){
        res.status(500).send(error.message)
    }
})

module.exports = { userRoute };
