const Accessory = require("../models/accessory");
const Cube = require("../models/cube.js").Cube;

module.exports = async function(req,res){
    const pathToChange = `accessories.${req.params._id}`;
    await Cube.updateOne({_id:req.app.locals.cube_id},{
      "$pull":{accessories:req.params._id}
    }).exec();

    res.redirect(`/details/${req.app.locals.cube_id}`);
}