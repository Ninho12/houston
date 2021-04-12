"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var IconButton_1 = tslib_1.__importDefault(require("@material-ui/core/IconButton"));
var WrapperTheme_1 = tslib_1.__importDefault(require("../ThemeProvider/WrapperTheme"));
var Button = React.forwardRef(function (props, ref) {
    var children = props.children, _a = props.disabled, disabled = _a === void 0 ? false : _a, otherProps = tslib_1.__rest(props, ["children", "disabled"]);
    return (React.createElement(WrapperTheme_1.default, null,
        React.createElement(IconButton_1.default, tslib_1.__assign({}, otherProps, { color: 'primary', disabled: disabled, disableTouchRipple: true, ref: ref }), children)));
});
exports.default = React.memo(Button);
