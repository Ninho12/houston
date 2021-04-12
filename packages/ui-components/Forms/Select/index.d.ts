import * as React from 'react';
import { SelectProps } from '@material-ui/core/Select';
import IFormAdapter from '@eduzz/houston-core/formAdapter';
declare type FieldSelectPropsExtends = 'id' | 'label' | 'name' | 'disabled' | 'type' | 'fullWidth' | 'multiple' | 'className';
export interface ISelectFieldProps extends Pick<SelectProps, FieldSelectPropsExtends> {
    loading?: boolean;
    helperText?: string;
    errorMessage?: string;
    form?: IFormAdapter<any>;
    options?: ISelectFieldOption[];
    emptyOption?: string;
    maxLabelItems?: number;
    value?: any;
    onChange?: (value: any, event: React.ChangeEvent<{
        name?: string;
        value: any;
    }>) => any;
    margin?: 'none' | 'dense' | 'normal';
}
export interface ISelectFieldOption {
    value: string | number;
    label: string;
    disabled?: boolean;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<ISelectFieldProps & React.RefAttributes<React.LegacyRef<HTMLSelectElement>>>>;
export default _default;
