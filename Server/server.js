const express = require('express')
const cors = require('cors')
// const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./Config/ConfigDB')
const router = require('./routes/index')
const Event = require('./Models/Events')

const app = express()
app.use(cors({
    origin : process.env.FRONTEND_URL,
    credentials : true
}))
app.use(express.json())
// app.use(cookieParser())

app.use("/api",router)

const PORT = 8000 || process.env.PORT

const events = [
    {
        question : 'BCC Spartan to have a 1st wicket partnership of 85 or more runs vs CC Akademik - Sofia?',
        correctAns : 'No'

    },
    {
        question : 'Anas Khan to score 20 or more runs vs Global Stars?',
        correctAns : 'Yes'
    },
    {
        question : 'CC Akademik - Sofia to take 2 or more wickets at the end of 6 overs vs BCC Spartan?',
        correctAns : 'Yes'
    },
    {
        question : 'CC Akademik - Sofia to take 2 or more wickets at the end of 6 overs vs BCC Spartan?',
        correctAns : 'Yes'
    },
    {
        question : 'BD Lions to have a 5th wicket partnership of 25 or more runs vs Global Stars?',
        correctAns : 'Yes'
    }
]



async function seedDB(){
    await Event.deleteMany({})
    await Event.insertMany(events)
    console.log('Events Seeded')
}

seedDB()




connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})