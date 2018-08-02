const express = require("express");
const route = express.Router();

const login = require('./login');
const signup = require('./signup');

route.use("/login", login);
route.use("/sign-up", signup);

module.exports = route;