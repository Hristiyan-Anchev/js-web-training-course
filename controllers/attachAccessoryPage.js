const Accessories = require("../models/accessory");
const Cube = require("../models/cube");
const mongoose = require("mongoose");

module.exports = async function (req, res) {
    try {

        const  currentCube = await Cube.findById(req.params._id);


        const unassignedAccessories = currentCube.accessories.length === 5 ? [] : await Accessories.find({
            _id: {
                $nin: currentCube.accessories
            }
        }).lean();




        res.render("attachAccessory", {
            _id: currentCube._id,
            name: currentCube.name,
            imageUrl: currentCube.imageUrl,
            options: unassignedAccessories
        });
        req.app.statusCode = undefined;
    } catch (e) {
        console.log(e.message);
    }
}