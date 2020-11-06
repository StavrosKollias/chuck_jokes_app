import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Foooter";
import Header from "../Header/Header";
import HomeContainer from "../Home/HomeContainer";
import JockesContainer from "../Jokes/JokesContainer/JokesContainer";
import Search from "../Search/Search";

const MainContainer: React.FC = () => {
   const loadFunctionComponents = (e) => {
      return window.location.pathname;
   };

   return (
      <main className="wrapper">
         <BrowserRouter>
            <Header />
            <div className="container">
               <Switch>
                  <Route path="/" exact match render={() => <HomeContainer onRender={(e) => loadFunctionComponents(e)} />} />
                  <Route path="/random-joke" exact render={() => <JockesContainer multiple={false} filter={false} onRender={(e) => loadFunctionComponents(e)} />} />
                  <Route path="/joke-list" exact render={() => <JockesContainer multiple={true} filter={false} onRender={(e) => loadFunctionComponents(e)} />} />
                  <Route path="/search" exact render={() => <Search onRender={(e) => loadFunctionComponents(e)} />} />
                  {/* <Route path="/"  render={() => <LoginRegisterPopupComponent />} />
                 
                     <Route path="/Register" exact render={() => <RegisterFormComponent />} /> */}
               </Switch>
            </div>
         </BrowserRouter>
         <Footer />
      </main>
   );
};

export default MainContainer;
