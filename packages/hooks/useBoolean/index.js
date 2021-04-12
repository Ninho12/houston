"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBooleanToTrue = exports.useBooleanToFalse = exports.useBoolean = void 0;
var React = require("react");
function useBoolean(initial) {
    if (initial === void 0) { initial = false; }
    var _a = React.useState(initial), value = _a[0], setValue = _a[1];
    var toogleValue = React.useCallback(function () { return setValue(function (value) { return !value; }); }, []);
    return [value, toogleValue];
}
exports.useBoolean = useBoolean;
function useBooleanToFalse(initial) {
    if (initial === void 0) { initial = true; }
    var _a = React.useState(initial), value = _a[0], setValue = _a[1];
    var toogleValue = React.useCallback(function () { return setValue(function () { return false; }); }, []);
    return [value, toogleValue];
}
exports.useBooleanToFalse = useBooleanToFalse;
function useBooleanToTrue(initial) {
    if (initial === void 0) { initial = false; }
    var _a = React.useState(initial), value = _a[0], setValue = _a[1];
    var toogleValue = React.useCallback(function () { return setValue(function () { return true; }); }, []);
    return [value, toogleValue];
}
exports.useBooleanToTrue = useBooleanToTrue;
