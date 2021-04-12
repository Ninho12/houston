import * as React from 'react';
import { ListProps as ListPropsMUI } from '@material-ui/core/List';
import Item from './Item';
import Left from './Left';
import Right from './Right';
import Subtitle from './Subtitle';
import Title from './Title';
declare type ListProps = 'id' | 'className' | 'children';
export interface IListProps extends Pick<ListPropsMUI, ListProps> {
    stripedRows?: boolean;
}
declare type ListComponent = React.NamedExoticComponent<IListProps> & {
    Item?: typeof Item;
    Title?: typeof Title;
    Subtitle?: typeof Subtitle;
    Left?: typeof Left;
    Right?: typeof Right;
};
declare const List: ListComponent;
export default List;
