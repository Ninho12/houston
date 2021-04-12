"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._setCurrentTheme = void 0;
var tslib_1 = require("tslib");
var react_toastify_1 = require("react-toastify");
var palette_1 = tslib_1.__importDefault(require("../ThemeProvider/_default/palette"));
var currentTheme;
function _setCurrentTheme(theme) {
    currentTheme = theme;
}
exports._setCurrentTheme = _setCurrentTheme;
var Toast = /** @class */ (function () {
    function Toast() {
    }
    Toast.success = function (content, options) {
        react_toastify_1.toast.success(content, tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, this.defaultOptions), options), { style: tslib_1.__assign({}, (currentTheme ? { background: currentTheme.palette.success.main } : {})) }));
    };
    Toast.error = function (content, options) {
        react_toastify_1.toast.error(content, tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, this.defaultOptions), options), { style: tslib_1.__assign({}, (currentTheme ? { background: currentTheme.palette.error.main } : {})) }));
    };
    Toast.info = function (content, options) {
        react_toastify_1.toast.info(content, tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, this.defaultOptions), options), { style: tslib_1.__assign({}, (currentTheme ? { background: palette_1.default.grey[500] } : {})) }));
    };
    Toast.defaultOptions = {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false
    };
    return Toast;
}());
exports.default = Toast;
