const express=require('express')
const router = express.Router()
const controller=require('../Controller/Controller');

router.get('/categories',controller.create_Categories);

module.exports=router;