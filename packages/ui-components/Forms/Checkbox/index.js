"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Checkbox_1 = tslib_1.__importDefault(require("@material-ui/core/Checkbox"));
var CheckRadioBase_1 = tslib_1.__importDefault(require("../internals/CheckRadioBase"));
var CheckboxField = React.memo(function (props) {
    return React.createElement(CheckRadioBase_1.default, tslib_1.__assign({}, props, { Control: Checkbox_1.default }));
});
exports.default = CheckboxField;
