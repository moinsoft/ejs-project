const router = require('express').Router();
const { homeController, contactController, bodyController} = require('./controller')


router.route('/').get(homeController).post(bodyController);

router.get('/contact', contactController);


module.exports = router;









