import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Detail from "pages/Detail";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

import { MoviesContextProvider } from "context/MoviesContext";

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
            <Route component={Home} path="/" exact />
            <Route component={Detail} path="/detail/:movieId" />
            <Route component={NotFound} />
          </Switch>
        </MoviesContextProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
