"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
function useMask(mask, value) {
    var _a = React.useMemo(function () {
        return mask !== null && mask !== void 0 ? mask : { apply: function (v) { return v; }, clean: function (v) { return v; } };
    }, [mask]), maskApply = _a.apply, maskClean = _a.clean;
    var maskedValue = React.useMemo(function () { return (maskApply ? maskApply(value) : value); }, [value, maskApply]);
    var cleanedValue = React.useMemo(function () { return (maskClean ? maskClean(value) : value); }, [value, maskClean]);
    return { maskApply: maskApply, maskClean: maskClean, maskedValue: maskedValue, cleanedValue: cleanedValue };
}
exports.default = useMask;
