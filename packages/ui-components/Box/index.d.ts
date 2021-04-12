import * as React from 'react';
import { BoxProps } from '@material-ui/core/Box';
declare type IBoxSpacement = {
    margin?: number | string;
    padding?: number | string;
};
declare type BoxPropsExtends = 'id' | 'className' | 'children';
export interface IBoxProps extends Pick<BoxProps, BoxPropsExtends> {
    xs?: IBoxSpacement;
    sm?: IBoxSpacement;
    md?: IBoxSpacement;
    lg?: IBoxSpacement;
    xl?: IBoxSpacement;
}
declare const Box: React.NamedExoticComponent<IBoxProps>;
export default Box;
