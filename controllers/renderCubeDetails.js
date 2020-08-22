const models = require("../models/cube");
module.exports = function(req,res){

    const targetId = req.params._id;
    models.findById(targetId).then(data => {

        res.render("details.hbs",data);
    }).catch(console.log);


}