const express = require('express')
const router = express.Router()

 
// define the home page route

router.get('/',(req,res)=>{
    res.send('blogs home page')
})
// defin the about route
router.get('/about',(req,res)=>{
    res.send('About birds')
})
// defin the about route
router.get('/blogpost/:slug',(req,res)=>{
    res.send(`fetch the blogpost for ${req.params.slug}`)
})
module.exports= router