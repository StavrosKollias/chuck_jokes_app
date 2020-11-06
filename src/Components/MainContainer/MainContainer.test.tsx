import React from "react";
import { shallow, render } from "enzyme";
import MainContainer from "./MainContainer";

describe("MainContainer behaviour", () => {
   let component;
   beforeAll(() => {
      component = shallow(<MainContainer />);
   });
   test("Renders the component", () => {
      expect(component).toHaveLength(1);
   });

   test("routes and components mounted", () => {
      const navmenu = component.find(".nav-menu");
      const navLink = navmenu.find("#home-nav-link");
      navLink.find("a").simulate("click", { button: 0 });
      expect(component.find(".home-container")).toHaveLength(1);
      const searchLink = component.find("#search-nav-link");
      expect(component.find(".search-container")).toHaveLength(1);
      const randomLink = component.find("#random-nav-link");
      expect(component.find(".jokes-container")).toHaveLength(1);
      const listLink = component.find("#list-nav-link");
      expect(component.find(".jokes-container")).toHaveLength(1);
   });
});
