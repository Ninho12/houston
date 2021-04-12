import * as React from 'react';
import { TableRowProps } from '@material-ui/core/TableRow';
declare type ITableRowExtends = 'id' | 'className' | 'tabIndex' | 'children' | 'onClick' | 'onDoubleClick';
export interface ITableRowProps extends Pick<TableRowProps, ITableRowExtends> {
    /**
     * Row values, used only when there are actions (Table.Actions) in the table
     */
    data?: unknown;
}
declare const _default: React.NamedExoticComponent<ITableRowProps>;
export default _default;
