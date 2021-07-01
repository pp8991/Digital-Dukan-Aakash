const { error } = require('console');
const express = require('express')
const { Parser } = require('json2csv');


const router = express.Router()

const User = require('../models/user');

router.get('/', async (req, res) => {
    res.render('index');
});

router.post('/submit', async (req, res) => {
    const user = new User(req.body);
    try{
        await user.save();
        return res.render('thank');
    }
    catch(err){
        console.log(err)
        res.status(500).json('Server Error')
    }
});

//get all
router.get('/GetAllResponse/Download', async(req, res) =>{
    var mysort = { date: -1 };
    const fields = ['pr_name', 'pr_email', 'pr_country', 'pr_mobile', 'pr_product', 'pr_plan_id', 'pr_inst_coll', 'pr_state', 'pr_city'];
    const opts = { fields };
    try{
        
        const user = await User.find().sort(mysort);
        const parser = new Parser(opts);
        const csv = parser.parse(user);
        res.attachment('data.csv');
        return res.send(csv);
    }catch(err){
        res.status(500).json(err);
    }
})


module.exports = router