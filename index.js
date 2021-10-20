"use strict";
exports.__esModule = true;
exports.rbhandler = void 0;
var Rollbar = require("rollbar");
var rollbar = new Rollbar({ accessToken: "36cdc8a268774812b5f0526154df5517" });
exports.rbhandler = rollbar.lambdaHandler(function (event, context, callback) {
    rollbar.log(event);
    callback();
});
