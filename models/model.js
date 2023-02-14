const mongoose = require('mongoose')
const schema = mongoose.Schema;
const modelSchema= new schema({
    name:{type:String , require : true},
    price:{type:Number , require : true},
    brandId:{type: schema.Types.ObjectId ,ref:'Brand', require : true},
    colorId:{type: schema.Types.ObjectId ,ref:'Color', require : true},
    quantity:{type:Number , require : true},
    image:{type:String, require: true},
    uploadedDate:{type:Date , require : false}

})

modelSchema.pre('save',function(next){
    var date =new Date();

    

    if(!this.uploadedDate) {
        this.uploadedDate= date;  
        console.log(this.uploadedDate);     
    }
    next()
})
module.exports = mongoose.model('Model',modelSchema)