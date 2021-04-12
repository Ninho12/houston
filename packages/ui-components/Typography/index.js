"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Typography_1 = tslib_1.__importDefault(require("@material-ui/core/Typography"));
var makeStyles_1 = tslib_1.__importDefault(require("@material-ui/styles/makeStyles"));
var variables_1 = tslib_1.__importDefault(require("../ThemeProvider/_default/variables"));
var WrapperTheme_1 = tslib_1.__importDefault(require("../ThemeProvider/WrapperTheme"));
var useStyle = makeStyles_1.default({
    text: function (props) {
        var _a, _b, _c;
        return ({
            fontFamily: variables_1.default.fontFamily,
            fontSize: variables_1.default.textSize((_a = props.size) !== null && _a !== void 0 ? _a : 'normal'),
            lineHeight: variables_1.default.lineHeight((_b = props.lineHeight) !== null && _b !== void 0 ? _b : 'normal'),
            fontWeight: variables_1.default.fontWeight((_c = props.fontWeight) !== null && _c !== void 0 ? _c : 'regular'),
            marginBottom: props.marginBottom ? variables_1.default.spacing(2) : null
        });
    }
});
var Typography = React.forwardRef(function (props, ref) {
    var size = props.size, lineHeight = props.lineHeight, fontWeight = props.fontWeight, className = props.className, marginBottom = props.marginBottom, typographyProps = tslib_1.__rest(props, ["size", "lineHeight", "fontWeight", "className", "marginBottom"]);
    var classes = useStyle({ size: size, lineHeight: lineHeight, fontWeight: fontWeight, marginBottom: marginBottom });
    return (React.createElement(WrapperTheme_1.default, null,
        React.createElement(Typography_1.default, tslib_1.__assign({}, typographyProps, { className: classes.text + " " + (className !== null && className !== void 0 ? className : ''), ref: ref }))));
});
exports.default = React.memo(Typography);
