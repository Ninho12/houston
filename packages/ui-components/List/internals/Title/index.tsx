import * as React from 'react';

import Typography from '../../../Typography';
import { IListTitleProps } from '../../Title';

interface IProps extends IListTitleProps {}

const Title = ({ children, ...props }: IProps) => {
  return (
    <Typography {...props} size='normal' lineHeight='compact'>
      {children}
    </Typography>
  );
};

export default React.memo(Title);
