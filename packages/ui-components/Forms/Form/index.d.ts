import * as React from 'react';
import IFormAdapter from '@eduzz/houston-core/formAdapter';
export interface IFormProps {
    context: IFormAdapter<any>;
    children?: React.ReactNode;
}
export declare const FormFieldsContext: React.Context<IFormAdapter<any>>;
declare const Form: React.NamedExoticComponent<IFormProps>;
export default Form;
