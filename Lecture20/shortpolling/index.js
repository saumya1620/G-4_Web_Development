const express = require('express')
const app = express()
port = process.env.port || 3000

let name = "Saumya"
app.get("/",(req,res)=>
{
    res.sendFile(__dirname + '/index.html')
})

app.get("/getname",(req,res)=>
{
    res.send({name})
})
app.get("/updatename",(req,res)=>
{
    name = "AAKASH"
    res.send({name})
})
app.listen(port,()=>
{
    console.log(`server listening ${port}`)
})