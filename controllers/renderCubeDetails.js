const models = require("../models/cube");
const mongoose = require("mongoose");
module.exports = async function (req, res) {

    try {
        const targetId = req.params._id;
        const data = await models.findById(targetId);
        console.log(data);
        req.app.locals.cube_id = data._id;
        res.render("details.hbs", data);

    } catch (e) {
        console.log(e.message);
    }

}