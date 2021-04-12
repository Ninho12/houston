import * as React from 'react';
import { ToastOptions } from 'react-toastify';
import { Theme } from '@material-ui/core/styles';
declare type IToastPropsExtends = 'onOpen' | 'onClose' | 'onClick';
interface IToastOptions extends Pick<ToastOptions, IToastPropsExtends> {
}
export declare function _setCurrentTheme(theme: Theme): void;
declare class Toast {
    private static defaultOptions;
    static success(content: React.ReactNode, options?: IToastOptions): void;
    static error(content: React.ReactNode, options?: IToastOptions): void;
    static info(content: React.ReactNode, options?: IToastOptions): void;
}
export default Toast;
