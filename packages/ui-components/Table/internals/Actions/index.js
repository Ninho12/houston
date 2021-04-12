"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var context_1 = require("../../context");
var MenuActions_1 = tslib_1.__importDefault(require("../MenuActions"));
var Actions = function () {
    var _a = context_1.useTableContext(), currentRow = _a.currentRow, actions = _a.actions, anchorEl = _a.anchorEl, setAnchorEl = _a.setAnchorEl, options = _a.options, setOptions = _a.setOptions, setCurrentRow = _a.setCurrentRow;
    var handleCloseActions = React.useCallback(function () {
        setAnchorEl(null);
        setTimeout(function () {
            setOptions([]);
            setCurrentRow(null);
        }, 180);
    }, [setAnchorEl, setOptions, setCurrentRow]);
    if (!actions) {
        return null;
    }
    return (React.createElement(MenuActions_1.default, { anchorEl: anchorEl, onClose: handleCloseActions, options: !(options === null || options === void 0 ? void 0 : options.length) ? actions === null || actions === void 0 ? void 0 : actions.options : options, currentRow: currentRow }));
};
exports.default = React.memo(Actions);
