let models = require("../models/cube");
module.exports = function(req,res){
    const {name,description,imageUrl,difficultyLevel} = req.body;

    models.create(name.toLowerCase(),description,imageUrl,Number(difficultyLevel)).then(model=>{
        console.log("CUBE HAS BEEN CREATED :: ",model);
    }).catch(console.log);

    res.redirect("/");
}