import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

describe("Input props", () => {
   let wrapper;
   beforeAll(() => {
      wrapper = shallow(
         <Input
            type="range"
            placeHolder="Enter Number"
            name="input-test"
            id="input-id"
            className="input-primary"
            label="I am label"
            defaultValue="Hello"
            icon={<i className="fas fa-search"></i>}
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
      //   const range = wrapper.find(".input-value-range");
      input.simulate("focus");
      input.simulate("change", { target: { value: "Hello" } });
      //   wrapper.update();
      //   console.log(range.text());

      //   //   input.simulate("keyDown", {
      //   //      which: 27,
      //   //      target: {
      //   //         blur() {
      //   //            // Needed since <EditableText /> calls target.blur()
      //   //            input.simulate("blur");
      //   //         },
      //   //      },
      //   //   });
      //   //   console.log(input);
      //   expect(input.prop("value")).toEqual("Hello");
   });
});
