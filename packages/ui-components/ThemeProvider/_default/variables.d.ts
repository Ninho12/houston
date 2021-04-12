declare const fontSizes: {
    'xx-small': number;
    'x-small': number;
    small: number;
    normal: number;
    default: number;
    medium: number;
    large: number;
    'x-large': number;
    'xx-large': number;
};
declare const lineHeights: {
    compact: number;
    normal: number;
    comfortable: number;
};
declare const fontWeight: {
    light: number;
    regular: number;
    semibold: number;
    bold: number;
};
export declare type FontSizes = keyof typeof fontSizes;
export declare type LineHeights = keyof typeof lineHeights;
export declare type FontWeight = keyof typeof fontWeight;
declare const themeVariable: {
    fontFamily: string;
    colors: {
        focusLine: string;
    };
    radius: (unit?: number) => number;
    spacing: (unit?: number) => number;
    textSize: (size?: FontSizes) => number;
    lineHeight: (size?: LineHeights) => number;
    fontWeight: (size?: FontWeight) => number;
    palette: import("@material-ui/core/styles/createPalette").PaletteOptions;
};
export default themeVariable;
