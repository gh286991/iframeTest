import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Helmet>
      <script src="https://unpkg.com/react@16.4.1/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@16.4.1/umd/react-dom.production.min.js"></script>
    </Helmet>
  </StrictMode>,
  rootElement
);
