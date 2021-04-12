import * as React from 'react';
import { TypographyProps } from '@material-ui/core/Typography';
import { FontSizes, FontWeight, LineHeights } from '../ThemeProvider/_default/variables';
declare type TypographyPropsExtends = 'className' | 'style' | 'children' | 'variant';
export interface ITypographyProps extends Pick<TypographyProps, TypographyPropsExtends> {
    size?: FontSizes;
    lineHeight?: LineHeights;
    fontWeight?: FontWeight;
    marginBottom?: boolean;
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<ITypographyProps & React.RefAttributes<HTMLSpanElement>>>;
export default _default;
