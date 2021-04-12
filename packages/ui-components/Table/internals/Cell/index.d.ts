import * as React from 'react';
import { ITableCellProps } from '../../Cell';
interface IProps extends ITableCellProps {
    fixed?: boolean;
    list?: boolean;
}
declare const _default: React.MemoExoticComponent<(props: IProps) => JSX.Element>;
export default _default;
