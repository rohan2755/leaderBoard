const express = require('express');

const router = express.Router();

const userSignUpController = require("../controller/userSignUp")
const getEvents = require("../controller/getEvents")
const submit = require("../controller/submit")
const leaderBoard = require("../controller/leaderBoard")

router.post("/signup",userSignUpController)
router.get("/fetch",getEvents)
router.post("/submit",submit)
router.get("/board",leaderBoard)

module.exports = router