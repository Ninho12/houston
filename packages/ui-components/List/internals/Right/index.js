"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var IconButton_1 = tslib_1.__importDefault(require("@material-ui/core/IconButton"));
var ListItemIcon_1 = tslib_1.__importDefault(require("@material-ui/core/ListItemIcon"));
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
var clsx_1 = tslib_1.__importDefault(require("clsx"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    iconRoot: {
        minWidth: 20,
        '& svg': {
            width: 20,
            height: 20
        }
    },
    rightRoot: {
        color: theme.palette.grey[500],
        marginLeft: 'auto'
    },
    rightText: {
        fontSize: 10,
        lineHeight: '15px',
        color: theme.palette.grey[600]
    },
    clickable: {
        cursor: 'pointer'
    }
}); });
var Right = function (_a) {
    var icon = _a.icon, text = _a.text, onClick = _a.onClick, rest = tslib_1.__rest(_a, ["icon", "text", "onClick"]);
    var classes = useStyles();
    if (icon && onClick) {
        return (React.createElement(IconButton_1.default, { className: clsx_1.default([classes.rightRoot, classes.iconRoot, onClick && classes.clickable]), onClick: onClick && onClick, size: 'small' }, icon));
    }
    if (icon) {
        return React.createElement(ListItemIcon_1.default, { className: clsx_1.default([classes.rightRoot, classes.iconRoot]) }, icon);
    }
    if (text) {
        return (React.createElement(Typography_1.default, tslib_1.__assign({}, rest, { component: 'p', className: clsx_1.default([classes.rightRoot, classes.rightText, onClick && classes.clickable]), onClick: onClick && onClick }), text));
    }
    return null;
};
exports.default = Right;
