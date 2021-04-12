import * as React from 'react';

import ListItemIconMUI from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@eduzz/houston-ui/ButtonIcon';
import Typography from '@eduzz/houston-ui/Typography';

import clsx from 'clsx';

import { IListRightProps } from '../../Right';

const useStyles = makeStyles(theme => ({
  iconRoot: {
    minWidth: 20,
    '& svg': {
      width: 20,
      height: 20
    }
  },
  rightRoot: {
    color: theme.palette.grey[500],
    marginLeft: 'auto'
  },
  rightText: {
    color: theme.palette.grey[600]
  },
  clickable: {
    cursor: 'pointer'
  }
}));

interface IProps extends IListRightProps {}

const Right = ({ icon, text, onClick, ...rest }: IProps) => {
  const classes = useStyles();

  if (icon && onClick) {
    return (
      <IconButton
        className={clsx([classes.rightRoot, classes.iconRoot, onClick && classes.clickable])}
        onClick={onClick && onClick}
        size='small'
      >
        {icon}
      </IconButton>
    );
  }

  if (icon) {
    return <ListItemIconMUI className={clsx([classes.rightRoot, classes.iconRoot])}>{icon}</ListItemIconMUI>;
  }

  if (text) {
    return (
      <Typography
        {...rest}
        className={clsx([classes.rightRoot, classes.rightText, onClick && classes.clickable])}
        onClick={onClick && onClick}
        size='xx-small'
      >
        {text}
      </Typography>
    );
  }

  return null;
};

export default Right;
