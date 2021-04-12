"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var makeStyles_1 = tslib_1.__importDefault(require("@material-ui/core/styles/makeStyles"));
var Tab_1 = tslib_1.__importDefault(require("@material-ui/core/Tab"));
var Tabs_1 = tslib_1.__importDefault(require("@material-ui/core/Tabs"));
var functions_1 = require("../Helpers/functions");
var WrapperTheme_1 = tslib_1.__importDefault(require("../ThemeProvider/WrapperTheme"));
var Content_1 = tslib_1.__importDefault(require("./Content"));
var useStyles = makeStyles_1.default(function (theme) { return ({
    containerPadding: {
        padding: theme.spacing(2)
    }
}); });
var incremeter = 0;
var Tabs = React.memo(function (props) {
    var value = props.value, onChange = props.onChange, children = props.children;
    var classes = useStyles(props);
    var _a = tslib_1.__read(React.useState(0), 2), position = _a[0], setPosition = _a[1];
    var controlled = value !== undefined;
    var currentValue = controlled ? value : position;
    var handleChange = React.useCallback(function (_, value) {
        if (controlled) {
            onChange && onChange(value);
            return;
        }
        setPosition(value);
    }, [controlled, onChange]);
    var tabs = React.useMemo(function () {
        return functions_1.getReactChildrenProps(children, Content_1.default).map(function (props) { return (tslib_1.__assign(tslib_1.__assign({}, props), { id: "tab-" + incremeter++ })); });
    }, [children]);
    return (React.createElement(WrapperTheme_1.default, null,
        React.createElement("div", null,
            React.createElement(Tabs_1.default, { scrollButtons: 'auto', variant: 'scrollable', textColor: 'primary', indicatorColor: 'primary', value: currentValue, onChange: handleChange }, tabs === null || tabs === void 0 ? void 0 : tabs.map(function (tab) { return (React.createElement(Tab_1.default, { disableRipple: true, key: tab.id, icon: tab.icon, label: tab.label, disabled: tab.disabled, id: tab.id })); })), tabs === null || tabs === void 0 ? void 0 :
            tabs.map(function (tab, index) { return (React.createElement("div", { id: "content-tab-" + tab.id, className: !tab.disablePadding ? classes.containerPadding : null, hidden: index !== currentValue, key: tab.id }, tab.children)); }))));
});
Tabs.Content = Content_1.default;
exports.default = Tabs;
