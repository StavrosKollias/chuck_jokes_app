import React from "react";
import { shallow } from "enzyme";
import MainContainer from "./MainContainer";

describe("MainContainer behaviour", () => {
   let component;
   beforeAll(() => {
      component = shallow(<MainContainer />);
   });
   test("Renders the component", () => {
      expect(component).toHaveLength(1);
   });
});
