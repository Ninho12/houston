"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function usePromise(promiseGenerator, deps) {
    var _a = React.useState(), result = _a[0], setResult = _a[1];
    var _b = React.useState(), error = _b[0], setError = _b[1];
    React.useEffect(function () {
        var isSubscribed = true;
        promiseGenerator()
            .then(function (result) {
            if (!isSubscribed)
                return;
            setResult(result);
        })
            .catch(function (err) {
            if (!isSubscribed)
                return;
            setError(err);
        });
        return function () { return (isSubscribed = false); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deps]);
    return [result, error];
}
exports.default = usePromise;
