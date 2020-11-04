import React from "react";
import { shallow } from "enzyme";
import JokesItem from "./JokesItem";

describe("Jokes Item", () => {
   let wrapper;
   beforeAll(() => {
      wrapper = shallow(<JokesItem title={2} categories={["nerdy", "explicit"]} joke="I am the joke haha!" />);
   });

   test("recieved props", () => {
      expect(wrapper.find(".jokes-item-category").text()).toEqual("Category: nerdy, explicit");
      expect(wrapper.find(".jokes-item-title").text()).toEqual("Joke Title: 2");
      expect(wrapper.find(".jokes-item-text").text()).toEqual("I am the joke haha!");
   });

   test("button click update", () => {
      expect(wrapper.find(".rate-counter").exists()).toEqual(true);
      wrapper.find("#rate-btn").simulate("click");
      wrapper.find("#rate-btn").hasClass("btn-success");
   });
});
