import * as React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
import IFormAdapter from '@eduzz/houston-core/formAdapter';
import IFormMask from '@eduzz/houston-core/maskAdapter';
declare type FieldTextPropsExtends = 'id' | 'label' | 'name' | 'disabled' | 'placeholder' | 'type' | 'fullWidth' | 'helperText' | 'multiline' | 'value';
export interface ITextFieldProps extends Pick<TextFieldProps, FieldTextPropsExtends> {
    loading?: boolean;
    errorMessage?: string;
    mask?: IFormMask;
    form?: IFormAdapter<any>;
    onChange?: (value: any, event: React.ChangeEvent<HTMLInputElement>) => any;
    onBlur?: (value: any, event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => any;
    margin?: 'none' | 'dense' | 'normal';
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<ITextFieldProps & React.RefAttributes<React.LegacyRef<HTMLInputElement>>>>;
export default _default;
