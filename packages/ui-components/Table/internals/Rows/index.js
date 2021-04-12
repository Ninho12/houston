"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var CircularProgress_1 = tslib_1.__importDefault(require("@material-ui/core/CircularProgress"));
var IconButton_1 = tslib_1.__importDefault(require("@material-ui/core/IconButton"));
var styles_1 = require("@material-ui/core/styles");
var TableBody_1 = tslib_1.__importDefault(require("@material-ui/core/TableBody"));
var TableCell_1 = tslib_1.__importDefault(require("@material-ui/core/TableCell"));
var TableRow_1 = tslib_1.__importDefault(require("@material-ui/core/TableRow"));
var KeyboardArrowDown_1 = tslib_1.__importDefault(require("@material-ui/icons/KeyboardArrowDown"));
var KeyboardArrowUp_1 = tslib_1.__importDefault(require("@material-ui/icons/KeyboardArrowUp"));
var MoreHoriz_1 = tslib_1.__importDefault(require("@material-ui/icons/MoreHoriz"));
// @ts-ignore
var isEqual_1 = tslib_1.__importDefault(require("lodash/isEqual"));
var context_1 = require("../../context");
var Cell_1 = tslib_1.__importDefault(require("../Cell"));
var Collapse_1 = tslib_1.__importDefault(require("../Collapse"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        loader: {
            padding: 16
        },
        buttonAction: {
            display: 'inline-flex',
            cursor: 'pointer',
            lineHeight: 0,
            position: 'relative',
            top: 2
        },
        fixed: {
            position: 'sticky',
            top: 0,
            right: 0,
            left: 0,
            background: theme.palette.grey[100]
        }
    });
});
var Rows = function () {
    var classes = useStyles();
    var _a = context_1.useTableContext(), loading = _a.loading, columns = _a.columns, rows = _a.rows, currentRow = _a.currentRow, actions = _a.actions, setAnchorEl = _a.setAnchorEl, setOptions = _a.setOptions, setCurrentRow = _a.setCurrentRow, messages = _a.messages, hasCollapseData = _a.hasCollapseData, numberColumns = _a.numberColumns;
    var _b = tslib_1.__read(React.useState(null), 2), currentItemCollapse = _b[0], setCurrentItemCollapse = _b[1];
    var handleSetCurrentRow = React.useCallback(function (event, row) {
        if (row === void 0) { row = null; }
        if (!row.data) {
            console.error('@eduzz/houston-ui: when the share component is used, the line must offer the property `data`');
        }
        setCurrentRow(row);
        setAnchorEl(event.currentTarget);
        setOptions(row === null || row === void 0 ? void 0 : row.options);
    }, [setAnchorEl, setOptions, setCurrentRow]);
    var handleClickCollapse = React.useCallback(function (row) {
        var _a, _b;
        var callback = (_a = row === null || row === void 0 ? void 0 : row.collapse) === null || _a === void 0 ? void 0 : _a.onCollapse;
        var data = (_b = row === null || row === void 0 ? void 0 : row.data) !== null && _b !== void 0 ? _b : {};
        if (currentItemCollapse && isEqual_1.default(currentItemCollapse, data)) {
            callback && callback(null);
            setCurrentItemCollapse(null);
            return;
        }
        callback && callback(data);
        setCurrentItemCollapse(data);
    }, [currentItemCollapse]);
    if (!loading && !(rows === null || rows === void 0 ? void 0 : rows.length)) {
        return (React.createElement(TableBody_1.default, null,
            React.createElement(TableRow_1.default, null,
                React.createElement(TableCell_1.default, { align: 'center', colSpan: numberColumns },
                    React.createElement("div", { className: classes.loader }, (messages === null || messages === void 0 ? void 0 : messages.empty) ? messages.empty : 'Nenhum registro encontrado.')))));
    }
    return (React.createElement(TableBody_1.default, null,
        loading && (React.createElement(TableRow_1.default, null,
            React.createElement(TableCell_1.default, { align: 'center', colSpan: numberColumns },
                React.createElement("div", { className: classes.loader },
                    React.createElement(CircularProgress_1.default, null))))),
        !loading &&
            rows.map(function (row, index) {
                var _a;
                return (React.createElement(React.Fragment, { key: "table-row-" + index },
                    React.createElement(TableRow_1.default, { hover: true, selected: currentRow && isEqual_1.default(currentRow === null || currentRow === void 0 ? void 0 : currentRow.data, row.data), onClick: (row === null || row === void 0 ? void 0 : row.onClick) && row.onClick, onDoubleClick: (row === null || row === void 0 ? void 0 : row.onDoubleClick) && row.onDoubleClick }, (_a = row === null || row === void 0 ? void 0 : row.cells) === null || _a === void 0 ? void 0 :
                        _a.map(function (cell, i) {
                            var _a;
                            var currentIndex = i + 1;
                            var isFixed = ((_a = columns[i]) === null || _a === void 0 ? void 0 : _a.fixed) && (currentIndex === 1 || currentIndex === numberColumns);
                            return React.createElement(Cell_1.default, tslib_1.__assign({ key: "row-" + index + "-cell-" + i, fixed: isFixed }, cell));
                        }),
                        actions && (React.createElement(TableCell_1.default, { align: 'right', className: (actions === null || actions === void 0 ? void 0 : actions.fixed) && classes.fixed },
                            React.createElement("div", { className: classes.buttonAction, onClick: function (e) { return handleSetCurrentRow(e, row); } },
                                React.createElement(MoreHoriz_1.default, null)))),
                        hasCollapseData && (React.createElement(React.Fragment, null,
                            !(row === null || row === void 0 ? void 0 : row.collapse) && React.createElement(TableCell_1.default, { key: "row-" + index + "-collapse" }),
                            (row === null || row === void 0 ? void 0 : row.collapse) && (React.createElement(TableCell_1.default, { key: "row-" + index + "-collapse" },
                                React.createElement(IconButton_1.default, { size: 'small', onClick: function () { return handleClickCollapse(row); } }, currentItemCollapse && isEqual_1.default(currentItemCollapse, row.data) ? (React.createElement(KeyboardArrowUp_1.default, null)) : (React.createElement(KeyboardArrowDown_1.default, null)))))))),
                    (row === null || row === void 0 ? void 0 : row.collapse) && React.createElement(Collapse_1.default, { collapse: currentItemCollapse, row: row })));
            })));
};
exports.default = React.memo(Rows);
