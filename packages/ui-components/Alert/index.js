"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Collapse_1 = tslib_1.__importDefault(require("@material-ui/core/Collapse"));
var styles_1 = require("@material-ui/core/styles");
var Alert_1 = tslib_1.__importDefault(require("@material-ui/lab/Alert"));
var AlertTitle_1 = tslib_1.__importDefault(require("@material-ui/lab/AlertTitle"));
var Button_1 = tslib_1.__importDefault(require("../Button"));
var useChildrenProps_1 = require("../hooks/useChildrenProps");
var WrapperTheme_1 = tslib_1.__importDefault(require("../ThemeProvider/WrapperTheme"));
var Action_1 = tslib_1.__importDefault(require("./Action"));
var Title_1 = tslib_1.__importDefault(require("./Title"));
var useStyles = styles_1.makeStyles(function () {
    return styles_1.createStyles({
        message: {
            width: '100%'
        },
        controlButtons: {
            display: 'flex',
            alignItems: 'center',
            '& button': {
                marginLeft: 4
            }
        },
        controlButtonsMultiline: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: 16,
            '& button': {
                marginLeft: 4
            }
        },
        multilineIcon: {
            alignItems: 'flex-start'
        },
        multilineAction: {
            paddingLeft: 0
        }
    });
});
var alertActionIncrementer = 0;
var Alert = React.forwardRef(function (props, ref) {
    var classes = useStyles();
    var _a = tslib_1.__read(React.useState(false), 2), hide = _a[0], setHide = _a[1];
    var id = props.id, className = props.className, children = props.children, _b = props.type, type = _b === void 0 ? 'success' : _b, icon = props.icon, onClose = props.onClose, closable = props.closable, multiline = props.multiline;
    var alertProps = { id: id, className: className, severity: type, icon: icon, onClose: onClose };
    var handleClickHide = React.useCallback(function () { return setHide(true); }, []);
    var title = useChildrenProps_1.useFirstChildrenProps(children, Title_1.default);
    var actions = useChildrenProps_1.useChildrenProps(children, Action_1.default).map(function (props) { return (tslib_1.__assign(tslib_1.__assign({}, props), { id: "action-" + alertActionIncrementer++ })); });
    var buttonActions = React.useMemo(function () {
        return actions === null || actions === void 0 ? void 0 : actions.map(function (act, index) {
            var buttonProps = tslib_1.__assign({}, act);
            delete buttonProps.label;
            return (React.createElement(Button_1.default, tslib_1.__assign({}, buttonProps, { key: "alert-action-" + index }), act.label));
        });
    }, [actions]);
    var renderActions = React.useMemo(function () {
        if (multiline)
            return false;
        if (!!actions.length)
            return React.createElement("div", { className: classes.controlButtons }, buttonActions);
        return null;
    }, [multiline, actions, classes, buttonActions]);
    return (React.createElement(WrapperTheme_1.default, null,
        React.createElement(Collapse_1.default, { in: !hide, timeout: 500 },
            React.createElement(Alert_1.default, tslib_1.__assign({}, alertProps, { ref: ref, onClose: closable ? handleClickHide : onClose, action: renderActions, classes: {
                    icon: multiline && classes.multilineIcon,
                    action: multiline && classes.multilineAction,
                    message: classes.message
                } }),
                title && React.createElement(AlertTitle_1.default, null, title === null || title === void 0 ? void 0 : title.children),
                children,
                multiline && buttonActions.length > 0 && (React.createElement("div", { className: classes.controlButtonsMultiline }, buttonActions))))));
});
Alert.Title = Title_1.default;
Alert.Action = Action_1.default;
exports.default = Alert;
