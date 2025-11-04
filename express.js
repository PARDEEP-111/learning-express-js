const { log } = require('console')
const express = require ('express')
const blogpost = require('./routes/blogs')
const shops = require('./routes/shop')


const app = express()
const port = 3000
app.use(express.static("public"))
app.use('/blogs',blogpost)
app.use('/shop', shops)

app.get('/',(req,res )=>{
    res.send(' hello world!')
    console.log("i am a  get request");
    
})
app.post('/',(req,res )=>{
    res.send(' hello world i am post!')
    console.log("i am a post request");
    
})
app.put('/',(req,res )=>{ 

    res.send(' hello world i am put!')
    console.log("i am a put request");
     
})
app.get('/templet',(req,res )=>{
    res.sendFile('templetes/templet.html' ,{root: __dirname})
    console.log("i am a  request");
    
})
app.listen(port, ()=>{
log(`exapmle app on the ${port}`)
})