console.log("**Configuring MongoDB**");
const connectionURI = "mongodb://localhost:27017/cubesdb";
console.log(`**Database URI: ${connectionURI}**`);

const mongoose = require("mongoose");
mongoose.connect(connectionURI,{useNewUrlParser:true}).catch(err => {
    console.log("**CONNECTION ERROR** ",err);
});


module.exports = {
    mongoose,
    mongooseConnection:mongoose.connection
}