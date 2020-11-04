import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
// import Footer from "../Footer/Foooter";
import Header from "../Header/Header";
import HomeContainer from "../Home/HomeContainer";
import JockesContainer from "../Jokes/JokesContainer/JokesContainer";

const MainContainer: React.FC = () => {
   return (
      <main className="wrapper">
         <BrowserRouter>
            <Header />
            <div className="container">
               <Switch>
                  <Route path="/" exact match render={() => <HomeContainer />} />
                  <Route path="/random-joke" exact render={() => <JockesContainer />} />

                  {/* <Route path="/"  render={() => <LoginRegisterPopupComponent />} />
                 
                     <Route path="/Register" exact render={() => <RegisterFormComponent />} /> */}
               </Switch>
            </div>
         </BrowserRouter>
         {/* <Footer /> */}
      </main>
   );
};

export default MainContainer;
