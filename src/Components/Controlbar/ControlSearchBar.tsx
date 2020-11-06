import React from "react";
import Button from "../Peripherals/Button/Button";
import Input from "../Peripherals/Input/Input";
import { IControlSearchBarProps } from "./IControlSearchBarProps";

const ControlBar: React.FC<IControlSearchBarProps> = (props) => {
   return (
      <div className="search-container-controls display-flex-row-center">
         <Input
            type="text"
            className="input-light"
            containerClassName="input-container-light"
            name="input-name-filter"
            placeHolder="Enter Name to filter"
            errorMessage="Enter: FirsrtName LastName"
            hanldeValidation={(e) => props.validationInputFullName(e)}
            handleInputChange={(e) => props.handleInputChangeFilter(e)}
         />
         <Button
            className={props.error ? "btn-disabled" : "btn-primary"}
            handleClick={(e) => props.filterData(e)}
            icon={<i className="fas fa-search"></i>}
            id="search-btn"
            title="Filter Data"
            label=""
         />
      </div>
   );
};

export default ControlBar;
