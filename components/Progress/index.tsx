import * as React from 'react';

import BoxMUI from '@material-ui/core/Box';
import CircularProgressMUI, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import { ThemeProvider } from '@material-ui/core/styles';
import TypographyMUI from '@material-ui/core/Typography';

import { useTheme } from '../ThemeProvider/context';

type CircularProgressPropsExtends = 'className' | 'style' | 'color' | 'variant';

export interface ICircularProgressProps extends Pick<CircularProgressProps, CircularProgressPropsExtends> {
  type: 'line' | 'rounded' | 'percentage';
  total?: number;
  current: number;
}

const Progress = React.forwardRef<HTMLDivElement, ICircularProgressProps>(props => {
  const theme = useTheme();

  const { type, total, current } = props;

  return (
    <ThemeProvider theme={theme}>
      <BoxMUI position='relative' display='inline-flex'>
        <CircularProgressMUI variant='determinate' value={Math.round((current * 100) / total)} />
        <BoxMUI
          top={0}
          left={0}
          bottom={0}
          right={0}
          position='absolute'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <TypographyMUI variant='caption' component='div' color='textSecondary'>
            {type === 'rounded' ? `${current}/${total}` : `${Math.round((current * 100) / total)}%`}
          </TypographyMUI>
        </BoxMUI>
      </BoxMUI>
    </ThemeProvider>
  );
});

export default React.memo(Progress);
