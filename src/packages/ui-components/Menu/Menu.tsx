import * as React from 'react';

import MenuMUI, { MenuProps } from '@material-ui/core/Menu';
import MenuItemMUI from '@material-ui/core/MenuItem';

import { useChildrenProps } from '../hooks/useChildrenProps';
import WrapperTheme from '../styles/ThemeProvider/WrapperTheme';
import Item, { IMenuItemProps } from './Item';

type MenuPropsExtends = 'id' | 'className' | 'anchorEl' | 'children' | 'onClose' | 'open';

export interface IMenuProps extends Pick<MenuProps, MenuPropsExtends> {}

type MenuComponent = React.NamedExoticComponent<IMenuProps> & {
  Item: typeof Item;
};

let incremeter = 0;

const Menu = React.memo<IMenuProps>(props => {
  const { children, ...otherProps } = props;

  const menuItems = useChildrenProps<IMenuItemProps>(children, Item).map(props => ({
    ...props,
    id: `item-${incremeter++}`
  }));

  return (
    <WrapperTheme>
      <MenuMUI {...otherProps} color='primary'>
        {menuItems?.map(item => (
          <MenuItemMUI key={item.id} id={item.id}>
            {item.children}
          </MenuItemMUI>
        ))}
      </MenuMUI>
    </WrapperTheme>
  );
}) as MenuComponent;

export default Menu;
