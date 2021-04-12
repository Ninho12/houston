import { IListRightProps } from '../../Right';
interface IProps extends IListRightProps {
}
declare const Right: ({ icon, text, onClick, ...rest }: IProps) => JSX.Element;
export default Right;
