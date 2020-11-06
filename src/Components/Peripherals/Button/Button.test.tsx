import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Test Button Component", () => {
   it("Test click event", () => {
      const mockCallBack = jest.fn();

      const button = shallow(<Button label="ok" title="testing-button" id="btn-test" className="test" handleClick={mockCallBack} />);
      button.find("button").simulate("click");
      expect(mockCallBack.mock.calls.length).toEqual(1);
   });
});
