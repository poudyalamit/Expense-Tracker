const routes = require('express').Router();


routes.route('/api/categories').get((req, res) => res.send("Get Req From Categories"))


module.exports = routes;