const express = require('express')
const app = express()

const port = process.env.port || 5000

let name = "Saumya"
let waitingreq = []
app.get("/",(req,res)=>
{
    res.sendFile(__dirname + '/index.html')
})

app.get("/getname",(req,res)=>
{
    if(name !== req.query.lastname)
    {
        res.json({name});
    }
    else{
        waitingreq.push(res);
    }
})

app.get("/updatename",(req,res)=>
{
    name = req.query.name;
    while(waitingreq.length>0)
    {
        const client = waitingreq.pop();
        client.json({name})
    }
    res.send({success : "DATA UPDATED"})
})

app.listen(port,()=>
{
    console.log(`server listening at ${port}`)
})