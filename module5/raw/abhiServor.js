// require express
const express = require("express");
// you have to write it ->app signifies -> your servor
const app = express();
app.get("/",function(req,res){
    res.send("Hello from Servor");
})

app.listen(3000,function(){
    console.log("Servor Started at port 3000");
})