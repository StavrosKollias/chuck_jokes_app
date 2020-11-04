export interface IButtonComponentProps {
   className: string;
   id: string;
   icon?: JSX.Element;
   title: string;
   label: string;
   handleClick(e: any): void;
}
