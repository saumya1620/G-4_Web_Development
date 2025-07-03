// let cart  = {"shoes" : 200 , 
//     "dress" :300,
//     "Earings" : 400
// }
// let total=0;
// function ordercart(cart)
// {
//     console.log("Total no of products", Object.keys(cart).length);
//     let total =0;
//     for(let key in cart)
//     {
//         total+=cart[key];
//     }
//     return total;
//     //setTimeout(cart,3000);
// }
// function orderSummary()
// {
//     console.log("Total no. of products",Object.keys(cart).length , "Total amount to be paid : ",total);
//     console.log("Order Id", Math.random(100000 , 99999));
//     //setTimeout(3000);
// }
// function paymentGateway()
// {
//     console.log(orderSummary());
//     console.log("Payment is successfull");
// }
// function successfullOrder()
// {
//     console.log(paymentGateway());

// }

// ordercart(() =>
// {
//     orderSummary(()=>
//     {
//         paymentGateway(()=>
//         {
//             successfullOrder();
//         })
//     })
// })


//filter
// let arr = [1,2,3,4,5,6,7,8,9];
// Array.prototype.mapFilter = function(logic)
// {
//     let output =[];
//     for(let i=0;i<this.length;i++)
//     {
//        if(logic(this[i]))
//        {
//         output.push(this[i]);
//        }
//     }
//     return output;
// }
// function isodd(x)
// {
//     if(x%2!=0)
//     {
//         return x;
//     }
//     //return;
// }
// function isprime(x)
// {
//     if(x==1) return 1;
//     else if(x==3) return 1;

//     else 
//     {for(let i=2; i<x ;i++)
//     {
//         if(x%i==0)
//         {
//             return false;
//         }
//     }
// }
//     return true;
// }
// function ifprime(x)
// {
//     if(x%2!=0)
//     {
//         for(let i=x-1;i>=2;i++)
//         {
//             if(isprime(i)) return i ;
//         }
//     }
// }
//  let a = arr.mapFilter(ifprime);
//  console.log(a);
let arr =[1,2,3,4,5]

Array.prototype.reducearr =  function(logic,curr)
{
let acc =curr;
let start=0;
if(curr===undefined)
{
    acc = this[0];
    start++;
}

for(let i=start;i<this.length;i++)
{
    acc = logic(acc, this[i],i, this);
}
return acc;


}
function sum(acc, val)
{
    return acc+val;
}
const res = arr.reducearr(sum,0);
console.log(res);