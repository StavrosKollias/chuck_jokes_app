import React from "react";
import { shallow } from "enzyme";

import MainContainer from "./MainContainer";
import HomeContainer from "../Home/HomeContainer";
import Search from "../Search/Search";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

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
