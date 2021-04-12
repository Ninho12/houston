"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/* eslint-disable no-restricted-imports */
var React = tslib_1.__importStar(require("react"));
var CircularProgress_1 = tslib_1.__importDefault(require("@material-ui/core/CircularProgress/CircularProgress"));
var InputAdornment_1 = tslib_1.__importDefault(require("@material-ui/core/InputAdornment/InputAdornment"));
var TextField_1 = tslib_1.__importDefault(require("@material-ui/core/TextField"));
var useMask_1 = tslib_1.__importDefault(require("../../hooks/useMask"));
var WrapperTheme_1 = tslib_1.__importDefault(require("../../ThemeProvider/WrapperTheme"));
var Form_1 = require("../Form");
var TextField = React.forwardRef(function (_a, ref) {
    var formProps = _a.form, mask = _a.mask, value = _a.value, name = _a.name, loading = _a.loading, onChange = _a.onChange, onBlur = _a.onBlur, errorMessageProp = _a.errorMessage, fullWidth = _a.fullWidth, margin = _a.margin, props = tslib_1.__rest(_a, ["form", "mask", "value", "name", "loading", "onChange", "onBlur", "errorMessage", "fullWidth", "margin"]);
    var formContext = React.useContext(Form_1.FormFieldsContext);
    var form = formProps !== null && formProps !== void 0 ? formProps : formContext;
    if (!name && form) {
        throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }
    value = form && name ? form.getFieldValue(name) : value;
    var _b = useMask_1.default(mask, value), maskClean = _b.maskClean, maskedValue = _b.maskedValue;
    var handleChange = React.useCallback(function (e) {
        onChange && onChange(maskClean(e.currentTarget.value), e);
        form && form.setFieldValue(name, maskClean(e.currentTarget.value));
    }, [onChange, maskClean, form, name]);
    var handleBlur = React.useCallback(function (e) {
        onBlur && onBlur(maskClean(e.currentTarget.value), e);
    }, [onBlur, maskClean]);
    var inputLabelProps = React.useMemo(function () { return (tslib_1.__assign({}, (props.placeholder ? { shrink: true } : {}))); }, [props.placeholder]);
    var inputProps = React.useMemo(function () { return ({
        endAdornment: !loading ? null : (React.createElement(InputAdornment_1.default, { position: 'end' },
            React.createElement(CircularProgress_1.default, { color: 'secondary', size: 20 })))
    }); }, [loading]);
    var errorMessage = errorMessageProp !== null && errorMessageProp !== void 0 ? errorMessageProp : form === null || form === void 0 ? void 0 : form.getFieldError(name);
    var hasError = !!errorMessage;
    return (React.createElement(WrapperTheme_1.default, null,
        React.createElement(TextField_1.default, tslib_1.__assign({ error: hasError }, props, { disabled: (form === null || form === void 0 ? void 0 : form.isSubmitting) || props.disabled, helperText: errorMessage !== null && errorMessage !== void 0 ? errorMessage : props.helperText, name: name, margin: margin !== null && margin !== void 0 ? margin : 'normal', variant: 'outlined', value: maskedValue !== null && maskedValue !== void 0 ? maskedValue : '', inputRef: ref, onChange: handleChange, onBlur: handleBlur, fullWidth: fullWidth !== null && fullWidth !== void 0 ? fullWidth : true, InputLabelProps: inputLabelProps, InputProps: inputProps }))));
});
exports.default = React.memo(TextField);
