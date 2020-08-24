const mongoose = require("mongoose");

const acessorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        maxlength:50
    },
    // cubes:[{type:mongoose.Schema.Types.ObjectId,ref:"cube"}]
});

const accessoryModel = mongoose.model("accessory",acessorySchema);


module.exports = accessoryModel;