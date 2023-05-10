const routes = require('express').Router();
const controller=require('../Conroller/controller');

routes.route('/api/categories')
    .get(controller.create_Categories);


module.exports = routes;