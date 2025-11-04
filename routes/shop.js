const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('shops home page')
})
router.get('/about',(req,res)=>{
    res.send('this is shops  ')
})
module.exports = router