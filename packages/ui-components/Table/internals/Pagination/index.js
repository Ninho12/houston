"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Pagination_1 = tslib_1.__importDefault(require("@material-ui/lab/Pagination"));
var Select_1 = tslib_1.__importDefault(require("../../../Forms/Select"));
var Text_1 = tslib_1.__importDefault(require("../../../Forms/Text"));
var Column_1 = tslib_1.__importDefault(require("../../../Grid/Column"));
var Row_1 = tslib_1.__importDefault(require("../../../Grid/Row"));
var Typography_1 = tslib_1.__importDefault(require("../../../Typography"));
var context_1 = require("../../context");
var useStyles = styles_1.makeStyles(function () {
    return styles_1.createStyles({
        pagination: {
            marginTop: 12,
            display: 'flex',
            alignItems: 'center'
        },
        perPage: {
            display: 'inline-flex',
            alignItems: 'center',
            marginRight: 24,
            '& p': {
                whiteSpace: 'nowrap',
                marginRight: 12
            }
        },
        goTo: {
            maxWidth: 120,
            display: 'inline-flex',
            alignItems: 'center',
            '& p': {
                whiteSpace: 'nowrap',
                marginRight: 12
            }
        },
        pages: {
            display: 'flex',
            justifyContent: 'flex-end',
            height: '100%',
            alignItems: 'center'
        }
    });
});
var Pagination = function () {
    var _a, _b, _c, _d;
    var _e = context_1.useTableContext(), loading = _e.loading, pagination = _e.pagination;
    var classes = useStyles();
    var _f = tslib_1.__read(React.useState((_a = pagination === null || pagination === void 0 ? void 0 : pagination.page) !== null && _a !== void 0 ? _a : 1), 2), currentPage = _f[0], setCurrentPage = _f[1];
    var defaultOptionsPerPage = React.useMemo(function () { var _a; return (_a = pagination === null || pagination === void 0 ? void 0 : pagination.optionsPerPage) !== null && _a !== void 0 ? _a : [5, 10, 15, 25, 35, 50, 100]; }, [
        pagination
    ]);
    var handleChangePerPage = React.useCallback(function (_, event) {
        (pagination === null || pagination === void 0 ? void 0 : pagination.onChangeRowsPerPage) && (pagination === null || pagination === void 0 ? void 0 : pagination.onChangeRowsPerPage(event.target.value));
    }, [pagination]);
    var handleChangeGoToPage = React.useCallback(function (_, event) {
        var page = Number(event.target.value) || 1;
        if (page < 1) {
            page = 1;
        }
        setCurrentPage(page);
    }, []);
    var handleBlurGoToPage = React.useCallback(function (_, event) {
        var page = Number(event.target.value) || 1;
        if (page === (pagination === null || pagination === void 0 ? void 0 : pagination.page)) {
            return;
        }
        (pagination === null || pagination === void 0 ? void 0 : pagination.onChangeGoToPage) && (pagination === null || pagination === void 0 ? void 0 : pagination.onChangeGoToPage(page));
    }, [pagination]);
    var handleChangePage = React.useCallback(function (_, page) {
        (pagination === null || pagination === void 0 ? void 0 : pagination.onChangePage) && (pagination === null || pagination === void 0 ? void 0 : pagination.onChangePage(page));
    }, [pagination]);
    if (!pagination || loading) {
        return null;
    }
    if (!loading && (!(pagination === null || pagination === void 0 ? void 0 : pagination.perPage) || (!(pagination === null || pagination === void 0 ? void 0 : pagination.total) && (pagination === null || pagination === void 0 ? void 0 : pagination.total) !== 0))) {
        console.error('@eduzz/houston-ui: the paging component needs three properties (perPage and total)');
        return null;
    }
    return (React.createElement("div", { className: classes.pagination },
        React.createElement(Row_1.default, null,
            ((pagination === null || pagination === void 0 ? void 0 : pagination.onChangeRowsPerPage) || (pagination === null || pagination === void 0 ? void 0 : pagination.onChangeGoToPage)) && (React.createElement(Column_1.default, { xs: 12, sm: 6 },
                (pagination === null || pagination === void 0 ? void 0 : pagination.onChangeRowsPerPage) && (React.createElement("div", { className: classes.perPage },
                    React.createElement(Typography_1.default, { size: 'small', fontWeight: 'semibold' }, (_b = pagination === null || pagination === void 0 ? void 0 : pagination.labelItensPerPage) !== null && _b !== void 0 ? _b : 'Itens por página:'),
                    React.createElement(Select_1.default, { margin: 'none', options: defaultOptionsPerPage.map(function (value) { return ({ label: String(value), value: value }); }), value: (_c = pagination === null || pagination === void 0 ? void 0 : pagination.perPage) !== null && _c !== void 0 ? _c : 15, onChange: handleChangePerPage }))),
                (pagination === null || pagination === void 0 ? void 0 : pagination.onChangeGoToPage) && (React.createElement("div", { className: classes.goTo },
                    React.createElement(Typography_1.default, { size: 'small', fontWeight: 'semibold' }, "Ir para:"),
                    React.createElement(Text_1.default, { margin: 'none', value: currentPage !== null && currentPage !== void 0 ? currentPage : '', onChange: handleChangeGoToPage, onBlur: handleBlurGoToPage }))))),
            (pagination === null || pagination === void 0 ? void 0 : pagination.onChangePage) && (React.createElement(Column_1.default, { xs: 12, sm: true },
                React.createElement("div", { className: classes.pages },
                    React.createElement(Pagination_1.default, { count: Math.ceil((pagination === null || pagination === void 0 ? void 0 : pagination.total) / (pagination === null || pagination === void 0 ? void 0 : pagination.perPage)), page: (_d = pagination === null || pagination === void 0 ? void 0 : pagination.page) !== null && _d !== void 0 ? _d : 1, shape: 'rounded', size: 'medium', onChange: handleChangePage })))))));
};
exports.default = React.memo(Pagination);
