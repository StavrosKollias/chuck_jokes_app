import React from "react";
import { shallow } from "enzyme";
import HomeContainer from "./HomeContainer";

describe("Home Container function", () => {
   test("is called once", () => {
      const fakefunction: any = jest.fn(() => "5");
      shallow(<HomeContainer onRender={fakefunction} />);
      expect(fakefunction).toHaveBeenCalledTimes(1);
   });
});
