import * as React from 'react';
import { TableCellProps } from '@material-ui/core/TableCell';
import { ITableAlign } from '../interfaces';
declare type ITableColumnExtends = 'id' | 'className';
export interface ITableColumnProps extends Pick<TableCellProps, ITableColumnExtends> {
    width?: number;
    label?: React.ReactNode;
    /**
     * Unique key, used for sorting
     */
    field: string;
    /**
     * Default `left`
     */
    align?: ITableAlign;
    /**
     * Control of ordered columns
     * Default `false`
     */
    sortable?: boolean;
    /**
     * Only the first and last columns can be fixed.
     * If there are actions in the table, the last fixed column will be disregarded.
     * If there is at least one fixed column, the table takes on a `white-space: no-wrap` style.
     * Default `false`
     */
    fixed?: boolean;
}
declare const _default: React.NamedExoticComponent<ITableColumnProps>;
export default _default;
