function something(message,delay)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            console.log("promise resolved",message)
            resolve("promise resolved",message);
        },delay)
    })
}