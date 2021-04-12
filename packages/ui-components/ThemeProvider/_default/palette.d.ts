import { PaletteOptions } from '@material-ui/core/styles/createPalette';
declare module '@material-ui/core/styles/createPalette' {
    interface SimplePaletteColorOptions {
        lighter?: string;
    }
    interface PaletteColor {
        lighter?: string;
    }
}
declare const palette: PaletteOptions;
export default palette;
