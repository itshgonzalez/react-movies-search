import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MoviesContextProvider } from "context/MoviesContext";

import { Routes } from "routes";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faArrowLeft,
  faStar as fasFaStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";
library.add(fab, faSearch, faArrowLeft, farFaStar, fasFaStar);

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <MoviesContextProvider>
          <Switch>
            {Routes.map((route, index) => (
              <Route key={index} {...route} />
            ))}
          </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
