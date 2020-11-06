import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Foooter";
import Header from "../Header/Header";
import HomeContainer from "../Home/HomeContainer";
import List from "../List/List";
import Random from "../Random/Random";
import Search from "../Search/Search";

const MainContainer: React.FC = () => {
   const loadFunctionComponents = (e: any) => {
      return window.location.pathname;
   };

   return (
      <main className="wrapper">
         <BrowserRouter>
            <Header />
            <div className="container">
               <Switch>
                  <Route path="/" exact match render={() => <HomeContainer onRender={(e) => loadFunctionComponents(e)} />} />
                  <Route path="/random-joke" exact render={() => <Random onRender={(e) => loadFunctionComponents(e)} />} />
                  <Route path="/joke-list" exact render={() => <List onRender={(e) => loadFunctionComponents(e)} />} />
                  <Route path="/search" exact render={() => <Search onRender={(e) => loadFunctionComponents(e)} />} />
               </Switch>
            </div>
         </BrowserRouter>
         <Footer />
      </main>
   );
};

export default MainContainer;
