import { IJoke } from "../../../Interfaces/IJokes";

export interface IJokesContainerState {
   data: Array<IJoke>;
   index: number;
   multiple: boolean;
   filter: boolean;
   filterString: string ;
   error: boolean;
   errorInput: boolean;
   loading: boolean;
   timeOutScrolling:number;
}
