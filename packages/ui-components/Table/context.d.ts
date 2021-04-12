import * as React from 'react';
import { ITableColumnProps } from './Column';
import { ITableActions, ITableMessages, ITableRow, ITableSortable } from './interfaces';
import { ITableOptionProps } from './Option';
import { ITablePagination } from './Pagination';
interface ITableContext {
    loading: boolean;
    onSortable: ({ field, order }: ITableSortable) => void;
    messages?: ITableMessages;
    columns: ITableColumnProps[];
    rows: ITableRow[];
    actions: ITableActions | undefined;
    currentRow: ITableRow;
    setCurrentRow: React.Dispatch<React.SetStateAction<ITableRow>>;
    anchorEl: HTMLElement | null;
    setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement>>;
    options: ITableOptionProps[];
    setOptions: React.Dispatch<React.SetStateAction<ITableOptionProps[]>>;
    pagination: ITablePagination | undefined;
    hasCollapseData: boolean;
    numberColumns: number;
}
export declare const TableContext: React.Context<ITableContext>;
export declare const TableContextProvider: React.Provider<ITableContext>;
export declare function useTableContext(): ITableContext;
export default TableContextProvider;
