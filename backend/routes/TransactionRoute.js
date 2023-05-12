const express=require('express')
const router = express.Router()
const controller=require('../Controller/Controller');

router.post('/create',controller.create_Transaction);
router.get('/get',controller.get_Transaction);
router.delete('/delete',controller.delete_Transaction);

module.exports=router;