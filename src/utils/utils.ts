import { IJoke } from "../Interfaces/IJokes";

export const recordAllreadyExists = (arrayDisplayed: Array<IJoke>, record: IJoke) => {
   const recordFilter = arrayDisplayed.filter((e, i) => {
      return e.id == record.id;
   });
   return recordFilter.length > 0;
};
