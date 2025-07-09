// const grandparent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// grandparent.addEventListener("click",()=>
// {
//     console.log("Grandparent is clicked");
// },true)
// parent.addEventListener("click",()=>
// {
//     console.log("Parent is clicked");
// },true)
// child.addEventListener("click",()=>
// {
//     console.log("child is clicked");
// },true)


// const grandparent = document.getElementById("grandparent");
// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// grandparent.addEventListener("click",(e)=>
// {
//     console.log("Grandparent is clicked");
//     e.stopPropagation();
// },false)
// parent.addEventListener("click",(e)=>
// {
//     console.log("Parent is clicked");
//     e.stopPropagation();

// },false)
// child.addEventListener("click",(e)=>
// {
//     console.log("child is clicked");
//     e.stopPropagation();

// },false)


//heading : disadvantage od event listeners 1.) expensive 2.) it works till end of the program 
//below is event delegation : when we cannot afford too many event listener
// const productlist = document.getElementById("productlist")
// productlist.addEventListener("click",(e)=>
// {
//     if(e.target.tagName ==="LI")
//     {
//         console.log("Clicked on : ", e.target.textContent);
//     }
// })
//heading : to add new element

// const newelement = document.createElement("li");
// newelement.textContent = "Sunglasses";
// productlist.appendChild(newelement)

const savetext = document.getElementById("savetext")
mytime();
function mytime()
{
let thistime;
savetext.addEventListener("input",(e)=>
{
    clearTimeout(thistime);
    thistime = setTimeout(()=>
    {
        const textarea = e.target.value;
        console.log("input :",textarea)
    },3000)
})
}
//////////////////////////////////task//////////////////////////////////////////////////////////

