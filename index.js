

//*************************************
const {mongooseConnection} = require("./config/mongoClient");

const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];
const app = require('express')();


require('./config/express')(app);
require('./config/routes')(app);


const server = app.listen(config.port,
    console.log(`Listening on port ${config.port}! Now its up to you...`));

process.on("SIGINT",shutdownHandler);
process.on("SIGTERM",shutdownHandler)


function shutdownHandler(){
    server.close(err=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(" ***HTTP SERVER CLOSED*** ");
    });
    console.log(" ***CLOSING MONGODB CONNECTION*** ");
    mongooseConnection.close();
}