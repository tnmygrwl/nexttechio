const express = require('express');
const router = express.Router();
let ObjectID = require("mongodb").ObjectID;


// Achieve model
const User = require('../../models/user');

router.get('/',(req,res) =>{
    res.json(0);
})
router.post('/auth', (req, res) => {
    let name= req.body.name
    let pass = req.body.password

    User.find({name:name,password:pass})
        .then(found => {
            console.log(found)
            if(Object.keys(found).length===0)
                res.json(0)
            else
                res.json(1)
        })
});

// router.post('/add', (req, res) => {
//     const newUser = new User({
//         name : req.body.name,
//         password : req.body.password
//     });

//     newUser.save().then(achieve => res.json(achieve));

// });

module.exports = router;