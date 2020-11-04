export interface IButtonProps {
   className: string;
   id: string;
   icon?: JSX.Element;
   title: string;
   label: string;
   handleClick(e:React.MouseEvent<HTMLButtonElement>): void;
}
