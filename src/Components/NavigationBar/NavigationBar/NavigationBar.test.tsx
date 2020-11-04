import React from "react";
import { shallow } from "enzyme";
import NaviagtionBar from "./NavigationBar";

describe("NavigationBar", () => {
   let wrapper;
   beforeEach(() => {
      wrapper = shallow(<NaviagtionBar active={true} />);
   });

   it("renders once", () => {
      expect(wrapper).toHaveLength(1);
   });

   test("check how menay route links", () => {
      expect(wrapper.find(".nav-menu-item")).toHaveLength(4);
   });
});
