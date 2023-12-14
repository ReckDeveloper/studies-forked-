import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Botao from "./components";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Botao />
  </React.StrictMode>,
);
