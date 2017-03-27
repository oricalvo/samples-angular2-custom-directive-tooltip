"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
app.get("*", function (req, res) {
    res.write("Yo2");
    res.end();
});
app.listen(3000, function () {
    console.log("Server is running");
});
//# sourceMappingURL=main.js.map