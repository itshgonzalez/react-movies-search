import React from "react";
import { Switch, Route } from "react-router-dom";

import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import { MoviesContextProvider } from "./context/MoviesContext";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faStar as fasFaStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farFaStar } from "@fortawesome/free-regular-svg-icons";

library.add(fab, faSearch, farFaStar, fasFaStar);

function App() {
  return (
    <div className="App">
      <MoviesContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:movieId" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </MoviesContextProvider>
    </div>
  );
}

export default App;
