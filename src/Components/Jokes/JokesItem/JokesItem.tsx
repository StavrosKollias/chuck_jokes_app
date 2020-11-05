import React, { useState } from "react";
import { decodeEntities } from "../../../utils/utils";
import Button from "../../Peripherals/Button/Button";
import { IJokesItemProps } from "./IJokeItemProps";
const randomNumber = Math.floor(Math.random() * Math.floor(20));
const arrayOfclassesText = ["txt-primary", "txt-secondary", "txt-light-blue"];
const JokesItem: React.FC<IJokesItemProps> = (props) => {
   const [rate, SetRate] = useState<number>(randomNumber);
   const ratateTransform = {
      transform: `rotate(${180 * rate}deg) scale(${Math.pow(-1, rate)},${Math.pow(-1, rate)})`,
   };
   const handleClickRateChangeButton = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log("like");
      const button = event.currentTarget;
      if (randomNumber === rate)
         SetRate((reate) => {
            return rate + 1;
         });
      button.className = "btn-success";
   };

   const decodedJoke = decodeEntities(props.joke);

   return (
      <div className="jokes-item">
         <h1 className="jokes-item-title mb-1 txt-secondary">Joke Title: {props.title}</h1>
         {props.categories.length > 1 && (
            <div className="jokes-item-category mb-1">
               <span className="category-title txt-bold">{props.categories.length > 1 ? "Categories:" : "Category:"} </span>
               {props.categories.map((e, i) => {
                  return (
                     <span key={i} className={`category ${arrayOfclassesText[i]}`}>
                        {i < props.categories.length - 1 ? `${e}, ` : e}
                     </span>
                  );
               })}
            </div>
         )}
         <div className="jokes-item-text mb-1">{decodedJoke}</div>
         <div className="jokes-item-rate">
            <Button
               id="rate-btn"
               icon={<i className="fas fa-thumbs-up"></i>}
               title="Rate this joke!!"
               label=""
               className="btn-primary"
               handleClick={(e) => handleClickRateChangeButton(e)}
            />
            <div className="jokes-item-rate-number" style={ratateTransform}>
               <span className="rate-counter">{rate}</span>
            </div>
         </div>
      </div>
   );
};

export default JokesItem;
