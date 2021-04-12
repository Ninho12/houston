import * as React from 'react';
export interface IListRightProps {
    id?: string;
    className?: string;
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLDivElement | HTMLParagraphElement>;
    text?: string;
}
declare const _default: React.NamedExoticComponent<IListRightProps>;
export default _default;
