import * as React from 'react';
import { Size, TableProps } from '@material-ui/core/Table';
import { ITableMessages, ITableSortable, ITableSubComponents } from './interfaces';
interface IProps extends Pick<TableProps, 'id' | 'className' | 'children'> {
    loading?: boolean;
    /**
     * Function called when clicking on an ordered column
     */
    onSortable?: (ordernation: ITableSortable) => void;
    /**
     * Default `false`
     */
    stickyHeader?: boolean;
    /**
     * Default `medium`
     */
    size?: Size;
    /**
     * Max Height table container
     */
    maxHeight?: number;
    /**
     * Messages for some situations, example: `when there is no date`
     */
    messages?: ITableMessages;
}
interface ITableProps extends ITableSubComponents, React.ForwardRefExoticComponent<IProps & React.RefAttributes<HTMLTableElement>> {
}
declare const Table: ITableProps;
export default Table;
