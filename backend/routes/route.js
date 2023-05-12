const express=require('express')
const router = express.Router()
const controller=require('../Controller/Controller');

router.post('/create',controller.create_Categories);

module.exports=router;