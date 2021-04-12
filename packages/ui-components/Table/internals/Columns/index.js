"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styles_1 = require("@material-ui/core/styles");
var TableCell_1 = tslib_1.__importDefault(require("@material-ui/core/TableCell"));
var TableHead_1 = tslib_1.__importDefault(require("@material-ui/core/TableHead"));
var TableRow_1 = tslib_1.__importDefault(require("@material-ui/core/TableRow"));
var TableSortLabel_1 = tslib_1.__importDefault(require("@material-ui/core/TableSortLabel"));
var clsx_1 = tslib_1.__importDefault(require("clsx"));
var context_1 = require("../../context");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        fixed: {
            position: 'sticky',
            top: 0,
            left: 0,
            right: 0,
            background: theme.palette.grey[100],
            zIndex: 2
        }
    });
});
var Columns = function () {
    var classes = useStyles();
    var _a = context_1.useTableContext(), loading = _a.loading, columns = _a.columns, actions = _a.actions, onSortable = _a.onSortable, rows = _a.rows, hasCollapseData = _a.hasCollapseData, numberColumns = _a.numberColumns;
    var _b = tslib_1.__read(React.useState(null), 2), sortable = _b[0], setSortable = _b[1];
    var handleClickSortable = React.useCallback(function (field) {
        if ((sortable === null || sortable === void 0 ? void 0 : sortable.field) !== field) {
            setSortable({ field: field, order: 'asc' });
            onSortable && onSortable({ field: field, order: 'asc' });
            return;
        }
        if ((sortable === null || sortable === void 0 ? void 0 : sortable.field) === field && sortable.order === 'asc') {
            setSortable(tslib_1.__assign(tslib_1.__assign({}, sortable), { order: 'desc' }));
            onSortable && onSortable({ field: field, order: 'desc' });
            return;
        }
        setSortable(null);
        onSortable && onSortable(null);
    }, [sortable, onSortable]);
    if (!(columns === null || columns === void 0 ? void 0 : columns.length)) {
        return null;
    }
    return (React.createElement(TableHead_1.default, null,
        React.createElement(TableRow_1.default, null,
            columns.map(function (column, index) {
                var _a;
                var currentSortable = (sortable === null || sortable === void 0 ? void 0 : sortable.field) === column.field;
                var currentIndex = index + 1;
                var isFixed = (column === null || column === void 0 ? void 0 : column.fixed) && (currentIndex === 1 || currentIndex === numberColumns);
                return (React.createElement(TableCell_1.default, { id: column === null || column === void 0 ? void 0 : column.id, align: column === null || column === void 0 ? void 0 : column.align, className: clsx_1.default(isFixed && !loading && rows.length && classes.fixed, column === null || column === void 0 ? void 0 : column.className), key: "column-" + column.field, sortDirection: currentSortable ? sortable === null || sortable === void 0 ? void 0 : sortable.order : false, width: column === null || column === void 0 ? void 0 : column.width },
                    (column === null || column === void 0 ? void 0 : column.sortable) && (React.createElement(TableSortLabel_1.default, { active: currentSortable, disabled: loading || (rows === null || rows === void 0 ? void 0 : rows.length) === 0, direction: currentSortable ? sortable === null || sortable === void 0 ? void 0 : sortable.order : 'asc', onClick: (column === null || column === void 0 ? void 0 : column.sortable) ? function () { return handleClickSortable(column.field); } : null }, (_a = column === null || column === void 0 ? void 0 : column.label) !== null && _a !== void 0 ? _a : ' ')),
                    !(column === null || column === void 0 ? void 0 : column.sortable) ? column === null || column === void 0 ? void 0 : column.label : ' '));
            }),
            actions && (React.createElement(TableCell_1.default, { align: actions === null || actions === void 0 ? void 0 : actions.align, className: (actions === null || actions === void 0 ? void 0 : actions.fixed) && classes.fixed },
                (actions === null || actions === void 0 ? void 0 : actions.label) === false && React.createElement(React.Fragment, null, "\u00A0"),
                !(actions === null || actions === void 0 ? void 0 : actions.label) && actions.label !== false ? 'Ações' : actions.label)),
            hasCollapseData && React.createElement(TableCell_1.default, { width: 50 }))));
};
exports.default = React.memo(Columns);
