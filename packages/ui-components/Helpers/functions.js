"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isReactComponent = exports.getReactFirstChildrenProps = exports.getReactChildrenProps = exports.getReactChildrenComponent = exports.truncateText = void 0;
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
function truncateText(value, crop) {
    if ((value === null || value === void 0 ? void 0 : value.length) <= crop) {
        return value;
    }
    return value.slice(0, crop) + "...";
}
exports.truncateText = truncateText;
function getReactChildrenComponent(children, componentType) {
    return React.Children.map(children, function (child) {
        return isReactComponent(child, componentType) ? child : null;
    }).filter(function (result) { return !!result; });
}
exports.getReactChildrenComponent = getReactChildrenComponent;
function getReactChildrenProps(children, componentType) {
    return React.Children.map(children, function (child) {
        if (!isReactComponent(child, componentType))
            return null;
        return tslib_1.__assign({}, child.props);
    }).filter(function (result) { return !!result; });
}
exports.getReactChildrenProps = getReactChildrenProps;
function getReactFirstChildrenProps(children, componentType) {
    var result = getReactChildrenProps(children, componentType);
    return result && result[0];
}
exports.getReactFirstChildrenProps = getReactFirstChildrenProps;
function isReactComponent(child, componentType) {
    if (componentType) {
        return child && React.isValidElement(child) && (child === null || child === void 0 ? void 0 : child.type) === componentType;
    }
    return child && React.isValidElement(child);
}
exports.isReactComponent = isReactComponent;
