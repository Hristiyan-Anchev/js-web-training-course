const {mongoose} = require("../config/mongoClient");
const {schema,schemaMethods} = require("../schemas/cubeSchema");

const cubeSchema = new mongoose.Schema(schema);
Object.assign(cubeSchema.methods,schemaMethods);

const Cube = mongoose.model("cube",cubeSchema);




function getAllData() {
    return new Promise(function (resolve,reject){
        Cube.find(function(err,cubes){
            if(err){
                reject(err);
                return;
            }
            resolve(cubes);
        });
    });
}

function findById(targetID) {

    return Cube.findById(targetID).exec()

}


function create(name, description, imageUrl, difficultyLevel) {

        const newCube = new Cube({name,description,imageUrl,difficultyLevel});
        return newCube.save()
}


function read(cubeName, from, to) {

        return Cube.find({
            $and: [
                {name: cubeName},
                {difficultyLevel:{$gte:from}},
                {difficultyLevel:{$lte:to}},
            ]
        }).exec();

}




action = {
    getAllData,
    findById,
    create,
    read,
    // update,
    // deleteCube
}


module.exports = action;