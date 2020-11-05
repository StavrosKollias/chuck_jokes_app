import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { IJoke } from "../../../Interfaces/IJokes";
import { getAllRandomJokesNotExplicit, getMultipleRandomJokes } from "../../../utils/apis";
import JokesItem from "../JokesItem/JokesItem";
import "./JokesContainer.scss";

interface IJokesContainerProps {
   multiple: boolean;
   filter: boolean;
   onRender?(e: any): void;
}

const INITIAL_STATE = { data: null, dataDisplayed: null, index: 5, multiple: null, filter: null };

const spliceArray = (array: Array<IJoke>, start: number, stop: number) => {
   const newArray = array.slice(start, stop);
   return newArray;
};

let counter = 0;

const JockesContainer: React.FC<IJokesContainerProps> = (props) => {
   const getFourRandomJokes = async () => {
      let responseJokes;
      props.multiple ? (responseJokes = await getAllRandomJokesNotExplicit()) : (responseJokes = await getMultipleRandomJokes(1));
      if (responseJokes) return responseJokes;
   };

   props.onRender("");

   const [state, setState] = useState(INITIAL_STATE);

   const setDataForIndexView = (data: Array<IJoke>, index: number, length: number) => {
      const displayingData = spliceArray(data, length, length + index);
      return displayingData;
   };

   const updateState = (newState) => {
      setState(newState);
   };

   const insertNewData = (data: Array<IJoke>, dataDisplayed: Array<IJoke>, index: number) => {
      const newIncommingData = spliceArray(data, dataDisplayed.length, dataDisplayed.length + index);
      const newData = dataDisplayed.concat(newIncommingData);
      setState((state) => {
         return {
            ...state,
            dataDisplayed: newData,
         };
      });
   };

   useEffect(() => {
      if (state.multiple !== props.multiple) {
         getFourRandomJokes().then((data) => {
            let displayingData = setDataForIndexView(data, state.index, 0);
            const newState = { data: data, dataDisplayed: displayingData, index: 5, multiple: props.multiple, filter: props.filter };
            updateState(newState);
            console.log(counter + 1);
         });
      }
   });

   return (
      <section className="jokes-container py-1">
         {state.filter && <div>Filter Will be displayed here</div>}

         {state.data && (
            <div>
               {!state.multiple &&
                  state.data.map((e: IJoke, i: number) => {
                     return <JokesItem key={i} title={`${e.id}`} categories={e.categories} joke={e.joke} onRender={props.onRender} />;
                  })}
               {state.multiple &&
                  state.dataDisplayed.map((e: IJoke, i: number) => {
                     console.log(counter + 1);
                     return <JokesItem key={i} title={`${e.id}`} categories={e.categories} joke={e.joke} onRender={props.onRender} />;
                  })}
               {state.multiple && <button onClick={() => insertNewData(state.data, state.dataDisplayed, state.index)}>load More</button>}
            </div>
         )}
      </section>
   );
};

export default JockesContainer;
