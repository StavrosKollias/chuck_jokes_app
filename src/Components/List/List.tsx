import React from "react";
import JockesContainer from "../Jokes/JokesContainer/JokesContainer";
import { IListProps } from "./IListProps";

const List: React.FC<IListProps> = (props) => {
   return (
      <section className="search-container">
         <JockesContainer multiple={true} filter={false} onRender={(e) => props.onRender(e)} />
      </section>
   );
};

export default List;
