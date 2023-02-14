
const Color = require('../models/color')

const colorController={
    addColor : (req,res)=>{
        var data = req.body
        Color.findOne({color:req.body.color})
        .then((result)=>{
            if(result){
                console.log(result);
                return res.status(200).json({
                    success: false,
                    error: "Color already exist"
                })
            }else{
                var color = new Color(data)
                color.save()
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

    },
    listColor : (req,res)=>{
        Color.find()
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
    getColor : (req,res)=>{
        Color.findById(req.params.id)
            .then((result)=>{
                if(result){
                    return res.status(200).json({
                        success: true,
                        data : result
                    })
                }else{
                    return res.status(200).json({
                        success: false,
                        error: "Color not found"
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
    updateColor : (req,res)=>{
        var data = req.body
        Color.findOne({color:data.color})
        .then((result)=>{
            if(result){
                console.log(result);
                return res.status(200).json({
                    success: false,
                    error: "Color already exist"
                })
            }else{
                Color.findByIdAndUpdate(req.params.id,{$set: req.body})
            .then((result)=>{
                if(result){
                    return res.status(200).json({
                        success: true,
                        data : result
                    })
                }else{
                    return res.status(200).json({
                        success: false,
                        error: "Color not found"
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
    deleteColor : (req,res)=>{
        Color.findByIdAndRemove(req.params.id)
            .then((result)=>{
                if(result){
                    return res.status(200).json({
                        success: true,
                        data : "Deleted Color successfully"
                    })
                }else{
                    return res.status(200).json({
                        success: false,
                        error: "Color not found"
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


    module.exports = colorController