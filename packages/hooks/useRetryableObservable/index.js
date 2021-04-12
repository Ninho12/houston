"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var useObservable_1 = require("../useObservable");
/**
 * Create a memoized observable and unsubscribe automatically if component unmount and a
 * retry function
 * @returns [observableValue, error, isCompleted, retryFunction]
 */
function useRetryableObservable(observableGenerator, deps) {
    var _a = React.useState(), data = _a[0], setData = _a[1];
    var _b = React.useState(), error = _b[0], setError = _b[1];
    var submitted$ = React.useRef(new rxjs_1.BehaviorSubject(true)).current;
    var _c = useObservable_1.default(function () {
        return submitted$.pipe(operators_1.tap(function () { return setData(undefined); }), operators_1.tap(function () { return setError(undefined); }), operators_1.switchMap(function () {
            return observableGenerator().pipe(operators_1.tap(function (result) { return setData(result); }), operators_1.catchError(function (err) {
                setError(err);
                return rxjs_1.NEVER;
            }));
        }));
    }, deps), completed = _c[2];
    var retry = React.useCallback(function () { return submitted$.next(true); }, [submitted$]);
    return [data, error, completed, retry, undefined];
}
exports.default = useRetryableObservable;
