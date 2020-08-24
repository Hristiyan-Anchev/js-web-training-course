const {mongoose} = require("../config/mongoClient");

const schema = {
    name:String,
    description:String,
    imageUrl:String,
    difficultyLevel: Number,
    accessories:[{type:mongoose.Schema.ObjectId,ref:"accessory"}]
};

dumpData = function dumpData(){
    return {
        name:this.name,
        description:this.description,
        imageUrl:this.imageUrl,
        difficultyLevel: this.difficultyLevel
    }
}


module.exports = {
    schema,
    schemaMethods:{
        dumpData
    }
}