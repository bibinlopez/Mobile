var express = require('express');
var router = express.Router();
const brandController = require('../Controller/brand')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addbrand');
});
router.get('/list', function(req, res, next) {
  res.render('listBrand');
});

router.post('/uploadBrand',brandController.addBrand)
router.get('/listBrand',brandController.listBrand)
router.get('/getBrand/:id',brandController.getBrand)
router.delete('/deleteBrand/:id',brandController.deleteBrand)
router.put('/updateBrand/:id',brandController.updateBrand)

module.exports = router;
