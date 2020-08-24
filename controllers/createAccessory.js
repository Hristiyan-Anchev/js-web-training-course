const Accesory = require("../models/accessory");
const mockImg = "https://via.placeholder.com/150";

module.exports = async function (req, res) {
    // console.log(req.body);
    try {
        const newAccessory = new Accesory({...req.body});
        await newAccessory.save()
        res.redirect("/");
    } catch (e) {
        console.log(e.message);
    }

}