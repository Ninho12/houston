import * as React from 'react';
import Content from './Content';
export interface ITabsProps {
    value?: number;
    onChange?: (position: number) => void;
    children?: any;
}
declare type TabsComponent = React.NamedExoticComponent<ITabsProps> & {
    Content?: typeof Content;
};
declare const Tabs: TabsComponent;
export default Tabs;
