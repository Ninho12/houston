import * as React from 'react';
interface ICollapseProps {
    visibled: boolean;
    onEnter?: () => void;
    destroyOnClose?: boolean;
}
declare const Collapse: React.NamedExoticComponent<ICollapseProps>;
export default Collapse;
