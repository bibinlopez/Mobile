const Brand = require('../models/brand')

const brandController={
    addBrand : (req,res)=>{
        var data = req.body
        Brand.findOne({name:req.body.name})
        .then((result)=>{
            if(result){
                console.log(result);
                return res.status(200).json({
                    success: false,
                    error: "Brand already exist"
                })
            }else{
                var brand = new Brand(data)
                brand.save()
                .then((result)=>{
                return res.status(200).json({
                    success: true,
                    data : result
                })
                 })
                .catch((err)=>{
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
    listBrand : (req,res)=>{
        Brand.find()
            .then((result)=>{
                return res.status(200).json({
                    success: true,
                    data : result
                })
            })
            .catch((err)=>{
                return res.status(200).json({
                    success: false,
                    error: err
                })
            })
            
    },
    getBrand : (req,res)=>{
        Brand.findById(req.params.id)
            .then((result)=>{
                if(result){
                    return res.status(200).json({
                        success: true,
                        data : result
                    })
                }else{
                    return res.status(200).json({
                        success: false,
                        error: "Brand not found"
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
    updateBrand : (req,res)=>{
        var data = req.body
        Brand.findOne({name:req.body.name})
        .then((result)=>{
            if(result){
                console.log(result);
                return res.status(200).json({
                    success: false,
                    error: "Brand already exist"
                })
            }else{
                Brand.findByIdAndUpdate(req.params.id,{$set: req.body})
            .then((result)=>{
                if(result){
                    return res.status(200).json({
                        success: true,
                        data : result
                    })
                }else{
                    return res.status(200).json({
                        success: false,
                        error: "Brand not found"
                    })
                }
            })
            .catch((err)=>{
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
    deleteBrand : (req,res)=>{
        Brand.findByIdAndRemove(req.params.id)
            .then((result)=>{
                if(result){
                    return res.status(200).json({
                        success: true,
                        data : "Deleted Brand successfully"
                    })
                }else{
                    return res.status(200).json({
                        success: false,
                        error: "Brand not found"
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
}

module.exports = brandController