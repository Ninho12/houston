declare module '@mui/material/styles/createTheme' {
    interface Theme {
        houston?: IHoustonTheme;
    }
    interface ThemeOptions {
        houston?: IHoustonTheme;
    }
}
export declare type HoustonThemeBuilder = {
    colors?: Pick<HoustonColors, 'primary' | 'secondary'>;
    variables?: IHoustonTheme['variables'];
};
export declare type HoustonBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export declare type HoustonBreakpoints = {
    up: (key: HoustonBreakpoint | number) => string;
    down: (key: HoustonBreakpoint | number) => string;
    between: (start: HoustonBreakpoint | number, end: HoustonBreakpoint | number) => string;
    only: (key: HoustonBreakpoint) => string;
};
export declare type HoustonFontSizes = 'xx-small' | 'x-small' | 'small' | 'normal' | 'default' | 'medium' | 'large' | 'x-large' | 'xx-large';
export declare type HoustonLineHeights = 'normal' | 'compact' | 'comfortable';
export declare type HoustonFontWeight = 'light' | 'regular' | 'semibold' | 'bold';
export declare type HoustonColors = {
    background: {
        paper: string;
        default: string;
    };
    common: {
        black: string;
        white: string;
    };
    error: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
    };
    grey: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        A100: string;
        A200: string;
        A400: string;
        A700: string;
    };
    warning: {
        main: string;
        dark: string;
        light: string;
        contrastText: string;
    };
    primary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
    };
    secondary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
    };
    info: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
    };
    success: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
    };
    text: {
        disabled: string;
        hint: string;
        primary: string;
        secondary: string;
    };
};
export interface IHoustonTheme {
    fontFamily: string;
    radius: (unit?: number) => number;
    spacing: (unit?: number) => number;
    textSize: (size?: HoustonFontSizes) => number;
    lineHeight: (size?: HoustonLineHeights) => number;
    fontWeight: (size?: HoustonFontWeight) => number;
    breakpoints: HoustonBreakpoints;
    variables: unknown;
    colors: HoustonColors;
}
