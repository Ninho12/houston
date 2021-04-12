import * as React from 'react';
import { AlertProps, Color } from '@material-ui/lab/Alert';
import AlertAction from './Action';
import AlertTitle from './Title';
declare type AlertPropsExtends = 'id' | 'className' | 'children' | 'severity' | 'onClose' | 'icon';
interface IAlertProps extends Pick<AlertProps, AlertPropsExtends> {
    type?: Color;
    closable?: boolean;
    multiline?: boolean;
}
declare type IAlertSubcomponentes = {
    Action: typeof AlertAction;
    Title: typeof AlertTitle;
};
interface IAlertComponent extends IAlertSubcomponentes, React.ForwardRefExoticComponent<IAlertProps & React.RefAttributes<AlertProps>> {
}
declare const Alert: IAlertComponent;
export default Alert;
