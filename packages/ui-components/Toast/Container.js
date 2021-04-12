"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_toastify_1 = require("react-toastify");
var variables_1 = tslib_1.__importDefault(require("../ThemeProvider/_default/variables"));
var styles_1 = tslib_1.__importDefault(require("./styles"));
var ToastContainer = React.memo(function (props) {
    var styleContent = React.useMemo(function () { return ({
        __html: "\n        " + styles_1.default + "\n\n        .Toastify__toast {\n          border-radius: 4px;\n          margin-bottom: 16px;\n          padding: 8px 16px;\n        }\n\n        .Toastify__toast-body {\n          font-family: " + variables_1.default.fontFamily + ";\n          font-weight: 600;\n          padding-right: 8px;\n          line-height: 1.45;\n        }\n\n        .Toastify__close-button {\n          align-self: center;\n        }\n      "
    }); }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("style", { dangerouslySetInnerHTML: styleContent }),
        React.createElement(react_toastify_1.ToastContainer, tslib_1.__assign({}, props, { transition: react_toastify_1.Slide, position: 'top-right', autoClose: false, hideProgressBar: true, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: false, pauseOnHover: true, limit: 2 }))));
});
exports.default = ToastContainer;
