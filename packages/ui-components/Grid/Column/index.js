"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Grid_1 = tslib_1.__importDefault(require("@material-ui/core/Grid"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function () {
    return styles_1.createStyles({
        column: {
            paddingTop: '0 !important',
            paddingBottom: '0 !important'
        }
    });
});
var Column = React.forwardRef(function (props, ref) {
    var classes = useStyles();
    return React.createElement(Grid_1.default, tslib_1.__assign({}, props, { item: true, classes: { root: classes.column }, ref: ref }));
});
exports.default = React.memo(Column);
