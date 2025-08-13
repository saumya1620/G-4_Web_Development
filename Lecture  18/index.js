const express = require('express');
const app = express();
const multer = require('multer')

const storage = multer.diskStorage({
    destination : function(res,file, cb)
    {
        cb(null, './uploads')
    },
    filename : function(req,file,cb)
    {
        const extension  = file.originalname.split(".");
        const uniquesuffix = Date.now()+'-'+Math.round(Math.random()*1E9) + '-' + extension.at(-1);
        cb(null, file.fieldname+'-'+uniquesuffix)
    }
})
const upload = multer({storage: storage})

var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get("/home",(req,res)=>{
  res.render("home.hbs",{
    companyName: "XYZ COMPANY",
    founder: "Saumya Jain"
  })
})
app.get('/addproduct',(req,res)=>
{
    res.render("form.hbs")
})
app.post('/addproduct' , upload.single('productimage'), function(req,res)
{
    console.log(req.file , req.body)
    res.send('uploaded');
})

app.get("/products",(req,res)=>{
  res.render("product.hbs",{
    products: ["WATCH","SHOES","GLASSES"]
  })
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});