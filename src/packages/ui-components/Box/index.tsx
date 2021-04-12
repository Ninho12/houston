import * as React from 'react';

import BoxMUI, { BoxProps } from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import clsx from 'clsx';

import WrapperTheme from '../ThemeProvider/WrapperTheme';

type IBoxSpacement = {
  margin?: number | string;
  padding?: number | string;
};

type BoxPropsExtends = 'id' | 'className' | 'children';

export interface IBoxProps extends Pick<BoxProps, BoxPropsExtends> {
  xs?: IBoxSpacement;
  sm?: IBoxSpacement;
  md?: IBoxSpacement;
  lg?: IBoxSpacement;
  xl?: IBoxSpacement;
}

const Box = React.memo<IBoxProps>(({ id, children, xs, sm, md, lg, xl, className }) => {
  const defaultMargin = React.useMemo(() => '16px 0', []);

  const useStyles = makeStyles(theme =>
    createStyles({
      box: {
        [theme.breakpoints.up('xs')]: {
          padding: xs && xs?.padding,
          margin: xs && xs?.margin ? xs?.margin : defaultMargin
        },

        [theme.breakpoints.up('sm')]: {
          padding: sm && sm?.padding,
          margin: sm && sm?.margin ? sm?.margin : defaultMargin
        },

        [theme.breakpoints.up('md')]: {
          padding: md && md?.padding,
          margin: md && md?.margin ? md?.margin : defaultMargin
        },

        [theme.breakpoints.up('lg')]: {
          padding: lg && lg?.padding,
          margin: lg && lg?.margin ? lg?.margin : defaultMargin
        },

        [theme.breakpoints.up('xl')]: {
          padding: xl && xl?.padding,
          margin: xl && xl?.margin ? xl?.margin : defaultMargin
        }
      }
    })
  );

  const classes = useStyles();

  return (
    <WrapperTheme>
      <BoxMUI id={id} className={clsx(className, classes.box)}>
        {children}
      </BoxMUI>
    </WrapperTheme>
  );
});

export default Box;
