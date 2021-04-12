"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Menu_1 = tslib_1.__importDefault(require("@material-ui/core/Menu"));
var MenuItem_1 = tslib_1.__importDefault(require("@material-ui/core/MenuItem"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function () {
    return styles_1.createStyles({
        option: {
            display: 'flex',
            alignItems: 'center',
            '& svg, span': {
                marginRight: 8,
                fontSize: 24
            }
        }
    });
});
var MenuActions = function (_a) {
    var onClose = _a.onClose, options = _a.options, anchorEl = _a.anchorEl, currentRow = _a.currentRow;
    var classes = useStyles();
    var handleClick = React.useCallback(function (callback) {
        callback && callback(currentRow === null || currentRow === void 0 ? void 0 : currentRow.data);
        onClose();
    }, [onClose, currentRow]);
    return (React.createElement(Menu_1.default, { anchorEl: anchorEl, open: !!anchorEl, onClose: onClose, getContentAnchorEl: null, disableAutoFocusItem: true, disableAutoFocus: true, anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center'
        }, transformOrigin: {
            vertical: 'top',
            horizontal: 'center'
        }, elevation: 1 }, options === null || options === void 0 ? void 0 : options.map(function (option, index) {
        var disabled = typeof (option === null || option === void 0 ? void 0 : option.disabled) === 'boolean'
            ? option === null || option === void 0 ? void 0 : option.disabled
            : (option === null || option === void 0 ? void 0 : option.disabled) && currentRow && option.disabled(currentRow === null || currentRow === void 0 ? void 0 : currentRow.data);
        var hide = typeof (option === null || option === void 0 ? void 0 : option.hide) === 'boolean'
            ? option === null || option === void 0 ? void 0 : option.hide
            : (option === null || option === void 0 ? void 0 : option.hide) && currentRow && option.hide(currentRow === null || currentRow === void 0 ? void 0 : currentRow.data);
        if (hide) {
            return null;
        }
        return (React.createElement(MenuItem_1.default, { id: "menu-option-" + option.id, key: "menu-option-" + index, className: option.className, onClick: function () { return handleClick(option === null || option === void 0 ? void 0 : option.onClick); }, disabled: disabled },
            React.createElement("div", { className: classes.option },
                (option === null || option === void 0 ? void 0 : option.icon) && (option === null || option === void 0 ? void 0 : option.icon), option === null || option === void 0 ? void 0 :
                option.children)));
    })));
};
exports.default = React.memo(MenuActions);
