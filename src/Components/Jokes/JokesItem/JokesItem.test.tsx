import React from "react";
import { shallow } from "enzyme";
import JokesItem from "./JokesItem";
import reactMock from "react";

const setHookState = (newState) => jest.fn().mockImplementation(() => [newState, () => {}]);

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

   test("button click update counter", () => {
      reactMock.useState = setHookState({
         arrayValues: [],
         isFetching: false,
      });

      //   const wrapper = shallow(<ComponentWithHook/>)
      expect(wrapper.find(".rate-counter").exists()).toEqual(true);

      wrapper.find("#rate-btn").simulate("click");
      //   expect(wrapper.find(".rate-counter").text()).toBe();
   });
});
