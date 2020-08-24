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
const createAccessoryPage = require("../controllers/createAccessoryPage");
const createAccessory = require("../controllers/createAccessory");
const attachAccessoryPage = require("../controllers/attachAccessoryPage");
const attachAccessory = require("../controllers/attachAccessory");
const deleteCube = require("../controllers/deleteCube");
const removeAccessory = require("../controllers/removeAccessory");

module.exports = (app) => {
    router.get("/",index);
    router.get("/about",about);
    router.get("/create",renderCreateForm);
    router.post("/create",urlEncoded,createCube);
    router.get("/details/:_id",renderCubeDetails);
    router.get("/search",urlEncoded,searchCube);
    router.get("/create/accessory",createAccessoryPage);
    router.post("/create/accessory",urlEncoded,createAccessory);
    router.get("/attach/accessory/:_id",attachAccessoryPage);
    router.post("/attach/accessory/:_id",urlEncoded,attachAccessory);
    router.get("/delete/:_id",deleteCube);
    router.get("/remove/accessory/:_id",removeAccessory);
    router.all("*",render404);


    app.use(router);
};