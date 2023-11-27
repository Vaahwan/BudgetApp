const mongoose = require("mongoose");

const expenseDetailSchema = new mongoose.Schema({
    userId : {type:String,required:true},
    date : {type:Date,required:true},
    amount : {type:Number,required:true},
    spentOn : {type:String,required:true},
    category : {type:String,required:true}
})

const expenseDetailModel = mongoose.model("expenseDetail",expenseDetailSchema);