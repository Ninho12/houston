"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormFieldsContext = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
exports.FormFieldsContext = React.createContext(null);
var Form = React.memo(function (_a) {
    var children = _a.children, context = _a.context;
    return (React.createElement(exports.FormFieldsContext.Provider, { value: context },
        React.createElement("form", { onSubmit: context.handleSubmit, onReset: context.handleReset }, children)));
});
exports.default = Form;
