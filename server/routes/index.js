const Router = require('express');
const router = new Router();
const commentRouter = require('./commentRouter');

router.use('/', commentRouter);


module.exports = router;