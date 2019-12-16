const express = require('express')
const router = express.Router();
let ObjectID = require("mongodb").ObjectID;



const News = require('../../models/newsflash');

router.get('/news', (req, res) => {
    News.find()
        .sort({ date: -1 })
        .then(news => res.json(news))
});


// CREATE NEWS
router.post('/createnews', (req, res) => {
    const newNews = new News({
        description : req.body.description,
    });
    newNews.save().then(news => res.json(news));

});


//EDIT NEWS

router.post('/edit',(req,res)=>{
    let data = req.body;
    let id = req.body.id;
    // var query = {'_id':req.body.id};
    let myquery = { _id: ObjectID(`${id}`) };

    
   News.findOneAndUpdate(myquery,data,(err,doc)=>{
    if (err) return res.send(500, { error: err });
    return res.send("succesfully saved");
   })
})



// Delete

router.post('/delete/:id', (req, res) => {
    News.findById(req.params.id)
        .then(achieve => achieve.remove().then(() => res.json({success : true})))
        .catch(err => res.status(404).json({success : false}))
});




module.exports = router;