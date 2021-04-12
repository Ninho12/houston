import { StyleRules } from '@material-ui/core/styles';
import { Palette } from '@material-ui/core/styles/createPalette';
import { Overrides } from '@material-ui/core/styles/overrides';
import { LabComponentNameToClassKey } from '@material-ui/lab/themeAugmentation';
export declare type LabOverrides = {
    [Name in keyof LabComponentNameToClassKey]?: Partial<StyleRules<LabComponentNameToClassKey[Name]>>;
};
interface ICustomOverrides extends Partial<Overrides>, Partial<LabOverrides> {
    MuiTabScrollButton: any;
}
export default function overrides(pallet: Palette): ICustomOverrides;
export {};
