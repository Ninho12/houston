"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Container_1 = tslib_1.__importDefault(require("@material-ui/core/Container"));
var styles_1 = require("@material-ui/core/styles");
var clsx_1 = tslib_1.__importDefault(require("clsx"));
var WrapperTheme_1 = tslib_1.__importDefault(require("../../ThemeProvider/WrapperTheme"));
var context_1 = tslib_1.__importDefault(require("../context"));
var useStyles = styles_1.makeStyles(function () {
    return styles_1.createStyles({
        root: {
            width: '100%',
            maxWidth: 1062,
            margin: '0 auto'
        },
        comfortable: {
            padding: '0 18px'
        },
        cozy: {
            padding: '0 28px'
        },
        compact: {
            padding: '0 20px'
        },
        fluid: {
            maxWidth: '100%'
        }
    });
});
var Container = React.forwardRef(function (props, ref) {
    var children = props.children, spacing = props.spacing, _a = props.layout, layout = _a === void 0 ? 'solid' : _a, containerProps = tslib_1.__rest(props, ["children", "spacing", "layout"]);
    var classes = useStyles();
    var contextValue = React.useMemo(function () { return ({ spacing: spacing }); }, [spacing]);
    return (React.createElement(WrapperTheme_1.default, null,
        React.createElement(context_1.default, { value: contextValue },
            React.createElement(Container_1.default, tslib_1.__assign({}, containerProps, { ref: ref, className: clsx_1.default(classes.root, classes[spacing !== null && spacing !== void 0 ? spacing : 'cozy'], layout === 'fluid' && classes.fluid) }), children))));
});
exports.default = React.memo(Container);
