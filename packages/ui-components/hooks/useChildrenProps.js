"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFirstChildrenProps = exports.useChildrenProps = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var functions_1 = require("../Helpers/functions");
function useChildrenProps(children, componentType) {
    var result = React.useMemo(function () {
        return functions_1.getReactChildrenProps(children, componentType);
    }, [children, componentType]);
    return result;
}
exports.useChildrenProps = useChildrenProps;
function useFirstChildrenProps(children, componentType) {
    var result = React.useMemo(function () {
        return functions_1.getReactFirstChildrenProps(children, componentType);
    }, [children, componentType]);
    return result;
}
exports.useFirstChildrenProps = useFirstChildrenProps;
