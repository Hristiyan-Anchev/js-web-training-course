const cubeModel = require("../models/cube");
module.exports = function(req,res){
    const cubes = cubeModel.getAllData().then(data=>{

        res.render("index.hbs",{cubes:data.map(c => {
            const {_id,name,description,imageUrl,difficultyLevel} = c
                return {_id,name,description,imageUrl,difficultyLevel};
            })});
    }).catch(console.log);
}