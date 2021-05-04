import * as React from 'react';
import { createUseStyles as createUseStylesJSS } from 'react-jss';

import useTheme, { HoustonTheme } from './useTheme';

type CSSPropertiesPseudo = React.CSSProperties | { [key: string]: React.CSSProperties };

type NamedStyles<ClassName extends string, Props> = Record<
  ClassName,
  CSSPropertiesPseudo | ((param: IUseStyleParam<Props>) => CSSPropertiesPseudo)
>;

export interface IUseStyleParam<Props> {
  props: Partial<Props>;
  theme: HoustonTheme;
}

export default function createUseStyles<Props extends Record<string, unknown>, ClassName extends string = string>(
  style: NamedStyles<ClassName, Props>
): (props?: Partial<Props>) => Record<ClassName, string> {
  const useStyle = createUseStylesJSS(style);

  return props => {
    const theme = useTheme();
    return useStyle({ props: props ?? {}, theme });
  };
}
