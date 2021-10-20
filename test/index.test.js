"use strict";
exports.__esModule = true;
var index_1 = require("../index");
var event = {
    message: "Hello world!",
    operation: "echo"
};
describe("index", function () {
    describe("#handler", function () {
        it("should invoke callback", function (cb) {
            (0, index_1.handler)(event, {}, cb);
        });
    });
});
