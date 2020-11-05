import React from "react";
import { IJoke } from "../../../Interfaces/IJokes";
import CardJoke from "../CardJoke/CardJoke";
import "./CardsContainer.scss";

interface ICardContainerProps {
   jokes: Array<IJoke>;
}

const CardsContainer: React.FC<ICardContainerProps> = (props) => {
   const imagesUrls = [
      "https://images.unsplash.com/photo-1596574202467-915fa42375c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=534&q=80",
      "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1515536765-9b2a70c4b333?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      "https://images.unsplash.com/photo-1524549110215-6624d76a0b0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
   ];
   const buttonUrls = ["/search"];
   return (
      <section className="card-images-container">
         {props.jokes.map((e, i) => {
            return (
               <CardJoke key={i} joke={e.joke} categories={e.categories} title={`Joke Title: ${e.id}`} btnLabel="View more" btnUrl={buttonUrls[0]} src={imagesUrls[i]} />
            );
         })}
      </section>
   );
};

export default CardsContainer;
