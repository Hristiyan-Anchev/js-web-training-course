// TODO: Require Controllers...
let urlEncoded = require("express").urlencoded();
const router = require("express").Router();
const index = require("../controllers/index");
const about = require("../controllers/about");
const renderCreateForm = require("../controllers/renderCreateForm");
const renderCubeDetails = require("../controllers/renderCubeDetails");
const render404 = require("../controllers/render404");
const createCube = require("../controllers/createCube");
const searchCube = require("../controllers/searchCube");


module.exports = (app) => {
    // TODO...
    router.get("/",index);
    router.get("/about",about);
    router.get("/create",renderCreateForm);
    router.post("/create",urlEncoded,createCube);
    router.get("/details/:_id",renderCubeDetails);
    router.get("/search",urlEncoded,searchCube);
    router.all("*",render404);
    app.use(router);
};