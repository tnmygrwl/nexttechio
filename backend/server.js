const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const achieve = require('./routes/api/achieve');

const app = express();

app.use(bodyParser.json())

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongoDB
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('DB Connected!'))
    .catch(err => console.log(err));

// Use routes
app.use('/api/achievements', achieve);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))