


function welcome(welcomemsg,goodbyemsg)
{
    console.log(welcomemsg+this.studentname+" is a student of class "+this.studentclass+goodbyemsg);
}

const student1 = {
    studentname : "Saumya Jain",
    studentclass : "G-4 4th year"
}
welcome.call(student1,"Good Morning "," Thankyouu..");


// call vs apply vs bind
// call :- immediate directly, argument=seperate value
//apply :- immediate directly, argument :-as array
//bind :- store the value and call later

//currying : that we are not passing every argument at a same time
// function sum(a)
// {
//     return function sum(b)
//     {
//         return function sum(c)
//         {
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(1)(2)(3));

// function chooseBread(bread)
// {
//     return function choosePatty(patty)
//     {
//         return function wantChoose(cheese)
//         {
//             return `you selectes ${bread} with ${patty} patty and for cheese - ${cheese}`;
//         }
//     }
// }

// console.log(chooseBread("sourdough")("paneer")("yes"));

//eventbubbling

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');
grandparent.addEventListener('click',()=>
{
    function fn()
    {

    console.log("GrandParent clicked!!!");
    }
},true)
parent.addEventListener('click',()=>
{
    function fn2()
    {
    console.log("Parent clicked!!");
    }
},true)
child.addEventListener('click',()=>
{
    function fn3()
    {
    console.log("child clicked!!");
    }
},true)
