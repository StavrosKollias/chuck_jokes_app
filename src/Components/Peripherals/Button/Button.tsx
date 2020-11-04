import React from "react";
import { IButtonProps } from "./IButton";

const Button: React.FC<IButtonProps> = (props) => {
   return (
      <button
         className={props.className}
         id={props.id}
         title={props.title}
         onClick={(e) => {
            props.handleClick(e);
         }}
      >
         {props.icon}
         {props.label}
      </button>
   );
};

export default Button;
