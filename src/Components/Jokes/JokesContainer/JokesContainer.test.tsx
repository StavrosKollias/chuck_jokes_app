import React from "react";
import { shallow } from "enzyme";
import JokesContainer from "./JokesContainer";

describe("jokes items in Jokes conetainer", () => {
   let wrapper, fakeFunction;
   beforeAll(() => {
      fakeFunction = jest.fn(() => "3");
      wrapper = shallow(<JokesContainer multiple={false} filter={false} onRender={fakeFunction} />);
   });

   test("rendering Jokes Container", () => {
      fakeFunction();
      expect(fakeFunction).toHaveBeenCalledTimes(1);
   });

   test("rendering rendering jokes item", () => {
      expect(wrapper.find(".jokes-item-title")).toHaveLength(0);
      fakeFunction.mockClear();
   });
});
