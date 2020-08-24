const Cube = require("../models/cube").Cube;
const mongoose = require("mongoose");

module.exports = async function(req,res){

    try{
        const result = await Cube.deleteOne({_id:mongoose.Types.ObjectId(req.params._id)});
        console.log(result);
        console.log(req.params._id);

        res.redirect("/");
    }catch (e){
        console.log(e.message);
    }

}