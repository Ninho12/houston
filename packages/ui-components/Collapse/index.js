"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Collapse_1 = tslib_1.__importDefault(require("@material-ui/core/Collapse"));
var WrapperTheme_1 = tslib_1.__importDefault(require("../ThemeProvider/WrapperTheme"));
var Collapse = React.memo(function (_a) {
    var children = _a.children, visibled = _a.visibled, _b = _a.destroyOnClose, destroyOnClose = _b === void 0 ? false : _b, onEnter = _a.onEnter;
    return (React.createElement(WrapperTheme_1.default, null,
        React.createElement(Collapse_1.default, { in: visibled, timeout: 500, unmountOnExit: destroyOnClose, onEnter: onEnter && onEnter }, children)));
});
exports.default = Collapse;
