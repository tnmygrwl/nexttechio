const express = require('express');
const router = express.Router();
let ObjectID = require("mongodb").ObjectID;


// Achieve model
const Achieve = require('../../models/achieve');

// @route GET api/achieve
// @desc GET All Achievements
// @acess Public

router.get('/',(req,res) =>{
    res.json(0);
})

router.get('/achievements', (req, res) => {
    Achieve.find()
        .sort({ date: -1 })
        .then(achieve => res.json(achieve))
});

// @route POST api/achieve
// @desc Post an achievement

router.post('/achievements', (req, res) => {
    const newAchieve = new Achieve({
        name : req.body.name,
        description : req.body.description
    });

    newAchieve.save().then(achieve => res.json(achieve));

});

router.post('/edit',(req,res)=>{
    let data = req.body;
    let id = req.body.id;
    // var query = {'_id':req.body.id};
    let myquery = { _id: ObjectID(`${id}`) };

    
   Achieve.findOneAndUpdate(myquery,data,(err,doc)=>{
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");

   })



})

router.post('/delete/:id', (req, res) => {
    Achieve.findById(req.params.id)
        .then(achieve => achieve.remove().then(() => res.json({success : true})))
        .catch(err => res.status(404).json({success : false}))
});


// @route DEL api/achieve
// @desc Delete an achievement

router.delete('/achievements/:id', (req, res) => {
    Achieve.findById(req.params.id)
        .then(achieve => achieve.remove().then(() => res.json({success : true})))
        .catch(err => res.status(404).json({success : false}))
});

module.exports = router;