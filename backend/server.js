const express=require('express')
const app=express()
port=3000

app.use(express.json())

const Users=[]

app.post('/signup',(req,res)=>{
    try{
        const {username,email,password,DOB}=req.body
        // console.log(password.length)
        if(!username){
            return res.status(400).send({message:'username cannot be empty'})
        }
        if(!email){
            return res.status(400).send({message:'Email cannot be empty'})
        }
        if(password.length<8 || password.length>16){
            return res.status(400).send({message:'Password length should be greater than 8 or less than or equal to 16'})
        }
        const user={username,email,password}
        Users.push(user)
        return res.status(201).send({message:'Signup successfull',user})

    }catch(err){
        return res.status(500).send({Error:err.message})
    }
})


app.listen(port,()=>{
    console.log(`server runs on http://localhost:${port}`)
})