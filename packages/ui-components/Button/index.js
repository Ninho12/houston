"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Button_1 = tslib_1.__importDefault(require("@material-ui/core/Button"));
var CircularProgress_1 = tslib_1.__importDefault(require("@material-ui/core/CircularProgress"));
var WrapperTheme_1 = tslib_1.__importDefault(require("../ThemeProvider/WrapperTheme"));
var Test = function () { return null; };
exports.Test = Test;
var Button = React.forwardRef(function (props, ref) {
    var children = props.children, _a = props.disabled, disabled = _a === void 0 ? false : _a, _b = props.variant, variant = _b === void 0 ? 'contained' : _b, startIcon = props.startIcon, _c = props.loading, loading = _c === void 0 ? false : _c, buttonProps = tslib_1.__rest(props, ["children", "disabled", "variant", "startIcon", "loading"]);
    return (React.createElement(WrapperTheme_1.default, null,
        React.createElement(Button_1.default, tslib_1.__assign({}, buttonProps, { disabled: disabled || loading ? true : false, startIcon: loading ? React.createElement(CircularProgress_1.default, { size: 18, color: 'inherit' }) : startIcon, disableRipple: true, disableFocusRipple: true, disableElevation: true, disableTouchRipple: true, variant: variant, color: 'primary', ref: ref }), children)));
});
exports.default = React.memo(Button);
