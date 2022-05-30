var express = require('express');
var bodyParser = require('body-parser')
var data= require('./service/getdata')
var cors =require('cors')
var app = express();
var jsonParser = bodyParser.json()
app.use(cors())
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.listen(3000,()=>{console.log("đang chạy")});
app.post("/api/baitheonam",jsonParser,data.getyear);
app.post("/api/baitheothang",jsonParser,data.getmonth);
app.get("/api/countND",data.countTk);
app.get("/api/countBVCD",data.countBv)