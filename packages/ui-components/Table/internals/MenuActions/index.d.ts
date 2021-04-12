import * as React from 'react';
import { MenuProps } from '@material-ui/core/Menu';
import { ITableRow } from '../../interfaces';
import { ITableOptionProps } from '../../Option';
interface IProps extends Omit<MenuProps, 'open'> {
    anchorEl: HTMLElement;
    onClose: () => void;
    options: ITableOptionProps[];
    currentRow: ITableRow;
}
declare const _default: React.MemoExoticComponent<({ onClose, options, anchorEl, currentRow }: IProps) => JSX.Element>;
export default _default;
