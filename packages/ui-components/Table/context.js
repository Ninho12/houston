"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTableContext = exports.TableContextProvider = exports.TableContext = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
exports.TableContext = React.createContext({});
exports.TableContextProvider = exports.TableContext.Provider;
function useTableContext() {
    var context = React.useContext(exports.TableContext);
    return context;
}
exports.useTableContext = useTableContext;
exports.default = exports.TableContextProvider;
