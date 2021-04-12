"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Avatar_1 = tslib_1.__importDefault(require("@material-ui/core/Avatar"));
var ListItemIcon_1 = tslib_1.__importDefault(require("@material-ui/core/ListItemIcon"));
var styles_1 = require("@material-ui/core/styles");
var clsx_1 = tslib_1.__importDefault(require("clsx"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    iconRoot: {
        color: theme.palette.grey[500],
        minWidth: 20,
        marginRight: 8,
        '& > svg': {
            width: 20,
            height: 20
        }
    },
    imageRoot: {
        color: theme.palette.grey[600],
        backgroundColor: theme.palette.grey[200],
        marginRight: 8,
        '& > svg': {
            width: 20,
            height: 20
        }
    },
    striped: {
        backgroundColor: '#fff'
    }
}); });
var Left = function (_a) {
    var icon = _a.icon, image = _a.image, _b = _a.striped, striped = _b === void 0 ? false : _b, rest = tslib_1.__rest(_a, ["icon", "image", "striped"]);
    var classes = useStyles();
    if (icon) {
        return (React.createElement(ListItemIcon_1.default, tslib_1.__assign({}, rest, { className: classes.iconRoot }), icon));
    }
    if (typeof image === 'string') {
        return React.createElement(Avatar_1.default, tslib_1.__assign({}, rest, { src: image, className: clsx_1.default([classes.imageRoot, striped && classes.striped]) }));
    }
    return (React.createElement(Avatar_1.default, tslib_1.__assign({}, rest, { className: clsx_1.default([classes.imageRoot, striped && classes.striped]) }), image));
};
exports.default = Left;
