import * as React from 'react';
import { ButtonProps } from '@material-ui/core/Button';
declare type ButtonPropsExtends = 'id' | 'onClick' | 'disabled' | 'href' | 'children' | 'type' | 'className' | 'fullWidth' | 'startIcon' | 'endIcon';
export declare type IButtonVariant = 'contained' | 'outlined' | 'text';
export interface IButtonProps extends Pick<ButtonProps, ButtonPropsExtends> {
    /**
     * Set this to change alert kind
     * @default info
     */
    variant?: IButtonVariant;
    loading?: boolean;
}
export declare const Test: React.FC<IButtonProps>;
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<IButtonProps & React.RefAttributes<HTMLButtonElement>>>;
export default _default;
