import * as React from 'react';
import { TooltipProps } from '@material-ui/core/Tooltip';
declare type ITooltipPlacement = 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
declare type ITooltipExtends = 'open' | 'onOpen' | 'onClose';
export interface ITooltipProps extends Pick<TooltipProps, ITooltipExtends> {
    title: string;
    children?: React.ReactElement;
    placement?: ITooltipPlacement;
    disabled?: boolean;
}
declare const Tooltip: React.NamedExoticComponent<ITooltipProps>;
export default Tooltip;
