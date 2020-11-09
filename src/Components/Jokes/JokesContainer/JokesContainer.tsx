import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";
import { IJoke } from "../../../Interfaces/IJokes";
import { getMultipleRandomJokes, getRandomJokeByCharacter } from "../../../utils/apis";
import { decodeEntities, runJokeItems, runLoadMore, validationInputFullName } from "../../../utils/utils";
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
   timeOutScrolling: 2500,
};

const getRandomJokes = async (multiple: boolean) => {
   let responseJokes;
   multiple ? (responseJokes = await getMultipleRandomJokes(5)) : (responseJokes = await getMultipleRandomJokes(1));
   if (responseJokes) return responseJokes;
};

const JockesContainer: React.FC<IJokesContainerProps> = (props) => {
   const [state, setState] = useState(INITIAL_STATE);
   const fetchingData = useRef(false);
  

   const filterData = (event: React.MouseEvent<HTMLButtonElement>) => {
      window.removeEventListener("scroll", onScollWindow);
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

   const updateState = (newState: IJokesContainerState) => {
      setState(newState);
   };

   const initialMountData = useCallback((filter: boolean, propsMultiple: boolean, stateMultiple: boolean) => {
      if (stateMultiple !== propsMultiple) {
         getRandomJokes(propsMultiple).then((data) => {
            const newState = {
               data: data,
               index: INITIAL_STATE.index,
               multiple: propsMultiple,
               filter: filter,
               filterString: INITIAL_STATE.filterString,
               error: INITIAL_STATE.error,
               errorInput: INITIAL_STATE.errorInput,
               loading: INITIAL_STATE.loading,
               timeOutScrolling: INITIAL_STATE.timeOutScrolling,
            };
            updateState(newState);
         });
      }
   }, []);

   const scrollTop= useCallback((props)=>{
      console.log("scroll-top");
       props.onRender("");
   },[]);

   const onScollWindow = useCallback(() => {
      runJokeItems();
      const element = runLoadMore();
      if (element) setLoadingState();
   }, []);

   const setLoadingState = () => {
      setState((state: IJokesContainerState) => {
         return {
            ...state,
            loading: true,
         };
      });
   };

   const updateDataOnScroll = (loading: boolean) => {
      const stateData = state.data;
      if (loading && !fetchingData.current) {
         fetchingData.current = true;
         setTimeout(() => {
            getRandomJokes(state.multiple).then((data) => {
               const newData = stateData.concat(data);
               fetchingData.current = false;
               setState((state: IJokesContainerState) => {
                  return {
                     ...state,
                     data: newData,
                     loading: false,
                  };
               });
            });
         }, state.timeOutScrolling);
      }
   };

   // initial mount
   useEffect(() => {
    if(!state.data)  scrollTop(props);
      initialMountData(props.filter, props.multiple, state.multiple);
      window.addEventListener("scroll", onScollWindow);
      runJokeItems();
   }, [initialMountData,scrollTop, onScollWindow,props,state]);

   // componentDidUpdate
   useEffect(() => {
      if (!fetchingData.current) {
         updateDataOnScroll(state.loading);
         runJokeItems();
      }
   });

   // umount
   useEffect(() => {
      return () => {};
   });

   const loadMoreButtonDisplayed = state.multiple && state.data.length > 1;
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
               {state.data.map((e: IJoke, i: number) => {
                  const decodedJoke = decodeEntities(e.joke);
                  const indexFirstword = decodedJoke.indexOf(" ");
                  var title= decodedJoke.substr(0, indexFirstword);
                  title=title.replace(/[^a-zA-Z0-9 ]/g, "");
                  return <JokesItem key={i} title={title} rating={e.id} categories={e.categories} joke={e.joke} onRender={props.onRender} />;
               })}

               {loadMoreButtonDisplayed && <LoadMore />}
            </div>
         )}
      </section>
   );
};

export default JockesContainer;
