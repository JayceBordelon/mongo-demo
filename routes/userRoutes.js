const express = require('express');
const router = express.Router();
const User = require('../schemas/userSchema');


router.get('/test', async(req, res) => {
    try {
        const newUser = new User({username: "jayce"});
        const fromMongo = await newUser.save();
        res.status(200).json({user: fromMongo});

    } catch (err) {
        console.error(err);
        res.status(400).json({message: err});
    }
});

router.get("/all", async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({users: users});

    } catch (err) {
        console.error(err);
        res.status(400).json({message: err});
    }
});

module.exports = router;