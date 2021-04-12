"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ThemeProvider_1 = tslib_1.__importDefault(require("@material-ui/styles/ThemeProvider"));
var context_1 = require("./context");
var WrapperTheme = React.memo(function (_a) {
    var children = _a.children;
    var theme = context_1.useTheme();
    return React.createElement(ThemeProvider_1.default, { theme: theme }, children);
});
exports.default = WrapperTheme;
