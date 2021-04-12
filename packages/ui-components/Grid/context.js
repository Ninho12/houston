"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGrid = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var GridContext = React.createContext({});
var GridContextProvider = GridContext.Provider;
function useGrid() {
    var context = React.useContext(GridContext);
    return context !== null && context !== void 0 ? context : {};
}
exports.useGrid = useGrid;
exports.default = GridContextProvider;
