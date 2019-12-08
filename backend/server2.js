  
let express = require("express")
let http = require("http")
let mongoose = require("mongoose")
let ObjectID= require("mongodb").ObjectID


let app = express()

let server = http.createServer(app)


let use = ()=>{}

var hello = 1




//let url = "mongodb://localhost:27017/appointment";
//  let url = "mongodb+srv://admin:Hell1234%25@appointment-yqyzr.mongodb.net/appointment?retryWrites=true";

 let url = 'mongodb+srv://hop:hello12345@cluster0-tuagx.mongodb.net/nextTech?retryWrites=true&w=majority'
 
// let option={ server: { 
  
//   reconnectTries: Number.MAX_VALUE,
//   // sets the delay between every retry (milliseconds)
//   reconnectInterval: 1000 
//   } 
// };

app.use(express.static('public'));
app.use(require("body-parser").json())
server.listen(process.env.PORT||2000, ()=>{
  console.log("connected to server");
})


//Monogo connect 

let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB,{useNewUrlParser:true,poolSize: 10, reconnectTries: Number.MAX_VALUE, reconnectInterval: 1000} );

mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

///////////////////////

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

