import React from "react";
import { shallow } from "enzyme";
import MainContainer from "./MainContainer";
import "@testing-library/jest-dom/extend-expect";

describe("MainContainer behaviour", () => {
   let component;
   beforeAll(() => {
      component = shallow(<MainContainer />);
   });
   test("Renders the component", () => {
      expect(component).toHaveLength(1);
      expect(component).toMatchSnapshot();
   });
});
