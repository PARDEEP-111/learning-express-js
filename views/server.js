const express = require("express")
const path = require('path');
const app = express()
const tort = 3000

// app.set('ejs', path.join(__dirname, 'ejs'));

app.set('view engine', 'ejs');
app.get("/", (req,res)=>{
    let siteName = "addidas i am adidas"
    res.render("index", {siteName : siteName})
    
})
app.listen(tort, ()=>{
console.log(`hi  here is port ${tort}`);

})