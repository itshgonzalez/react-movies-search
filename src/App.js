import React from "react";

// Import pages
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

// Import Router
import { Switch, Route } from "react-router-dom";

// Import Contexts
import { MoviesContextProvider } from "./context/MoviesContext";

function App() {
  return (
    <div className="App">
      <div className="container">
        <MoviesContextProvider>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail/:movieId" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </MoviesContextProvider>
      </div>
    </div>
  );
}

export default App;
