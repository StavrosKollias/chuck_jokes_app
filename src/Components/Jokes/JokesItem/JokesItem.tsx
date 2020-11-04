import React, { useState } from "react";
import Button from "../../Peripherals/Button/Button";

interface IJokesItemProps {
   title: number;
   joke: string;
   categories: Array<string>;
}

const JokesItem: React.FC<IJokesItemProps> = (props) => {
   const randomNumber = Math.floor(Math.random() * Math.floor(20));
   const [rate, SetRate] = useState(randomNumber);
   const arrayOfclassesText = ["txt-primary", "txt-secondary", "txt-light-blue"];
   const ratateTransform = {
      transform: `rotate(${180 * rate}deg) scale(${Math.pow(-1, rate)},${Math.pow(-1, rate)})`,
   };

   const handleClickRateChangeButton = (event:React.MouseEvent<HTMLButtonElement>) => {
      const button = event.currentTarget;
      if(randomNumber===rate) SetRate(rate + 1); button.className="btn-success";
   };

   return (
      <div className="jokes-item">
         <h1 className="jokes-item-title mb-1 txt-secondary">Joke Title: {props.title}</h1>
         <div className="jokes-item-category mb-1">
            <span className="category-title txt-bold">Category: </span>
            {props.categories.map((e, i) => {
               return (
                  <span key={i} className={`category ${arrayOfclassesText[i]}`}>
                     {i < props.categories.length - 1 ? `${e}, ` : e}
                  </span>
               );
            })}
         </div>
         <div className="jokes-item-text mb-1">{props.joke}</div>

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
