"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
// @ts-ignore
var isEqual_1 = require("lodash/isEqual");
var useObservable_1 = require("../useObservable");
function usePaginatedObservable(observableGenerator, initialParams, deps) {
    var _a = React.useState({ total: 0, result: [], hasMore: true }), data = _a[0], setData = _a[1];
    var _b = React.useState(true), isLoading = _b[0], setIsLoading = _b[1];
    var _c = React.useState(false), isLoadingMore = _c[0], setIsLoadingMore = _c[1];
    var _d = React.useState(tslib_1.__assign({ page: 0, perPage: 30 }, initialParams)), params = _d[0], setParams = _d[1];
    var mergeParams = React.useCallback(function (newParams, reset) {
        if (reset === void 0) { reset = false; }
        setParams(function (params) {
            if (newParams.page > params.page && (!data.hasMore || isLoading || isLoadingMore)) {
                newParams.page = params.page;
            }
            var newState = tslib_1.__assign(tslib_1.__assign({}, (reset ? initialParams : params)), newParams);
            if (isEqual_1.default(newState, params)) {
                return params;
            }
            return tslib_1.__assign(tslib_1.__assign({}, newState), { _retry: null });
        });
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data.hasMore, isLoading, isLoadingMore]);
    var _e = useObservable_1.default(function () {
        return rxjs_1.of(true).pipe(operators_1.tap(function () { return (params.page === 0 ? setIsLoading(true) : setIsLoadingMore(true)); }), operators_1.delay(1000), operators_1.switchMap(function () {
            var sendParams = tslib_1.__assign({}, params);
            delete sendParams._retry;
            return observableGenerator(sendParams);
        }), operators_1.tap(function (response) {
            setIsLoading(false);
            setIsLoadingMore(false);
            setData(function (data) {
                var _a, _b;
                var total = (_a = response.total) !== null && _a !== void 0 ? _a : data.total;
                var result = (_b = (params.page === 0 ? response.result : tslib_1.__spreadArray(tslib_1.__spreadArray([], data.result), response.result))) !== null && _b !== void 0 ? _b : [];
                return { total: total, result: result, hasMore: result.length < total };
            });
        }, function () {
            setIsLoading(false);
            setIsLoadingMore(false);
        }));
    }, tslib_1.__spreadArray([params], deps)), error = _e[1];
    var retry = React.useCallback(function () {
        setIsLoading(true);
        mergeParams({ page: 0, _retry: Date.now() });
    }, [mergeParams]);
    return {
        params: params,
        mergeParams: mergeParams,
        initialParams: initialParams,
        isLoading: isLoading,
        isLoadingMore: isLoadingMore,
        total: data.total,
        result: data.result,
        hasMore: data.hasMore,
        error: error,
        retry: retry
    };
}
exports.default = usePaginatedObservable;
