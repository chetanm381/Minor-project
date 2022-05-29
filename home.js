var express = require('express');
var app = express();
app.listen(3000,()=>{
    console.log("started server")
})
app.get('home.html',(req,res)=>{
    res.sendFile(path.resolve("home.html"))
} )