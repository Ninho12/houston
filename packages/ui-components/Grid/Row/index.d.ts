import * as React from 'react';
import { GridProps } from '@material-ui/core/Grid';
declare type RowPropsExtends = 'id' | 'className' | 'children' | 'justify' | 'alignItems' | 'style';
export interface IRowProps extends Pick<GridProps, RowPropsExtends> {
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<IRowProps & React.RefAttributes<HTMLDivElement>>>;
export default _default;
