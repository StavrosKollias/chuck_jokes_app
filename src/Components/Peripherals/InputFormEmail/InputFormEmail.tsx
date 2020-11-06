import React from "react";
import Input from "../Input/Input";

const InputFormEmail: React.FC = () => {
   return (
      <form name="contact" className="display-flex-row-center">
         <Input
            type="email"
            className="input-light"
            name="email"
            containerClassName="input-container-light"
            errorMessage=""
            placeHolder="Enter Email"
            handleInputChange={(e) => console.log("email")}
         />
         <input type="submit" value="Submit" className="btn-secondary" />
      </form>
   );
};

export default InputFormEmail;
