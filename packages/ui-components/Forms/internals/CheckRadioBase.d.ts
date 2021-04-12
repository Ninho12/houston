import * as React from 'react';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import IFormAdapter from '@eduzz/houston-core/formAdapter';
declare type FieldCheckboxPropsExtends = 'checked' | 'value' | 'onChange';
export interface ICheckboxRadioFieldProps extends Pick<CheckboxProps, FieldCheckboxPropsExtends> {
    Control: typeof Checkbox | typeof Radio;
    label?: React.ReactNode;
    description?: string;
    name: string;
    errorMessage?: string;
    form?: IFormAdapter<any>;
    isMultiple?: boolean;
    margin?: 'none' | 'normal';
}
declare const CheckboxRadioField: React.NamedExoticComponent<ICheckboxRadioFieldProps>;
export default CheckboxRadioField;
