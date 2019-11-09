const express = require('express');
const router = express.Router();

// Achieve model
const Achieve = require('../../models/achieve');

// @route GET api/achieve
// @desc GET All Achievements
// @acess Public

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

// @route DEL api/achieve
// @desc Delete an achievement

router.delete('/achievements/:id', (req, res) => {
    Achieve.findById(req.params.id)
        .then(achieve => achieve.remove().then(() => res.json({success : true})))
        .catch(err => res.status(404).json({success : false}))
});

module.exports = router;