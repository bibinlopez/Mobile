const mongoose= require('mongoose')
const schema = mongoose.Schema;
const colorSchema= new schema({
    color:{type:String, require: true},
    createdtime: {type:Date, require: false}
})

colorSchema.pre('save',function(next){
    var date = new Date();
    if(!this.createdtime){
        // console.log(date)
        this.createdtime= date;
    }
    next()
})

module.exports= mongoose.model('Color',colorSchema)