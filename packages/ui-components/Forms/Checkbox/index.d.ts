import * as React from 'react';
import { ICheckboxRadioFieldProps } from '../internals/CheckRadioBase';
export interface ICheckboxFieldProps extends Omit<ICheckboxRadioFieldProps, 'Control'> {
}
declare const CheckboxField: React.NamedExoticComponent<ICheckboxFieldProps>;
export default CheckboxField;
