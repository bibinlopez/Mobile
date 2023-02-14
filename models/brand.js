const mongoose= require('mongoose')
const schema = mongoose.Schema;
const brandSchema= new schema({
    name:{type:String, require: true},
    details:{type:String, require: true},
    createdtime: {type:Date, require: false}
})

brandSchema.pre('save',function(next){
    var date = new Date();
    console.log(date);
    if(!this.createdtime){
        // console.log(date)
        this.createdtime= date;
    }
    next()
})

module.exports= mongoose.model('Brand',brandSchema)