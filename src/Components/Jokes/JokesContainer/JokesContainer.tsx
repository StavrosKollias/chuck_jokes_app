import React, { useEffect, useState } from "react";
import { IJoke } from "../../../Interfaces/IJokes";
import { getAllRandomJokesNotExplicit, getMultipleRandomJokes, getRandomJokeByCharacter } from "../../../utils/apis";
import { runJokeItems, runLoadMore, spliceArray, validationInputFullName } from "../../../utils/utils";
import ControlBar from "../../Controlbar/ControlSearchBar";
import LoadMore from "../../LoadMore/LoadMore";
import JokesItem from "../JokesItem/JokesItem";
import { IJokesContainerProps } from "./IJokesContainerProps";
import { IJokesContainerState } from "./IJokesContainerState";
import "./JokesContainer.scss";

const INITIAL_STATE: IJokesContainerState = {
   data: null,
   index: 5,
   multiple: null,
   filter: null,
   filterString: null,
   error: false,
   errorInput: true,
   loading: false,
};

const getRandomJokes = async (multiple: boolean) => {
   let responseJokes;
   multiple ? (responseJokes = await getMultipleRandomJokes(5)) : (responseJokes = await getMultipleRandomJokes(1));
   if (responseJokes) return responseJokes;
};

const JockesContainer: React.FC<IJokesContainerProps> = (props) => {
   const [state, setState] = useState(INITIAL_STATE);
   props.onRender("");

   const filterData = (event: React.MouseEvent<HTMLButtonElement>) => {
      const firstName = state.filterString.split(" ")[0];
      const lastName = state.filterString.split(" ")[1];
      getRandomJokeByCharacter(firstName, lastName).then((data) => {
         setState((state: IJokesContainerState) => {
            return {
               ...state,
               data: [data],
               error: data.length > 0,
            };
         });
      });
   };

   const handleInputChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value;
      const validation = validationInputFullName(value);
      setState((state: IJokesContainerState) => {
         return {
            ...state,
            filterString: value,
            errorInput: !validation,
         };
      });
   };

   const setLoadingState = () => {
      const el = document.querySelector(".jokes-container");
      const bottom = Number((el.scrollHeight - el.scrollTop).toFixed(0)) - el.clientHeight < 50;
      if (bottom) {
         setState((state: IJokesContainerState) => {
            return {
               ...state,
               loading: true,
            };
         });
      }
   };

   const updateState = (newState: IJokesContainerState) => {
      setState(newState);
   };

   const initialMountData = () => {
      if (state.multiple !== props.multiple) {
         getRandomJokes(props.multiple).then((data) => {
            const newState = {
               data: data,
               index: 5,
               multiple: props.multiple,
               filter: props.filter,
               filterString: null,
               error: false,
               errorInput: true,
               loading: false,
            };
            updateState(newState);
         });
      }
   };

   const updateDataOnScroll = (loading) => {
      const stateData = state.data;
      if (loading) {
         getMultipleRandomJokes(state.index).then((data) => {
            const newData = stateData.concat(data);
            setState((state: IJokesContainerState) => {
               return {
                  ...state,
                  data: newData,
                  loading: false,
               };
            });
         });
      }
   };

   // initial mount
   useEffect(() => {
      initialMountData();
      window.addEventListener("scroll", () => {
         runJokeItems();
         const element = runLoadMore();
         if (element) setLoadingState();
      });

      runJokeItems();
   }, [props.filter, props.multiple, state.index, state.multiple]);

   // componentDidUpdate
   useEffect(() => {
      updateDataOnScroll(state.loading);
      runJokeItems();
   });

   // umount
   useEffect(() => {
      return () => {};
   });

   const loadMoreButtonDisplayed = state.multiple && state.data.length;
   return (
      <section className="jokes-container">
         {state.filter && (
            <ControlBar
               error={state.errorInput}
               validationInputFullName={(e) => validationInputFullName(e)}
               handleInputChangeFilter={(e) => handleInputChangeFilter(e)}
               filterData={(e) => filterData(e)}
            />
         )}

         {state.data && (
            <div>
               {!state.multiple &&
                  state.data.map((e: IJoke, i: number) => {
                     const indexFirstword = e.joke.indexOf(" ");
                     return (
                        <JokesItem key={i} title={e.joke.substr(0, indexFirstword)} rating={e.id} categories={e.categories} joke={e.joke} onRender={props.onRender} />
                     );
                  })}
               {state.multiple &&
                  state.data.map((e: IJoke, i: number) => {
                     const indexFirstword = e.joke.indexOf(" ");
                     return (
                        <JokesItem key={i} title={e.joke.substr(0, indexFirstword)} rating={e.id} categories={e.categories} joke={e.joke} onRender={props.onRender} />
                     );
                  })}
               {loadMoreButtonDisplayed && <LoadMore />}
            </div>
         )}
      </section>
   );
};

export default JockesContainer;
