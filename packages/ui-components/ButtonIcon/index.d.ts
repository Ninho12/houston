import * as React from 'react';
import { IconButtonProps } from '@material-ui/core/IconButton';
declare type ButtonPropsExtends = 'disabled' | 'children' | 'onClick';
export interface IButtonProps extends Pick<IconButtonProps, ButtonPropsExtends> {
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<IButtonProps & React.RefAttributes<HTMLButtonElement>>>;
export default _default;
