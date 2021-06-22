import * as React from 'react';

type IMenuItemExtends = 'id' | 'className' | 'children';

export interface IMenuItemProps extends Pick<React.HTMLAttributes<HTMLDivElement>, IMenuItemExtends> {
  onClick?: (data: unknown) => void;
  icon?: React.ReactNode;
}

export default React.memo<IMenuItemProps>(() => null);
