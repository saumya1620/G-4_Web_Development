
// const {unlink} = require ('fs');
// (async function(path)
// {
//     try{
//         await unlink(path);
//         console.log("deleted");
//     }
//     catch(error)
//     {
//         console.log("err");
//     }
// })('/tmp/hello');

// const fs = require('fs');
// const content = 'some content';
// fs.writeFile('./something.txt',content,err=>
// {
//     if(err) console.log(err);
//     else console.log("done")
// }
// )

// const fs= require('fs');
// const content = 'something';
// fs.appendFile('something.txt',content,err=>
// {
//     if(err) console.log(err);
//     else console.log("done")
// }
// )

// const http  = require('http');
// const server = http.createServer((req,res)=>
// {
//     res.writeHead(200 , {"content-type":'text/plain'})
//     res.end("hello")
// })
// server.listen(3000,()=>
// {
//     console.log("server runninng on 8000")
// })

const http = require('http')
let blogContent = [
    {
        "blogTitle" : "Blog Title",
        "blogDescription" : "This is Description",
        "author" : "saumya",
        "date":"21 july 2025"
    }
]
const server = http.createServer((req,res)=>
{
    if(req.method == "GET" && req.url == "/")
    {
        res.writeHead(200, {'content-type':'text/plain'});
        res.end("this is homepage")
    }
    else if (req.method =="GET" && req.url=="/blog")
    {
        res.writeHead(200,{'content-type' : 'application/json'})
        res.end(JSON.stringify(blogContent))
    }
})

server.listen(3000,()=>
{
    console.log("server running on port 3000")
})