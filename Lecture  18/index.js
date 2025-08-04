const express  = require ('express');
const app = express();

// app.get('/ok' , (req,res)=>
// {
//     res.sendStatus(200);
// })

// app.get('/notfound',(req,res)=>
// {
//     res.sendStatus(404);
// })
app.set('view engine','html')
app.engine('html',require('hbs').__express)

app.get('/home',(req,res)=>
{
    res.render("home.hbs",{
    "Company-name" : "XYZ",
    "Company-owner" : "Saumya Jain"

    })
})

app.get('/products', (req,res)=>
{
    res.render("product.hbs",
        {

        products 
    }
    )
})

app.listen(3000,()=>
{
    console.log("server listening at 3000");
})


