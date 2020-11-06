import { IJoke } from "../Interfaces/IJokes";
import { spliceArray } from "../utils/utils";

test("splice array", () => {
   const randomArray: Array<IJoke> = [
      { id: 1, joke: "I am Joke 1", categories: ["explicit", "nerdy"] },
      { id: 2, joke: "I am Joke 2", categories: ["explicit", "nerdy"] },
      { id: 3, joke: "I am Joke 3", categories: ["explicit"] },
      { id: 4, joke: "I am Joke 4", categories: ["explicit"] },
      { id: 5, joke: "I am Joke 5", categories: ["explicit", "nerdy"] },
      { id: 6, joke: "I am Joke 6", categories: ["explicit", "nerdy"] },
      { id: 7, joke: "I am Joke 7", categories: ["explicit", "nerdy"] },
      { id: 8, joke: "I am Joke 8", categories: ["explicit", "nerdy"] },
   ];
   const splicedArray = spliceArray(randomArray, 0, 3);
   expect(splicedArray.length).toBe(3);
});
