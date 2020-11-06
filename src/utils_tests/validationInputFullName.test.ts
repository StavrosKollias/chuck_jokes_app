import { validationInputFullName } from "../utils/utils";

test("is valid Full Name", () => {
   let failName = "StavrosKollias";
   let failResult = validationInputFullName(failName);
   expect(failResult).toEqual(false);
   const passName = "stavros kollias";
   const passResult = validationInputFullName(passName);
   expect(passResult).toEqual(true);
   failName = "stavros 56' kollias13454";
   failResult = validationInputFullName(failName);
   expect(failResult).toEqual(false);
   failName = "stavros ";
   failResult = validationInputFullName(failName);
   expect(failResult).toEqual(false);
});
