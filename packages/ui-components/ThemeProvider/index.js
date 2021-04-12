"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var CssBaseline_1 = tslib_1.__importDefault(require("@material-ui/core/CssBaseline"));
var Toast_1 = require("../Toast");
var Container_1 = tslib_1.__importDefault(require("../Toast/Container"));
var variables_1 = tslib_1.__importDefault(require("./_default/variables"));
var context_1 = tslib_1.__importDefault(require("./context"));
var custom_1 = tslib_1.__importDefault(require("./custom"));
function ThemeProvider(props) {
    var children = props.children, palette = props.palette, disableCssBaseline = props.disableCssBaseline;
    var theme = React.useMemo(function () { return custom_1.default(palette); }, [palette]);
    var styleContent = React.useMemo(function () { return ({
        __html: "\n        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700');\n\n        body {\n          font-family: " + variables_1.default.fontFamily + ";\n          font-size: " + variables_1.default.textSize('default') + "px;\n          letter-spacing: 0;\n        }\n      "
    }); }, []);
    React.useEffect(function () { return Toast_1._setCurrentTheme(theme); }, [theme]);
    return (React.createElement(React.Fragment, null,
        React.createElement("style", { dangerouslySetInnerHTML: styleContent }),
        React.createElement(context_1.default, { value: theme },
            React.createElement(Container_1.default, null),
            !disableCssBaseline && React.createElement(CssBaseline_1.default, null),
            children)));
}
exports.default = React.memo(ThemeProvider);
