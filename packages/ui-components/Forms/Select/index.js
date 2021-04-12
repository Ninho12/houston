"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Checkbox_1 = tslib_1.__importDefault(require("@material-ui/core/Checkbox"));
var CircularProgress_1 = tslib_1.__importDefault(require("@material-ui/core/CircularProgress"));
var FormControl_1 = tslib_1.__importDefault(require("@material-ui/core/FormControl"));
var FormHelperText_1 = tslib_1.__importDefault(require("@material-ui/core/FormHelperText"));
var InputAdornment_1 = tslib_1.__importDefault(require("@material-ui/core/InputAdornment"));
var InputLabel_1 = tslib_1.__importDefault(require("@material-ui/core/InputLabel"));
var ListItemText_1 = tslib_1.__importDefault(require("@material-ui/core/ListItemText"));
var MenuItem_1 = tslib_1.__importDefault(require("@material-ui/core/MenuItem"));
var Select_1 = tslib_1.__importDefault(require("@material-ui/core/Select"));
var WrapperTheme_1 = tslib_1.__importDefault(require("../../ThemeProvider/WrapperTheme"));
var Form_1 = require("../Form");
var SelectField = React.forwardRef(function (_a, ref) {
    var label = _a.label, formProps = _a.form, value = _a.value, name = _a.name, loading = _a.loading, onChange = _a.onChange, maxLabelItems = _a.maxLabelItems, errorMessageProp = _a.errorMessage, fullWidth = _a.fullWidth, options = _a.options, emptyOption = _a.emptyOption, helperText = _a.helperText, margin = _a.margin, props = tslib_1.__rest(_a, ["label", "form", "value", "name", "loading", "onChange", "maxLabelItems", "errorMessage", "fullWidth", "options", "emptyOption", "helperText", "margin"]);
    var formContext = React.useContext(Form_1.FormFieldsContext);
    var form = formProps !== null && formProps !== void 0 ? formProps : formContext;
    if (!name && form) {
        throw new Error('@eduzz/houston-ui: to use form prop you need provide a name for the field');
    }
    var endAdornment = React.useMemo(function () {
        return !loading ? null : (React.createElement(InputAdornment_1.default, { position: 'end' },
            React.createElement("div", { style: { backgroundColor: 'white', zIndex: 1, position: 'relative' } },
                React.createElement(CircularProgress_1.default, { color: 'secondary', size: 20 }))));
    }, [loading]);
    var renderValue = React.useCallback(function (selected) {
        var _a;
        return !Array.isArray(selected)
            ? (_a = options.find(function (o) { return selected === o.value; })) === null || _a === void 0 ? void 0 : _a.label
            : selected.length > (maxLabelItems !== null && maxLabelItems !== void 0 ? maxLabelItems : 3)
                ? selected.length + " selecionados"
                : options
                    .filter(function (o) { return selected.includes(o.value); })
                    .map(function (o) { return o.label; })
                    .join(', ');
    }, [options, maxLabelItems]);
    var handleChange = React.useCallback(function (e) {
        var value = e.target.value;
        if (Array.isArray(value) && value.includes('')) {
            value = [];
        }
        onChange && onChange(value, e);
        form && form.setFieldValue(name, value);
    }, [onChange, form, name]);
    value = form && name ? form.getFieldValue(name) : value;
    var errorMessage = errorMessageProp !== null && errorMessageProp !== void 0 ? errorMessageProp : form === null || form === void 0 ? void 0 : form.getFieldError(name);
    var hasError = !!errorMessage;
    return (React.createElement(WrapperTheme_1.default, null,
        React.createElement(FormControl_1.default, { margin: margin !== null && margin !== void 0 ? margin : 'normal', fullWidth: fullWidth !== null && fullWidth !== void 0 ? fullWidth : true, error: !!errorMessage, variant: 'outlined' },
            !!label && React.createElement(InputLabel_1.default, { error: !!errorMessage }, label),
            React.createElement(Select_1.default, tslib_1.__assign({ error: hasError }, props, { inputRef: ref, disabled: (form === null || form === void 0 ? void 0 : form.isSubmitting) || props.disabled, name: name, value: value !== null && value !== void 0 ? value : (props.multiple ? [] : ''), onChange: handleChange, fullWidth: fullWidth !== null && fullWidth !== void 0 ? fullWidth : true, label: label, endAdornment: endAdornment, renderValue: renderValue }),
                emptyOption && React.createElement(MenuItem_1.default, { value: '' }, emptyOption),
                (options || []).map(function (option) { return (React.createElement(MenuItem_1.default, { disabled: option.disabled, key: option.value, value: option.value },
                    props.multiple && React.createElement(Checkbox_1.default, { checked: value === null || value === void 0 ? void 0 : value.includes(option.value) }),
                    React.createElement(ListItemText_1.default, { primary: option.label }))); })),
            !!(errorMessage || helperText) && (React.createElement(FormHelperText_1.default, { error: !!errorMessage, variant: 'outlined' }, errorMessage || helperText)))));
});
exports.default = React.memo(SelectField);
