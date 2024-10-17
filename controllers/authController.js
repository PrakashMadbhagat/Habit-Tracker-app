const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async (req, res) => {
    try {
        const { username, password , role} = req.body;
        const hassedPassword = await bcrypt.hash(password , 10);
        const newUser = await User({
            username,
            password : hassedPassword ,
            role
        });
        newUser.save();
        res.status(201).json({ message: "Register User Successfully", newUser })
    } catch (error) {
        res.status(500).json({ message: "Error Registering User", error: error.message })
    }
};

const login = async (req,res) =>{
    try {
        const { username, password , role} = req.body;
        const user = await User.findOne({username});
        const isMatch = await bcrypt.compare(password , user.password);
        if(!user || ! isMatch){
            res.status(401).json({ message: "Invalid credentials"})
        }
        const token = jwt.sign({ userId: user._id , role : user.role},process.env.SECRET,{expiresIn : '1h'});
        res.cookie('token' , token , {httpOnly : true , secure : true})
        res.status(201).json({ message: "Login User Successfully", token : token })
    } catch (error) {
        res.status(500).json({ message: "Error Login User", error: error.message })
    }
}

module.exports = { register , login }