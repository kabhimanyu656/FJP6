// require express
const express = require("express");
// you have to write it ->app signifies -> your servor
const app = express();

// get karna hai from sayHello
app.get("/sayHello",function(req,res){
    res.send("Hello from Servor");
})
// get karna hai from sayBye
app.get("/sayBye",function(req,res){
    res.send("Bye from Servor");
})

app.listen(3000,function(){
    console.log("Servor Started at port 3000");
})