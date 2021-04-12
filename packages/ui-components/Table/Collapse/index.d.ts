import * as React from 'react';
import { TableProps } from '@material-ui/core/Table';
import { ITableCollapseType } from '../interfaces';
declare type ITableCollapse = 'id' | 'className' | 'tabIndex' | 'children';
export interface ITableCollapseProps extends Pick<TableProps, ITableCollapse> {
    loading?: boolean;
    /**
     * Default `false`
     */
    onCollapse?: (data?: unknown) => void;
    /**
     * If `list` will not render the bottom columns and borders
     */
    type?: ITableCollapseType;
}
declare const _default: React.NamedExoticComponent<ITableCollapseProps>;
export default _default;
