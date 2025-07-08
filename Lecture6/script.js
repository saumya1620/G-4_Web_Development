//promise is an object 

const promise1 = new Promise((resolve,reject)=>
{
    setTimeout(()=>
    {
        resolve("Promise Resolved");
    },3000)
})
promise1
.then((res)=>console.log(res))
.then(()=> setTimeout(()=>
{
    console.log("p2")
},2000))
.catch((err)=> console.log(err))
.then(()=>setTimeout(()=>
{
    console.log("p3")
},5000))
.catch((err)=> console.log(err))
.then(()=>setTimeout(()=>
{
    console.log("p4");
},1000))
.catch((err)=>console.log(err));

// function something(message,delay)
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(()=>
//         {
//             console.log("promise resolved",message)
//             resolve("promise resolved",message);
//         },delay)
//     })
// }
// const promise1 = new Promise((resolve,reject)=>
// {
//     setTimeout(()=>
//     {
//         resolve("Promise Resolved");
//     },3000)
// })
// promise1.then((res)=>console.log(res))
// .then(()=>
// {
//     return something("p2",4000);
// })
// .catch((err)=>console.log("Error",err))
// .then(()=>
// {
//     return something("p3",3000);
// })
// .catch((err)=>console.log("Error",err))
// .then(()=>
// {
//     return something("p4",1000);
// })
// .catch((err)=>console.log("Error",err))
