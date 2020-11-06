export interface IControlSearchBarProps {
   validationInputFullName(e: string): boolean;
   handleInputChangeFilter(e: any): void;
   filterData(e: any): void;
   error: boolean;
}
