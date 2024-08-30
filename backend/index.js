const express=require("express")
const cors=require("cors")
const app=express()
app.use(cors())
var uname="aswin"
var pass=123
var email="aswin@gmail.com"
var contact=1234567890

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post("/",(req,res)=>{
    console.log(req.body.username)
    // console.log(req)
    if(req.body.username==uname && req.body.password==pass && req.body.email==email && req.body.contact==contact){
        res.send(true)
    }
    else
    {
        res.send(false)
    }
})

app.listen(5000,()=>{
    console.log("Server Started......")
})