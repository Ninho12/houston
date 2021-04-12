"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Radio_1 = tslib_1.__importDefault(require("@material-ui/core/Radio"));
var CheckRadioBase_1 = tslib_1.__importDefault(require("../internals/CheckRadioBase"));
var RadioField = React.memo(function (props) {
    return React.createElement(CheckRadioBase_1.default, tslib_1.__assign({}, props, { Control: Radio_1.default, isMultiple: false }));
});
exports.default = RadioField;
