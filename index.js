const express = require("express");

const app = express();

//settings
app.get('/',(req,res)=>{
    res.sendFile(__dirname+ '\\index.html');
});

//activation
app.listen(3000, ()=>{
    console.log("serve is listening on port 3000");
});