import React from "react";
import { shallow } from "enzyme";
import NavigationBarItem from "./NavigationBarItem";

describe("Renders and Link Reviece props", () => {
   const propsTemplate = {
      className: "",
      title: "",
      label: "",
      to: "",
   };

   it("renders and recieves props", () => {
      const wrapper = shallow(<NavigationBarItem {...propsTemplate} className="nav-bar-item" title="Click me to Embrace me" label="click" to="RandomURL" />);
      expect(wrapper.find(".nav-link").prop("to")).toBe("RandomURL");
      expect(wrapper.find(".nav-link").prop("label")).toBeTruthy();
      expect(wrapper.find(".nav-link").prop("className")).toBeTruthy();
      expect(wrapper.find(".nav-link").prop("title")).toBeTruthy();
   });
});
