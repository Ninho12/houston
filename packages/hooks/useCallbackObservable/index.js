"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var useObservable_1 = require("../useObservable");
/**
 * Create a memoized callback that uses an observable and unsubscribe automatically if component unmount
 * @returns a memoized version of the callback that only changes if one of the inputs has changed
 */
function useCallbackObservable(observableGenerator, deps) {
    var _a = React.useState(), error = _a[0], setError = _a[1];
    var submitted$ = React.useRef(new rxjs_1.Subject()).current;
    var _b = useObservable_1.default(function () {
        return submitted$.pipe(operators_1.tap(function () { return setError(undefined); }), operators_1.switchMap(function (args) {
            return observableGenerator.apply(void 0, args).pipe(operators_1.catchError(function (err) {
                setError(err);
                return rxjs_1.NEVER;
            }));
        }));
    }, deps), data = _b[0], completed = _b[2];
    var callback = React.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return submitted$.next(args);
    }, [submitted$]);
    return [callback, data, error, completed, undefined];
}
exports.default = useCallbackObservable;
