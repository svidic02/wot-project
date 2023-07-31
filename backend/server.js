const express=require('express')
const app=express()

app.listen(2000,()=>
{
    console.log('listening on port 4000!')
})

app.get('/',(req,res)=>
{
    res.json({mssg:'Welcome to the app'})
})