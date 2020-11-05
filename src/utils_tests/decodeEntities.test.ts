import { decodeEntities } from "../utils/utils";

test("Checks regord existance", () => {
   const stringDemo = "Chris&apos; corner &lcub; is &rcub; costing &pound; &comma; &laquo; Special";
   expect(decodeEntities(stringDemo)).toBe("Chris' corner { is } costing £ , « Special");
});
