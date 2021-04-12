import * as React from 'react';
import { Theme } from '@material-ui/core/styles';
export declare type ContextThemeType = Partial<Theme>;
declare const ContextThemeProvider: React.Provider<Partial<Theme>>;
export declare function useTheme(): Partial<Theme>;
export default ContextThemeProvider;
