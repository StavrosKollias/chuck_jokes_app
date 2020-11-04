import React, { useState } from "react";
import { IInputProps } from "./IInputProps";



const Input:React.FC<IInputProps>=(props)=>{

    var [inputValue,SetInputValue]=useState<string>("");
    
    const handleInputChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
       const incputChangeValue= event.target.value;
       SetInputValue(incputChangeValue);
    }

    return(
        <div className="input-container">
            <label htmlFor={props.name}>{props.label}</label>
           
            {props.type==="range" && <span className="input-value-range">{inputValue}</span>}
            
            <div className="input-container-sub">
                 {props.icon && props.icon}
                <input onChange={(e)=>{handleInputChange(e)}}  type={props.type} name={props.name} className={props.className} id={props.id} max={props.max} min={props.min} step={props.step} placeholder={props.placeHolder} />
            </div>

        </div>
    )
}

export default Input;