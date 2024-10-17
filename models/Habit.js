const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    title : {
        type: String,
        required : true
    },
    frequency : {
        type : String ,                   
        required : true
    },
    streak : {
        type : Number ,
        default : 0
    },
    progress : {
        type : Number ,
        default : 0
    },
    createdAt : {
        type : Date ,
        default : Date.now
    }
});

module.exports = mongoose.model('Habit' , habitSchema);