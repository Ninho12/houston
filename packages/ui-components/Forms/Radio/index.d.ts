import * as React from 'react';
import { ICheckboxRadioFieldProps } from '../internals/CheckRadioBase';
export interface IRadioFieldProps extends Omit<ICheckboxRadioFieldProps, 'Control' | 'isMultiple'> {
}
declare const RadioField: React.NamedExoticComponent<IRadioFieldProps>;
export default RadioField;
