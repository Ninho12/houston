"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
 * Create a memoized observable and unsubscribe automatically if component unmount
 * @returns [observableValue, error, isCompleted]
 */
function useObservable(observableGenerator, deps, defaultValue) {
    if (defaultValue === void 0) { defaultValue = null; }
    var _a = React.useState(null), value = _a[0], setValue = _a[1];
    var _b = React.useState(), error = _b[0], setError = _b[1];
    var _c = React.useState(false), complete = _c[0], setComplete = _c[1];
    var defaultValueRef = React.useRef(defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var cb = React.useCallback(observableGenerator, deps);
    React.useEffect(function () {
        setValue(defaultValueRef.current || null);
        setError(undefined);
        setComplete(false);
        defaultValueRef.current = null;
        var sub = cb().subscribe(function (data) {
            setValue(data);
            setError(undefined);
        }, function (err) {
            setValue(null);
            setError(err);
        }, function () { return setComplete(true); });
        return function () { return sub.unsubscribe(); };
    }, [cb, defaultValue]);
    return [value, error, complete, undefined];
}
exports.default = useObservable;
