const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        // unique: true,
    },
    number: {
        type: Number,
        // unique : true,
        required: true,
    },
    score:{
        type: Number,
        default : 0
        
    },
    totalTime:{
        type : Number,
        default : 0
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User