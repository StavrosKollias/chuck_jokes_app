import React, { useState } from "react";
import { IInputProps } from "./IInputProps";
import { IInputState } from "./IInputState";

const INITIAL_STATE: IInputState = { inputValue: "", error: false };

const Input: React.FC<IInputProps> = (props) => {
   var [state, setState] = useState<IInputState>(INITIAL_STATE);

   const handleInputChangeTest = (event: React.ChangeEvent<HTMLInputElement>) => {
      const incputChangeValue = event.target.value;
      const validation = props.hanldeValidation(incputChangeValue);
      setState((state: IInputState) => {
         return { ...state, inputValue: incputChangeValue, error: !validation };
      });
   };

   return (
      <div className={state.error ? `input-container-error ${props.containerClassName}` : props.containerClassName}>
         <label htmlFor={props.name}>{props.label}</label>

         {props.type === "range" && <span className="input-value-range">{state.inputValue}</span>}

         <div className="input-container-sub">
            {props.icon && props.icon}
            <input
               onChange={(e) => {
                  handleInputChangeTest(e);
                  props.handleInputChange(e);
               }}
               value={state.inputValue}
               type={props.type}
               name={props.name}
               className={props.className}
               id={props.id}
               max={props.max}
               min={props.min}
               step={props.step}
               placeholder={props.placeHolder}
            />
         </div>

         {state.error && <span className="error-span">{props.errorMessage}</span>}
      </div>
   );
};

export default Input;
