import React from "react";
import {shallow} from "enzyme";
import Input from  "./Input";


describe("Input props",()=>{
    let wrapper
    beforeAll(()=>{
        wrapper = shallow(<Input type="number"  placeHolder="Enter Number" step="0" name="input-test"  id="input-id" className="input-primary" label="I am label" defaultValue="Hello" icon={<i className="fas fa-search"></i>}/>);
         
    });


    test("will recieve props",()=>{
        const input= wrapper.find("input");  
        const classNameItag= wrapper.find("i").hasClass("fas fa-search");
        const inputType= input.prop("type");
        const inputPlaceHolder= input.prop("placeholder");
        const inputId= input.prop("id");
        expect(inputType).toBe("number");
        expect(inputPlaceHolder).toBe("Enter Number");
        expect(classNameItag).toBe(true);
        expect(inputId).toBe("input-id");
     
        });

    test("Change function Input",()=>{
        const input= wrapper.find("input")
        input.simulate('focus');
        input.simulate("onChange", { target: {value: 'Hello'} } );
        expect(input.get(0).value).toBe("Hello");
    })
})
