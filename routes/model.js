var express = require('express');
var router = express.Router();
const multer = require('multer');

var storage = multer.diskStorage({
    destination: './public/modelImage' ,
    filename: function (req, file, cb) {
      
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  var upload = multer({ storage: storage })


const modelController = require('../Controller/model')



router.post('/uploadModel',upload.single('photo'),modelController.addModel)
router.get('/listModel/:id',modelController.listModel)
router.get('/getModel/:id',modelController.getModel)
router.delete('/deleteModel/:id',modelController.deleteModel)
router.put('/updateModel/:id',modelController.updateModel)

module.exports = router;
