"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTheme = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var _default_1 = tslib_1.__importDefault(require("./_default"));
var ContextTheme = React.createContext(_default_1.default());
var ContextThemeProvider = ContextTheme.Provider;
function useTheme() {
    var context = React.useContext(ContextTheme);
    return context;
}
exports.useTheme = useTheme;
exports.default = ContextThemeProvider;
