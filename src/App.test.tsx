import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App behaviour", () => {
   test("Renders the component", () => {
      const component = shallow(<App />);
      expect(component).toHaveLength(1);
   });
});
