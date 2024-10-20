const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String ,
        unique : true ,
        require : true
    },
    password : {
        type : String ,
        require : true
    },
    role : {
        type : String ,
        enum : ['user' , 'admin'],
        default : 'user'
    }
});

module.exports = mongoose.model('User' , userSchema);