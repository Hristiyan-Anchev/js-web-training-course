const models = require("../models/cube");
module.exports = function(req,res){
    const {search,from,to}=req.query;
    console.log("**CURRENT SEARCH PARAMS** :",search,from,to);

    const validSearch = [search,from,to].some(x => {
        x = x.trim();
        return x !== "";
    });

    if(!validSearch){
        res.redirect("/");
        return;
    }


    models.read(search.toLowerCase(),Number(from),Number(to)).then(data => {



        res.render("index.hbs", {cubes:data.map(c => {
            const {_id,name,description,imageUrl,difficultyLevel} = c;
            return {_id,name,description,imageUrl,difficultyLevel};
            })
            ,search,from,to});
    }).catch(console.log);

}
