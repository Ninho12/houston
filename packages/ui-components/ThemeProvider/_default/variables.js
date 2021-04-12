"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var palette_1 = tslib_1.__importDefault(require("./palette"));
var fontSizes = {
    'xx-small': 10,
    'x-small': 12,
    small: 14,
    normal: 15,
    default: 16,
    medium: 20,
    large: 24,
    'x-large': 32,
    'xx-large': 40
};
var lineHeights = {
    compact: 1.2,
    normal: 1.5,
    comfortable: 1.8
};
var fontWeight = {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700
};
var palette = palette_1.default;
var themeVariable = {
    fontFamily: 'Open Sans, "Helvetica Neue", Arial, sans-serif',
    colors: { focusLine: '#B0BEC5' },
    radius: function (unit) {
        if (unit === void 0) { unit = 1; }
        return 4 * unit;
    },
    spacing: function (unit) {
        if (unit === void 0) { unit = 4; }
        return 4 * unit;
    },
    textSize: function (size) {
        if (size === void 0) { size = 'normal'; }
        return fontSizes[size];
    },
    lineHeight: function (size) {
        if (size === void 0) { size = 'normal'; }
        return lineHeights[size];
    },
    fontWeight: function (size) {
        if (size === void 0) { size = 'regular'; }
        return fontWeight[size];
    },
    palette: palette
};
exports.default = themeVariable;
