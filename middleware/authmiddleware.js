const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verifyToken = (req, res , next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: " Access denied. Please login first" })
    }
    try {
        const decode = jwt.verify(token , process.env.SECRET);
        req.user = decode
        next();
    } catch (error) {
        return res.status(500).json({ message: "Invalid token. Authentication failed." })
        
    }
}

exports.isAdmin = (req,res,next) =>{
    if(req.user.role !== 'admin'){
        return res.status(401).json({ message: "Access denied." })
    }
    next();
}