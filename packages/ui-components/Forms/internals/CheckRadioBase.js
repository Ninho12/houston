"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var FormControlLabel_1 = tslib_1.__importDefault(require("@material-ui/core/FormControlLabel"));
var FormHelperText_1 = tslib_1.__importDefault(require("@material-ui/core/FormHelperText"));
var styles_1 = require("@material-ui/core/styles");
var WrapperTheme_1 = tslib_1.__importDefault(require("../../ThemeProvider/WrapperTheme"));
var Typography_1 = tslib_1.__importDefault(require("../../Typography"));
var Form_1 = require("../Form");
var useStyles = styles_1.makeStyles(function () {
    return styles_1.createStyles({
        marginDense: {
            padding: '0 8px'
        }
    });
});
var CheckboxRadioField = React.memo(function (_a) {
    var Control = _a.Control, label = _a.label, name = _a.name, description = _a.description, checked = _a.checked, formProps = _a.form, value = _a.value, errorMessageProp = _a.errorMessage, isMultiple = _a.isMultiple, onChange = _a.onChange, margin = _a.margin;
    var classes = useStyles();
    var formContext = React.useContext(Form_1.FormFieldsContext);
    var form = formProps !== null && formProps !== void 0 ? formProps : formContext;
    var isChecked = React.useMemo(function () {
        var _a;
        if (isMultiple) {
            return ((_a = form === null || form === void 0 ? void 0 : form.getFieldValue(name)) !== null && _a !== void 0 ? _a : []).includes(value);
        }
        return form ? form.getFieldValue(name) === true : checked;
    }, [checked, form, isMultiple, name, value]);
    var handleChange = React.useCallback(function (e, checked) {
        var _a;
        if (!isMultiple) {
            form === null || form === void 0 ? void 0 : form.setFieldValue(name, checked);
            onChange && onChange(e, checked);
            return;
        }
        var setValue = new Set((_a = form.getFieldValue(name)) !== null && _a !== void 0 ? _a : []);
        if (checked) {
            setValue.add(value);
        }
        else {
            setValue.delete(value);
        }
        form.setFieldValue(name, Array.from(setValue));
    }, [form, isMultiple, name, onChange, value]);
    var errorMessage = errorMessageProp !== null && errorMessageProp !== void 0 ? errorMessageProp : form === null || form === void 0 ? void 0 : form.getFieldError(name);
    var hasError = !!errorMessage;
    if (isMultiple && !form) {
        throw new Error("CheckboxField " + name + ": form is required for isMultiple");
    }
    return (React.createElement(WrapperTheme_1.default, null,
        React.createElement(FormControlLabel_1.default, { control: React.createElement(Control, { classes: { root: margin === 'none' && classes.marginDense }, checked: isChecked, onChange: handleChange, name: name, color: 'primary' }), label: label && typeof label !== 'string' ? (label) : (React.createElement(React.Fragment, null,
                React.createElement(Typography_1.default, null,
                    label,
                    description && (React.createElement(React.Fragment, null,
                        React.createElement("br", null),
                        ' ',
                        React.createElement(Typography_1.default, { size: 'x-small', fontWeight: 'regular' }, description)))),
                hasError && React.createElement(FormHelperText_1.default, { error: true }, errorMessage))) })));
});
exports.default = CheckboxRadioField;
