const express = require('express');
const router = express.Router();

const middleware = (req,res,next) => {
    console.log(`middleware work is done`);
    next();
}

router.get('/',(req,res)=>{
    res.send(`welcome to demo home page from route`);
    console.log(`respomse accepted`);
})

router.post('/register', (req,res) => {
    console.log(req.body);
    res.json( { message:req.body });
})

router.get('/about',middleware,(req,res)=>{
    console.log(`after middleware work is done`);
    res.send(`welcome to demo about page from route`);
    console.log(`respomse accepted`);
})

module.exports = router;