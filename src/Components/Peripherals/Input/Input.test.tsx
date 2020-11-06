import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

describe("Input props", () => {
   let wrapper, fakeChangeFunction, validationFun;
   beforeAll(() => {
      fakeChangeFunction = jest.fn(() => 3);
      validationFun = jest.fn(() => false);
      wrapper = shallow(
         <Input
            containerClassName="input-container-primary"
            type="range"
            placeHolder="Enter Number"
            name="input-test"
            id="input-id"
            className="input-primary"
            label="I am label"
            defaultValue="Hello"
            errorMessage="Error"
            icon={<i className="fas fa-search"></i>}
            handleInputChange={fakeChangeFunction}
            hanldeValidation={validationFun}
         />
      );
   });

   test("will recieve props", () => {
      const input = wrapper.find("input");
      const classNameItag = wrapper.find("i").hasClass("fas fa-search");
      const inputType = input.prop("type");
      const inputPlaceHolder = input.prop("placeholder");
      const inputId = input.prop("id");
      expect(inputType).toBe("range");
      expect(inputPlaceHolder).toBe("Enter Number");
      expect(classNameItag).toBe(true);
      expect(inputId).toBe("input-id");
   });

   test("Change function Input", () => {
      const input = wrapper.find("input");
      input.simulate("focus");
      input.simulate("change", { target: { value: 1 } });
      expect(wrapper.find(".input-value-range").text()).toBe("1");
      input.simulate("focus");
      input.simulate("change", { target: { value: "name surname" } });
      expect(wrapper.find(".input-value-range").text()).toBe("name surname");
   });

   test("functions called once", () => {
      fakeChangeFunction();
      validationFun();
      expect(fakeChangeFunction).toBeCalledTimes(1);
      expect(validationFun).toBeCalledTimes(1);
   });
});
