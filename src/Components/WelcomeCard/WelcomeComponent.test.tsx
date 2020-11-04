import React from "react";
import { shallow } from "enzyme";
import WelcomeComponent from "./WelcomeComponent";

describe("check Welcome message", () => {
   it("is once displayed", () => {
      const wrapper = shallow(<WelcomeComponent />);
      expect(wrapper).toHaveLength(1);
   });
});
