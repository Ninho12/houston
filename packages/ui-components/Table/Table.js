"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Table_1 = tslib_1.__importDefault(require("@material-ui/core/Table"));
var TableContainer_1 = tslib_1.__importDefault(require("@material-ui/core/TableContainer"));
var clsx_1 = tslib_1.__importDefault(require("clsx"));
var functions_1 = require("../Helpers/functions");
var useChildrenProps_1 = require("../hooks/useChildrenProps");
var WrapperTheme_1 = tslib_1.__importDefault(require("../ThemeProvider/WrapperTheme"));
var Actions_1 = tslib_1.__importDefault(require("./Actions"));
var Cell_1 = tslib_1.__importDefault(require("./Cell"));
var Collapse_1 = tslib_1.__importDefault(require("./Collapse"));
var Column_1 = tslib_1.__importDefault(require("./Column"));
var context_1 = tslib_1.__importDefault(require("./context"));
var Actions_2 = tslib_1.__importDefault(require("./internals/Actions"));
var Columns_1 = tslib_1.__importDefault(require("./internals/Columns"));
var Pagination_1 = tslib_1.__importDefault(require("./internals/Pagination"));
var Rows_1 = tslib_1.__importDefault(require("./internals/Rows"));
var Option_1 = tslib_1.__importDefault(require("./Option"));
var Pagination_2 = tslib_1.__importDefault(require("./Pagination"));
var Row_1 = tslib_1.__importDefault(require("./Row"));
var useStyles = styles_1.makeStyles(function () {
    return styles_1.createStyles({
        fixed: {
            whiteSpace: 'nowrap'
        }
    });
});
var getActions = function (content) {
    var _a;
    return (_a = functions_1.getReactChildrenComponent(content, Actions_1.default).map(function (child) {
        var _a;
        return tslib_1.__assign(tslib_1.__assign({}, child.props), { options: functions_1.getReactChildrenProps((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.children, Option_1.default) });
    })) === null || _a === void 0 ? void 0 : _a[0];
};
var getCollapseData = function (content) {
    var columns = functions_1.getReactChildrenProps(content, Column_1.default);
    var actions = getActions(content);
    var rows = functions_1.getReactChildrenComponent(content, Row_1.default).map(function (row) {
        var _a, _b;
        var options = functions_1.getReactChildrenComponent((_a = row === null || row === void 0 ? void 0 : row.props) === null || _a === void 0 ? void 0 : _a.children, Actions_1.default).reduce(function (acc, child) {
            var _a;
            return tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(acc)), tslib_1.__read(functions_1.getReactChildrenProps((_a = child.props) === null || _a === void 0 ? void 0 : _a.children, Option_1.default)));
        }, []);
        var cells = functions_1.getReactChildrenComponent((_b = row === null || row === void 0 ? void 0 : row.props) === null || _b === void 0 ? void 0 : _b.children, Cell_1.default).reduce(function (acc, child) {
            return tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(acc)), [child.props]);
        }, []);
        return tslib_1.__assign(tslib_1.__assign({}, row.props), { options: options, cells: cells });
    });
    return { columns: columns, rows: rows, actions: actions };
};
var Table = React.forwardRef(function (props, ref) {
    var classes = useStyles();
    var children = props.children, loading = props.loading, onSortable = props.onSortable, stickyHeader = props.stickyHeader, size = props.size, maxHeight = props.maxHeight, messages = props.messages;
    var _a = tslib_1.__read(React.useState([]), 2), options = _a[0], setOptions = _a[1];
    var _b = tslib_1.__read(React.useState(null), 2), currentRow = _b[0], setCurrentRow = _b[1];
    var _c = tslib_1.__read(React.useState(null), 2), anchorEl = _c[0], setAnchorEl = _c[1];
    var pagination = useChildrenProps_1.useFirstChildrenProps(children, Pagination_2.default);
    var columns = useChildrenProps_1.useChildrenProps(children, Column_1.default);
    var actions = React.useMemo(function () { return getActions(children); }, [children]);
    var rows = React.useMemo(function () {
        return React.Children.map(children, function (child) {
            var _a, _b, _c, _d;
            if (!functions_1.isReactComponent(child, Row_1.default))
                return;
            var cells = functions_1.getReactChildrenComponent((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.children, Cell_1.default).reduce(function (acc, child) {
                return tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(acc)), [child.props]);
            }, []);
            var options = functions_1.getReactChildrenComponent((_b = child === null || child === void 0 ? void 0 : child.props) === null || _b === void 0 ? void 0 : _b.children, Actions_1.default).reduce(function (acc, child) {
                var _a;
                return tslib_1.__spreadArray(tslib_1.__spreadArray([], tslib_1.__read(acc)), tslib_1.__read(functions_1.getReactChildrenProps((_a = child.props) === null || _a === void 0 ? void 0 : _a.children, Option_1.default)));
            }, []);
            var collapse = (_d = functions_1.getReactChildrenComponent((_c = child === null || child === void 0 ? void 0 : child.props) === null || _c === void 0 ? void 0 : _c.children, Collapse_1.default).map(function (child) {
                var _a;
                return tslib_1.__assign(tslib_1.__assign({}, child.props), getCollapseData((_a = child === null || child === void 0 ? void 0 : child.props) === null || _a === void 0 ? void 0 : _a.children));
            })) === null || _d === void 0 ? void 0 : _d[0];
            return tslib_1.__assign(tslib_1.__assign({}, child.props), { cells: cells, options: options, collapse: collapse });
        });
    }, [children]);
    var hasCollapseData = !!rows.filter(function (v) { return v.collapse; }).length;
    var numberColumns = (columns === null || columns === void 0 ? void 0 : columns.length) + Number(!!actions) + Number(hasCollapseData) || 0;
    var hasColumnFixed = !!((actions === null || actions === void 0 ? void 0 : actions.fixed) || ((columns === null || columns === void 0 ? void 0 : columns.length) && columns.filter(function (c) { return c.fixed; }).length));
    var contextValue = React.useMemo(function () { return ({
        loading: loading,
        onSortable: onSortable,
        messages: messages,
        currentRow: currentRow,
        setCurrentRow: setCurrentRow,
        columns: columns,
        rows: rows,
        actions: actions,
        anchorEl: anchorEl,
        setAnchorEl: setAnchorEl,
        options: options,
        setOptions: setOptions,
        pagination: pagination,
        hasCollapseData: hasCollapseData,
        numberColumns: numberColumns
    }); }, [
        actions,
        anchorEl,
        columns,
        currentRow,
        hasCollapseData,
        loading,
        messages,
        numberColumns,
        onSortable,
        options,
        pagination,
        rows
    ]);
    return (React.createElement(WrapperTheme_1.default, null,
        React.createElement(context_1.default, { value: contextValue },
            React.createElement(TableContainer_1.default, { style: { maxHeight: maxHeight && maxHeight } },
                React.createElement(Table_1.default, { ref: ref, stickyHeader: stickyHeader, size: size, className: clsx_1.default(hasColumnFixed && classes.fixed) },
                    React.createElement(Columns_1.default, null),
                    React.createElement(Rows_1.default, null))),
            React.createElement(Pagination_1.default, null),
            React.createElement(Actions_2.default, null))));
});
Table.Column = Column_1.default;
Table.Row = Row_1.default;
Table.Cell = Cell_1.default;
Table.Actions = Actions_1.default;
Table.Option = Option_1.default;
Table.Pagination = Pagination_2.default;
Table.Collapse = Collapse_1.default;
exports.default = Table;
