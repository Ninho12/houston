import * as React from 'react';
import { ThemeProviderProps } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
export interface IThemePalette extends PaletteOptions {
}
declare type IThemeExtends = 'children';
interface IThemeProviderProps extends Pick<ThemeProviderProps, IThemeExtends> {
    /**
     * Custom pallete colors (MUI)
     */
    palette?: Partial<IThemePalette>;
    disableCssBaseline?: boolean;
}
declare function ThemeProvider(props: IThemeProviderProps): JSX.Element;
declare const _default: React.MemoExoticComponent<typeof ThemeProvider>;
export default _default;
