"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Typography_1 = tslib_1.__importDefault(require("../../../Typography"));
var Title = function (_a) {
    var children = _a.children, props = tslib_1.__rest(_a, ["children"]);
    return (React.createElement(Typography_1.default, tslib_1.__assign({}, props, { size: 'normal', lineHeight: 'compact' }), children));
};
exports.default = React.memo(Title);
