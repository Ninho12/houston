import * as React from 'react';
import { IButtonProps } from '../../Button';
export interface IAlertActionProps extends Omit<IButtonProps, 'children'> {
    label: React.ReactNode;
}
declare const _default: React.NamedExoticComponent<IAlertActionProps>;
export default _default;
