"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Tooltip_1 = tslib_1.__importDefault(require("@material-ui/core/Tooltip"));
var Tooltip = React.memo(function (_a) {
    var title = _a.title, _b = _a.placement, placement = _b === void 0 ? 'top' : _b, children = _a.children, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = tslib_1.__rest(_a, ["title", "placement", "children", "disabled"]);
    return (React.createElement(Tooltip_1.default, tslib_1.__assign({}, props, { disableTouchListener: disabled, disableHoverListener: disabled, disableFocusListener: disabled, onOpen: props === null || props === void 0 ? void 0 : props.onOpen, onClose: props === null || props === void 0 ? void 0 : props.onClose, placement: placement, title: title, arrow: true }), children));
});
exports.default = Tooltip;
