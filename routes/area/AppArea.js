const express = require("express");
const route = express.Router();

const ShowArea = require('./ShowArea');
const AddArea = require('./AddArea');
route.use("/ListArea", ShowArea);
route.use("/AddArea",AddArea);
module.exports = route;