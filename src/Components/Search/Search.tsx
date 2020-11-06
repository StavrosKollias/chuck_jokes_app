import React from "react";
import JockesContainer from "../Jokes/JokesContainer/JokesContainer";
import { ISearchProps } from "./ISearchProps";

const Search: React.FC<ISearchProps> = (props) => {
   return (
      <section className="search-container">
         <JockesContainer multiple={true} filter={true} onRender={(e) => props.onRender(e)} />
      </section>
   );
};

export default Search;
