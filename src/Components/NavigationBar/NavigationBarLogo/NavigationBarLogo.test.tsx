import React from "react";
import { shallow } from "enzyme";
import NavigationLogo from "./NavigationBarLogo";

describe("check Label  Logo", () => {
   const wrapper = shallow(<NavigationLogo logoLabel="Deadly Jokes" />);
   test("label txt", () => {
      expect(wrapper.find("span")).toHaveLength(2);
      expect(wrapper.find("i")).toHaveLength(1);
   });
});
