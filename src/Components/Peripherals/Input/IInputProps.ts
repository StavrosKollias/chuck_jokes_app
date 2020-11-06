export interface IInputProps {
   type: string;
   name: string;
   label?: string;
   className: string;
   id?: string;
   defaultValue?: string;
   min?: string;
   max?: string;
   step?: string;
   placeHolder?: string;
   icon?: JSX.Element;
   containerClassName: string;
   errorMessage: string;
   handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void;
   hanldeValidation?(e: string): boolean;
}
