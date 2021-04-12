import * as React from 'react';
import { TableCellProps } from '@material-ui/core/TableCell';
declare type ITableCellExtends = 'id' | 'className' | 'children' | 'padding' | 'colSpan' | 'align' | 'onClick' | 'onDoubleClick';
export interface ITableCellProps extends Pick<TableCellProps, ITableCellExtends> {
    /**
     * Default `false`
     */
    truncate?: number;
}
declare const _default: React.NamedExoticComponent<ITableCellProps>;
export default _default;
