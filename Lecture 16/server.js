// const http = require('http');
// const server = http.createServer((req,res)=>
// {
//     res.writeHead(200,{'content-type' : 'text/plain'});
//     res.end('server running');
// })
// server.listen(3000,()=>
// {
//     console.log('server running at port 3000');
// })

const { MongoClient } = require("mongodb");

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbname = 'saumyamongodb';
async function main()
{
    await client.connect();
    console.log('connected successfully to server');
    const db = client.db(dbname);
    const collection = db.collection('students');
    // const insertresult = await collection.insertMany([
    //     {
    //         name : "Saumya",
    //         rollno : "2210990805",
    //         cgpa : "8.63"
    //     },
    //     {
    //         name : "Saumya",
    //         rollno : "2210990806",
    //         cgpa : "8.63"
    //     },
    //     {
    //         name : "Sarthak",
    //         rollno : "2210990801",
    //         cgpa : "8.63"
    //     },
    //     {
    //         name : "Sanya",
    //         rollno : "2210990792",
    //         cgpa : "8.63"
    //     }
    // ]);
    // console.log('inserted document', insertresult);
    // return 'done';
    // const findres = await collection.find({}).toArray();
    // console.log('found doxuments : ', findres);
    // const filerdics = await collection.find({'name' : 'Saumya'}).toArray();
    // console.log('found documents filtered : ',filerdics);
    // const updaterec = await collection.updateOne({'name' : 'Sarthak'},{$set : {'cgpa' :'8.90'}});
    //console.log('updated docs : ',updaterec);


}

main()
.then(console.log)
.catch(console.err)
.finally(()=> client.close);