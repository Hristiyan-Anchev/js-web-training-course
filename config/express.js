const express = require('express');
const handlebars = require('express-handlebars');
// const bodyParser = require('body-parser');

const path = require("path");

module.exports = (app) => {

    //TODO: Setup the view engine

    app.engine("hbs",handlebars({
        extname:"hbs",
        defaultLayout:false,

    }));

    app.set("views",path.resolve(__dirname,"../views"));
    app.set("view engine","hbs");
    //TODO: Setup the body parser


    //TODO: Setup the static files
    app.use(express.static(path.resolve(__dirname,"../static")));


};