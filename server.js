

const express=require("express")
const nodemailer=require("nodemailer")
const bodyParser=require("body-parser")

const app=express()

app.use(bodyParser.urlencoded({extended:true}))

app.post("/order",async(req,res)=>{

const {name,email,phone,address,payment,cart}=req.body

const transporter=nodemailer.createTransport({
service:"gmail",
auth:{
user:"YOUR_GMAIL@gmail.com",
pass:"YOUR_APP_PASSWORD"
}
})

await transporter.sendMail({
from:"Majestic Store",
to:"YOUR_GMAIL@gmail.com",
subject:"طلب جديد من Majestic",
text:`
اسم: ${name}
ايميل: ${email}
موبايل: ${phone}
عنوان: ${address}
الدفع: ${payment}

المنتجات:
${cart}
`
})

res.send("تم استلام الطلب")

})

app.listen(3000,()=>{
console.log("server running")
})


