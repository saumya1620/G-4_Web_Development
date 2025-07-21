Promise.resolve("Resolved").then(console.log('P3'))
process.nextTick(()=>
{
    console.log("THIS IS NEXT2")
});