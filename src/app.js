const express= require('express');
const app=express();
const hbs=require('hbs')
const path=require('path')
const port=process.env.port || 3000;

const staticPath=path.join(__dirname,'../public');
const templete_path=path.join(__dirname,'../templetes/views')
const partials_path=path.join(__dirname,'../templetes/partials')



app.set('view engine','hbs')
app.set('views',templete_path)
hbs.registerPartials(partials_path)

app.use(express.static(staticPath))

app.get("/",(req,res)=>{
    res.render('index');
})

app.get("/about",(req,res)=>{
    res.render('about');
})

app.get("/about/*",(req,res)=>{
    res.render('404');
})

app.get("/weather",(req,res)=>{
    res.render('weather');
})

app.get("*",(req,res)=>{
    res.render('404',{
        errorMsg:'Opps! Page Not Found'
    });
})
app.listen(port,()=>{
    console.log(`listen to the port at ${port}`)
})