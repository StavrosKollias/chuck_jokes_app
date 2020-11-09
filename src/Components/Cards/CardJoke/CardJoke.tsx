import React from "react";
import LinkComponent from "../../Peripherals/Link/Link";
import { ICardJokeProps } from "./ICardJokeProps";
import "./CardJoke.scss";
import { decodeEntities } from "../../../utils/utils";
const arrayOfclassesText = ["txt-light", "txt-secondary", "txt-light-blue"];
const CardJoke: React.FC<ICardJokeProps> = (props) => {
   const decodedJoke = decodeEntities(props.joke);

   return (
      <div className="card-joke-container">
         <img src={props.src} alt="card joke" />
         <div className="card-joke-details">
            <h1 className="txt-light txt-center mb-2 mt-2">{props.title}</h1>
            {props.categories.length > 0 && (
               <div className="categories txt-light txt-center mb-1 ">
                  <span className="txt-light txt-bold">{props.categories.length > 1 ? "Categories: " : "Category: "}</span>
                  {props.categories.map((e, i) => {
                     return (
                        <span key={i} className={`category ${arrayOfclassesText[i]}`}>
                           {i < props.categories.length - 1 ? `${e}, ` : e}
                        </span>
                     );
                  })}
               </div>
            )}

            <p className="txt-light txt-center mb-2">{decodedJoke}</p>

            <LinkComponent label={props.btnLabel} title={`${props.btnLabel} Jokes`} className="btn-secondary" to={props.btnUrl} />
         </div>
      </div>
   );
};

export default CardJoke;
