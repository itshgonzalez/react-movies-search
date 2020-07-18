import React from "react";
import ReactDOM from "react-dom";
import App from "App";

import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "utils/GlobalStyle";
import { theme } from "utils/theme";

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById("app")
);
