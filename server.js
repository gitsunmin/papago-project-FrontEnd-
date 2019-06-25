const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;
app.use(express.static(path.join(__dirname,'www')));

app.get("*",(req,res)=>{
    console.log(req.path);
    res.sendFile(path.join(__dirname,'www/index.html'));
})
app.listen(port,function(){
    console.log("server stared port["+port+"]");
})



