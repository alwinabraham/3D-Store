const express = require("express")

const app = express()

app.listen(3000,()=>{
    console.log("Server Created");
})

app.get("/",(req,res)=>{
    res.send("Hello:hey")
})