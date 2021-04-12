"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var createMuiTheme_1 = tslib_1.__importDefault(require("@material-ui/core/styles/createMuiTheme"));
var createPalette_1 = tslib_1.__importDefault(require("@material-ui/core/styles/createPalette"));
var overrides_1 = tslib_1.__importDefault(require("./overrides"));
var palette_1 = tslib_1.__importDefault(require("./palette"));
var props_1 = tslib_1.__importDefault(require("./props"));
var typography_1 = tslib_1.__importDefault(require("./typography"));
var variables_1 = tslib_1.__importDefault(require("./variables"));
function generateTheme(customPalette) {
    var palette = createPalette_1.default(tslib_1.__assign(tslib_1.__assign({}, palette_1.default), customPalette));
    return createMuiTheme_1.default({
        palette: palette,
        overrides: overrides_1.default(palette),
        props: props_1.default,
        typography: typography_1.default,
        spacing: function (factor) {
            return variables_1.default.spacing(factor);
        }
    });
}
exports.default = generateTheme;
