"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Box_1 = tslib_1.__importDefault(require("@material-ui/core/Box"));
var styles_1 = require("@material-ui/core/styles");
var clsx_1 = tslib_1.__importDefault(require("clsx"));
var WrapperTheme_1 = tslib_1.__importDefault(require("../ThemeProvider/WrapperTheme"));
var Box = React.memo(function (_a) {
    var id = _a.id, children = _a.children, xs = _a.xs, sm = _a.sm, md = _a.md, lg = _a.lg, xl = _a.xl, className = _a.className;
    var useStyles = styles_1.makeStyles(function (theme) {
        var _a;
        return styles_1.createStyles({
            box: (_a = {},
                _a[theme.breakpoints.up('xs')] = {
                    padding: xs && (xs === null || xs === void 0 ? void 0 : xs.padding),
                    margin: xs && (xs === null || xs === void 0 ? void 0 : xs.margin) ? xs === null || xs === void 0 ? void 0 : xs.margin : '16px 0'
                },
                _a[theme.breakpoints.up('sm')] = {
                    padding: sm && (sm === null || sm === void 0 ? void 0 : sm.padding),
                    margin: sm && (sm === null || sm === void 0 ? void 0 : sm.margin) ? sm === null || sm === void 0 ? void 0 : sm.margin : '16px 0'
                },
                _a[theme.breakpoints.up('md')] = {
                    padding: md && (md === null || md === void 0 ? void 0 : md.padding),
                    margin: md && (md === null || md === void 0 ? void 0 : md.margin) ? md === null || md === void 0 ? void 0 : md.margin : '16px 0'
                },
                _a[theme.breakpoints.up('lg')] = {
                    padding: lg && (lg === null || lg === void 0 ? void 0 : lg.padding),
                    margin: lg && (lg === null || lg === void 0 ? void 0 : lg.margin) ? lg === null || lg === void 0 ? void 0 : lg.margin : '16px 0'
                },
                _a[theme.breakpoints.up('xl')] = {
                    padding: xl && (xl === null || xl === void 0 ? void 0 : xl.padding),
                    margin: xl && (xl === null || xl === void 0 ? void 0 : xl.margin) ? xl === null || xl === void 0 ? void 0 : xl.margin : '16px 0'
                },
                _a)
        });
    });
    var classes = useStyles();
    return (React.createElement(WrapperTheme_1.default, null,
        React.createElement(Box_1.default, { id: id, className: clsx_1.default(className, classes.box) }, children)));
});
exports.default = Box;
