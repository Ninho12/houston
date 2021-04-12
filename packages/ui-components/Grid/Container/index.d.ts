import * as React from 'react';
import { ContainerProps } from '@material-ui/core/Container';
import { IContainerType } from '../interfaces';
declare type ContainerPropsExtends = 'id' | 'className' | 'children' | 'style' | 'tabIndex';
export interface IContainerProps extends Pick<ContainerProps, ContainerPropsExtends> {
    /**
     * Type container
     *
     * `comfortable` spacing big
     * `cozy` spacing medium
     * `compact` spacing small
     *
     *  default `cozy`
     */
    spacing?: IContainerType;
    /**
     * Types layout
     *
     * `fluid` max-width ignored
     * `solid` limited
     *
     * default `solid`
     */
    layout?: 'fluid' | 'solid';
}
declare const _default: React.MemoExoticComponent<React.ForwardRefExoticComponent<IContainerProps & React.RefAttributes<HTMLDivElement>>>;
export default _default;
