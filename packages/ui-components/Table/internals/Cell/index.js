"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styles_1 = require("@material-ui/core/styles");
var TableCell_1 = tslib_1.__importDefault(require("@material-ui/core/TableCell"));
var clsx_1 = tslib_1.__importDefault(require("clsx"));
var functions_1 = require("../../../Helpers/functions");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        list: {
            borderBottom: 0
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
var Cell = function (props) {
    var classes = useStyles();
    var cellProps = {
        id: props === null || props === void 0 ? void 0 : props.id,
        className: props === null || props === void 0 ? void 0 : props.className,
        padding: props === null || props === void 0 ? void 0 : props.padding,
        colSpan: props === null || props === void 0 ? void 0 : props.colSpan,
        align: props === null || props === void 0 ? void 0 : props.align,
        onClick: props === null || props === void 0 ? void 0 : props.onClick,
        onDoubleClick: props === null || props === void 0 ? void 0 : props.onDoubleClick
    };
    var children = props.children, _a = props.truncate, truncate = _a === void 0 ? false : _a, list = props.list, fixed = props.fixed;
    return (React.createElement(TableCell_1.default, tslib_1.__assign({}, cellProps, { className: clsx_1.default(list && classes.list, fixed && classes.fixed) }),
        truncate && React.createElement("span", { title: String(children) }, functions_1.truncateText(String(children), truncate)),
        !truncate && children));
};
exports.default = React.memo(Cell);
