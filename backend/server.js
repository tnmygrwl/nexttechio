const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const achieve = require('./routes/api/achieve');
const user = require('./routes/api/user');
const news = require('./routes/api/newsApi');


const app = express();

app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongoDB
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('DB Connected!'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/achievements', achieve);
app.use('/api/newsapi', news);
app.use('/api/user', user);




app.get("/",(req,res)=>{
    console.log(1);
})


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
