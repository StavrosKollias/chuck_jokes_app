import { IJoke } from "../Interfaces/IJokes";
import { recordAllreadyExists } from "../utils/utils";

test("Checks regord existance", () => {
   const existingRecords: Array<IJoke> = [
      { id: 1, joke: "Chuck Norris is the best fighter", categories: ["nerdy"] },
      { id: 2, joke: "Chuck Norris is Killed 10sharks with his finger", categories: ["nerdy"] },
   ];

   const newRecord: IJoke = { id: 5, joke: "Chuck Norris is the brothe of jeasus", categories: ["nerdy"] };

   expect(recordAllreadyExists(existingRecords, newRecord)).toBe(false);
});
