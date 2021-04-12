"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var variables_1 = tslib_1.__importDefault(require("./variables"));
var typography = {
    fontFamily: variables_1.default.fontFamily,
    fontSize: variables_1.default.textSize(),
    body1: {
        fontFamily: variables_1.default.fontFamily,
        fontSize: variables_1.default.textSize(),
        fontWeight: variables_1.default.fontWeight()
    },
    body2: {
        fontFamily: variables_1.default.fontFamily,
        fontSize: variables_1.default.textSize(),
        fontWeight: variables_1.default.fontWeight()
    },
    button: {
        fontWeight: 600
    }
};
exports.default = typography;
