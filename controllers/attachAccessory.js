const {Cube} = require("../models/cube");
const Accessory = require("../models/accessory");
const mongoose = require("mongoose");

module.exports = async function (req, res) {
    const {accessory} = req.body;
    const cubeId = req.params._id;
    await Cube.updateOne({_id: cubeId},
        {
            $addToSet: {accessories: [mongoose.Types.ObjectId(accessory)]}
        }
    );

    res.redirect(`/attach/accessory/${req.params._id}`);
    req.app.locals.statusCode = 302;

}