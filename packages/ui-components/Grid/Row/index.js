"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Grid_1 = tslib_1.__importDefault(require("@material-ui/core/Grid"));
var styles_1 = require("@material-ui/core/styles");
var WrapperTheme_1 = tslib_1.__importDefault(require("../../ThemeProvider/WrapperTheme"));
var context_1 = require("../context");
var useStyles = styles_1.makeStyles(function () {
    return styles_1.createStyles({
        root: {
            margin: 0,
            width: '100%'
        }
    });
});
var Row = React.forwardRef(function (props, ref) {
    var classes = useStyles();
    var spacing = context_1.useGrid().spacing;
    var config = React.useMemo(function () {
        var sizes = { comfortable: 10, cozy: 4, compact: 2 };
        return sizes[spacing !== null && spacing !== void 0 ? spacing : 'cozy'];
    }, [spacing]);
    return (React.createElement(WrapperTheme_1.default, null,
        React.createElement(Grid_1.default, tslib_1.__assign({}, props, { container: true, ref: ref, className: classes.root, spacing: config }))));
});
exports.default = React.memo(Row);
