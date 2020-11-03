import React from "react";
import { shallow } from "enzyme";
import NavigationLogo from "./NavigationBarLogo";

describe("check Label  Logo", () => {
   const wrapper = shallow(<NavigationLogo logoLabel="Deadly Jokes" />);
   test("label txt", () => {
      expect(wrapper.find("span").text()).toBe("Deadly Jokes");
      expect(wrapper.find("span")).toHaveLength(1);
      expect(wrapper.find("i")).toHaveLength(1);
   });
});
