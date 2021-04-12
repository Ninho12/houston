"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./yupLocale");
var react_1 = require("react");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var useObservable_1 = require("@eduzz/houston-hooks/useObservable");
var formik_1 = require("formik");
var yup = require("yup");
/**
 * Hook implemation of IFormAdapter
 * @param IUseFormParams
 */
function useForm(_a) {
    var onSubmit = _a.onSubmit, onSubmitWithErrors = _a.onSubmitWithErrors, validationSchema = _a.validationSchema, initialValues = _a.initialValues;
    var promiseRef = react_1.useRef({}).current;
    var handlers = react_1.useRef({}).current;
    var submitData = react_1.useRef(new rxjs_1.Subject()).current;
    useObservable_1.default(function () {
        return submitData.pipe(operators_1.switchMap(function (_a) {
            var model = _a.model, formikHelpers = _a.formikHelpers;
            var result$ = onSubmit && onSubmit(model, formikHelpers);
            var result = rxjs_1.of(true).pipe(operators_1.switchMap(function () { return (!result$ ? rxjs_1.of(null) : result$); }), operators_1.catchError(function () { return rxjs_1.of(null); }), operators_1.share());
            promiseRef.promise = result.toPromise();
            return result;
        }));
    }, []);
    var formik = formik_1.useFormik({
        initialValues: initialValues !== null && initialValues !== void 0 ? initialValues : {},
        validationSchema: validationSchema ? function () { return validationSchema(yup); } : null,
        onSubmit: function (model, formikHelpers) {
            submitData.next({ model: model, formikHelpers: formikHelpers });
            return new Promise(function (resolve) { return setTimeout(function () { return resolve(promiseRef.promise); }, 500); });
        }
    });
    react_1.useEffect(function () {
        if (!formik.submitCount || formik.isValid)
            return;
        onSubmitWithErrors && onSubmitWithErrors(formik.errors, formik.values);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.submitCount]);
    var handleChange = react_1.useRef(function (field) {
        if (!handlers[field]) {
            handlers[field] = function (value) {
                formik.setFieldTouched(field, true, false);
                formik.setFieldValue(field, value, true);
            };
        }
        return handlers[field];
    }).current;
    var handleSubmit = react_1.useCallback(function (e) { return formik.handleSubmit(e); }, [formik]);
    return {
        handleSubmit: handleSubmit,
        handleChange: handleChange,
        handleReset: function () { return formik.resetForm({ values: initialValues }); },
        getFieldValue: function (name) { return formik.getFieldMeta(name).value; },
        setFieldValue: function (name, value) {
            formik.setFieldTouched(name, true, false);
            formik.setFieldValue(name, value, true);
        },
        getFieldError: function (name) {
            return formik.touched[name] || formik.submitCount > 0 ? formik.getFieldMeta(name).error : '';
        },
        reset: function (values) { return formik.resetForm({ values: values === undefined ? initialValues : values }); },
        values: formik.values,
        isSubmitting: formik.isSubmitting,
        isValid: formik.isValid
    };
}
exports.default = useForm;
