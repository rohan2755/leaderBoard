const User = require('../Models/User');

async function user(req,res){
    try{
        const {userId, timeTaken, score} = req.body
        console.log(userId, "userId")
        const user = await User.findById(userId);
        user.totalTime = timeTaken
        user.score = score
        await user.save();
        res.json({
            message : "User Saved",
            data : user,
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = user