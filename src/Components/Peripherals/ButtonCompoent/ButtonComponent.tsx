import React from "react";
import { IButtonComponentProps } from "./IButtonComponentProps";

const ButtonComponent: React.FC<IButtonComponentProps> = (props) => {
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

export default ButtonComponent;
