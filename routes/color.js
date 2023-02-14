var express = require('express');
var router = express.Router();
const colorController = require('../Controller/color')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/uploadColor',colorController.addColor)
router.get('/listColor',colorController.listColor)
router.get('/getColor/:id',colorController.getColor)
router.delete('/deleteColor/:id',colorController.deleteColor)
router.put('/updateColor/:id',colorController.updateColor)


module.exports = router;