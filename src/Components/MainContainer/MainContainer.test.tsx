import React from "react";
import { shallow } from "enzyme";
import MainContainer from "./MainContainer";

describe("MainContainer behaviour", () => {
   test("Renders the component", () => {
      const component = shallow(<MainContainer />);
      expect(component).toHaveLength(1);
   });
});
