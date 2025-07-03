// console.log("SCRIPT STARTS");
// setTimeout(()=>
// {
//     console.log("i am in timeout1");
// },2000)
// setTimeout(()=>
// {
//     console.log("this is timeout2");
// },3000)

// 


let arr = [2,3,4,6,8,5];

// function doublearr(arr)
// {
//     let arr2 = [];
//     for(let i=0;i<arr.length;i++)
//     {
//         arr2[i]=arr[i]*2;
//     }
//     return arr2;
// }
// const res=doublearr(arr);
// console.log(res);

Array.prototype.doublearr= function(data)
{
    let output = [];
    for(let i=0;i<arr.length;i++)
    {
        output.push(arr[i]*2);
    }
    return output;
}
const output = arr.doublearr();
console.log(output)