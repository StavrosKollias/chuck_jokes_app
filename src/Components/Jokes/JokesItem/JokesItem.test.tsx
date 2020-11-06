import React from "react";
import { shallow } from "enzyme";
import JokesItem from "./JokesItem";

describe("Jokes Item", () => {
   let wrapper, fakeFunction;
   beforeAll(() => {
      fakeFunction = jest.fn(() => "3");
      wrapper = shallow(<JokesItem key={0} title={"3"} rating={3} categories={["nerdy", "explicit"]} joke="I am the joke haha!" onRender={fakeFunction} />);
   });

   test("recieved props", () => {
      expect(wrapper.find(".jokes-item-category").text()).toEqual("Categories: nerdy, explicit");
      expect(wrapper.find(".jokes-item-title").text()).toEqual("Joke Title: 3");
      expect(wrapper.find(".jokes-item-text").text()).toEqual("I am the joke haha!");
   });

   it("has class show", () => {
      wrapper.find(".jokes-item").hasClass("show");
   });

   test("button click update", () => {
      expect(wrapper.find(".rate-counter").exists()).toEqual(true);
      wrapper.find("#rate-btn").simulate("click");
      wrapper.find("#rate-btn").hasClass("btn-success");
   });

   test("function render times", () => {
      fakeFunction();
      expect(fakeFunction).toBeCalledTimes(1);
   });
});
