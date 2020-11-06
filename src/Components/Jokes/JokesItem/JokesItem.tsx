import React, { useEffect, useState } from "react";
import { decodeEntities } from "../../../utils/utils";
import Button from "../../Peripherals/Button/Button";
import { IJokesItemProps } from "./IJokeItemProps";
const arrayOfclassesText = ["txt-primary", "txt-secondary", "txt-light-blue"];

const JokesItem: React.FC<IJokesItemProps> = (props) => {
   const [rating, setRating] = useState<number>(props.rating);
   const ratateTransform = {
      transform: `rotate(-180deg) scale(${Math.pow(-1, -1)},${Math.pow(-1, -1)})`,
   };

   const handleClickRateChangeButton = (event: React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      if (props.rating === rating)
         setRating((rating) => {
            return rating + 1;
         });
      button.className = "btn-success";
   };

   useEffect(() => {
      setRating(props.rating);
   }, [props.rating]);

   useEffect(() => {
      return () => {};
   }, []);

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
               className={props.rating === rating ? "btn-primary" : "btn-success"}
               handleClick={(e) => handleClickRateChangeButton(e)}
            />
            <div className="jokes-item-rate-number" style={props.rating === rating ? ratateTransform : null}>
               <span className="rate-counter">{rating}</span>
            </div>
         </div>
      </div>
   );
};

export default JokesItem;
