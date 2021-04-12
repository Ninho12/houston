"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var CircularProgress_1 = tslib_1.__importDefault(require("@material-ui/core/CircularProgress"));
var Collapse_1 = tslib_1.__importDefault(require("@material-ui/core/Collapse"));
var styles_1 = require("@material-ui/core/styles");
var Table_1 = tslib_1.__importDefault(require("@material-ui/core/Table"));
var TableBody_1 = tslib_1.__importDefault(require("@material-ui/core/TableBody"));
var TableCell_1 = tslib_1.__importDefault(require("@material-ui/core/TableCell"));
var TableHead_1 = tslib_1.__importDefault(require("@material-ui/core/TableHead"));
var TableRow_1 = tslib_1.__importDefault(require("@material-ui/core/TableRow"));
var MoreHoriz_1 = tslib_1.__importDefault(require("@material-ui/icons/MoreHoriz"));
// @ts-ignore
var isEqual_1 = tslib_1.__importDefault(require("lodash/isEqual"));
var context_1 = require("../../context");
var Cell_1 = tslib_1.__importDefault(require("../Cell"));
var MenuActions_1 = tslib_1.__importDefault(require("../MenuActions"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        loader: {
            padding: 16
        },
        rowCollapse: {
            '& > *': {
                borderBottom: 'unset'
            }
        },
        cellCollapse: {
            paddingTop: 0,
            paddingBottom: 0,
            background: theme.palette.grey[200]
        },
        buttonAction: {
            display: 'inline-flex',
            cursor: 'pointer',
            lineHeight: 0,
            position: 'relative',
            top: 2
        },
        list: {
            borderBottom: 0
        }
    });
});
var Collapse = function (_a) {
    var collapse = _a.collapse, row = _a.row;
    var classes = useStyles();
    var numberColumns = context_1.useTableContext().numberColumns;
    var _b = tslib_1.__read(React.useState([]), 2), options = _b[0], setOptions = _b[1];
    var _c = tslib_1.__read(React.useState(null), 2), currentRow = _c[0], setCurrentRow = _c[1];
    var _d = tslib_1.__read(React.useState(null), 2), anchorEl = _d[0], setAnchorEl = _d[1];
    var handleSetCurrentRow = React.useCallback(function (event, row) {
        if (row === void 0) { row = null; }
        if (!row.data) {
            console.error('@eduzz/houston-ui: when the share component is used, the line must offer the property `data`');
        }
        setCurrentRow(row);
        setAnchorEl(event.currentTarget);
        setOptions(row === null || row === void 0 ? void 0 : row.options);
    }, [setAnchorEl]);
    var handleCloseActions = React.useCallback(function () {
        setAnchorEl(null);
        setTimeout(function () {
            setOptions([]);
            setCurrentRow(null);
        }, 180);
    }, [setAnchorEl]);
    if (!(row === null || row === void 0 ? void 0 : row.collapse)) {
        return null;
    }
    var _e = row === null || row === void 0 ? void 0 : row.collapse, _f = _e.loading, loading = _f === void 0 ? false : _f, _g = _e.columns, columns = _g === void 0 ? [] : _g, _h = _e.actions, actions = _h === void 0 ? null : _h, _j = _e.type, type = _j === void 0 ? 'table' : _j, rows = _e.rows;
    var numberColumnsCollapse = (columns === null || columns === void 0 ? void 0 : columns.length) + 1 + Number(!!actions) || 1;
    return (React.createElement(React.Fragment, null,
        React.createElement(TableRow_1.default, { className: classes.rowCollapse },
            React.createElement(TableCell_1.default, { colSpan: numberColumns, className: classes.cellCollapse },
                React.createElement(Collapse_1.default, { in: collapse && isEqual_1.default(collapse, row.data), timeout: 500, unmountOnExit: true },
                    React.createElement(Table_1.default, { size: 'small' },
                        React.createElement(React.Fragment, null,
                            !loading && type === 'table' && (React.createElement(TableHead_1.default, null,
                                React.createElement(TableRow_1.default, null, columns === null || columns === void 0 ? void 0 :
                                    columns.map(function (column) {
                                        var columnProps = tslib_1.__assign({}, column);
                                        delete columnProps.sortable;
                                        return (React.createElement(TableCell_1.default, tslib_1.__assign({ key: "collapse-column-" + column.field }, columnProps), column.label));
                                    }),
                                    actions && (React.createElement(TableCell_1.default, { align: actions === null || actions === void 0 ? void 0 : actions.align },
                                        (actions === null || actions === void 0 ? void 0 : actions.label) === false && React.createElement(React.Fragment, null, "\u00A0"),
                                        !(actions === null || actions === void 0 ? void 0 : actions.label) && actions.label !== false ? 'Ações' : actions.label))))),
                            React.createElement(TableBody_1.default, null,
                                loading && (React.createElement(TableRow_1.default, null,
                                    React.createElement(TableCell_1.default, { align: 'center', classes: { root: type === 'list' && classes.list }, colSpan: numberColumnsCollapse },
                                        React.createElement("div", { className: classes.loader },
                                            React.createElement(CircularProgress_1.default, { size: '2rem' }))))),
                                !loading &&
                                    (rows === null || rows === void 0 ? void 0 : rows.map(function (r, index) {
                                        var _a;
                                        return (React.createElement(TableRow_1.default, { key: "collapse-row-" + index }, (_a = r === null || r === void 0 ? void 0 : r.cells) === null || _a === void 0 ? void 0 :
                                            _a.map(function (cell, i) { return (React.createElement(Cell_1.default, tslib_1.__assign({ key: "collapse-row-" + index + "-cell-" + i, list: type === 'list' }, cell))); }),
                                            actions && (React.createElement(TableCell_1.default, { align: 'right', classes: { root: type === 'list' && classes.list } },
                                                React.createElement("div", { className: classes.buttonAction, onClick: function (e) { return handleSetCurrentRow(e, r); } },
                                                    React.createElement(MoreHoriz_1.default, null))))));
                                    })))))))),
        React.createElement(MenuActions_1.default, { anchorEl: anchorEl, onClose: handleCloseActions, options: !(options === null || options === void 0 ? void 0 : options.length) ? actions === null || actions === void 0 ? void 0 : actions.options : options, currentRow: currentRow })));
};
exports.default = React.memo(Collapse);
