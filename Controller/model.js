const Model = require('../models/model')

const modelController = {

    addModel: (req, res) => {
        
        Model.findOne({$and:[{name:req.body.name}, {colorId:req.body.colorId}]}) // no result : if add another color
        .then((result)=>{
            if(result){
                return res.status(200).json({
                    success: false,
                    error: "Model already exist"
                })
            }else{
                console.log("controller filename", req.file.filename);
                var photo=`/model/${req.file.filename}`
                var data = {
                    name:req.body.name,
                    price:req.body.price,
                    brandId: req.body.brandId,
                    colorId: req.body.colorId,
                    quantity: req.body.quantity,
                    image: photo
                } 
                console.log("this is req.body ",data);
                var product = new Model(data)
                product.save()
                .then((result) => {
                return res.status(200).json({
                    success: true,
                    data: result
                    })
                })
                .catch((err) => {
                 return res.status(200).json({
                 success: false,
                error: err
        })
    })
            }
        })
        .catch((err)=>{
            return res.status(200).json({
                success: false,
                error: err
            })
        })
        
    },
    listModel: (req, res) => {

        Model.find({brandId:req.params.id})
            .populate("brandId",{ name: 1 ,_id:0})
            .populate("colorId",{ color: 1 ,_id:0})
            .then((result) => {
                console.log(result);
                return res.status(200).json({
                    success: true,
                    data: result
                })
            })
            .catch((err) => {
                return res.status(200).json({
                    success: false,
                    error: err
                })
            })

    },
    getModel: (req, res) => {
        
        Model.findById(req.params.id)
            .populate([{path:"brandId",select: {name:1,_id:0}},{path:"colorId",select:{color:1,_id:0}}])
            // .populate("colorId")
            .then((result) => {
                console.log(result);
                if (result) {
                    return res.status(200).json({
                        success: true,
                        data: result
                    })

                } else {
                    return res.status(422).json({
                        success: false,
                        error: 'Product not Found'
                    })
                }
            })
            .catch((err) => {
                return res.status(422).json({
                    success: false,
                    error: err
                })
            })

    },
    updateModel: (req, res) => {
        
        var data = req.body
        Model.findOne({name:data.name})
        .then((result)=>{
            if(result){
                console.log(result);
                return res.status(200).json({
                    success: false,
                    error: "Model already exist"
                })
            }else{
                Model.findByIdAndUpdate(req.params.id, { $set: req.body },)
                .then((result) => {
                console.log(result);
                if(result){
                    return res.status(200).json({
                    success: true,
                    data: "Successfully Updated"
                    })
                }else{
                    return res.status(422).json({
                    success: false,
                    data: "Model not Found"
                })
             }
            
        })
        .catch((err) => {
            return res.status(422).json({
                success: false,
                error: err
            })
        })
                
            }
        })
        .catch((err)=>{
            return res.status(200).json({
                success: false,
                error: err
            })
        })

    },
    deleteModel: (req, res) => {
        Model.findByIdAndRemove(req.params.id)
            .then((result) => {
                console.log(result);
                if(result){
                    return res.status(200).json({
                        success: true,
                        data: "Successfully Deleted"
                    })
                }else{
                    return res.status(422).json({
                        success: false,
                        data: "Product not Found"
                    })
                }
                
            })
            .catch((err) => {
                return res.status(422).json({
                    success: false,
                    error: err
                })
            })

    }


}



module.exports = modelController;

