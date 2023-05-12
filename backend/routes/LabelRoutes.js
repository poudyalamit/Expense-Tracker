const express=require('express')
const router = express.Router()
const controller=require('../Controller/Controller');

router.get('/labels',controller.get_Labels);


module.exports=router;