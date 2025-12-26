const express = require('express')
const app = express()
const porat = 3000
const fs = require('fs')
app.use('/', (req,res,next)=>{
    console.log("hie");
    next();
})

app.use('/', (req,res,next)=>{
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`);
    next();
})

app.get('/', (req,res)=>{
    res.send('hello world i am ok')
})
app.get('/about', (req,res)=>{
    res.send('hello about')
   
})


app.listen(porat, ()=>{
console.log(`here is the port ${porat}`);

})
console.log("Running file:", __filename)
