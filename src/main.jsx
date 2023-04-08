import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { IconContext } from "@phosphor-icons/react";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <IconContext.Provider
        value={{
          size: 20,
          weight: "bold",
        }}
      >
        <App />
      </IconContext.Provider>
    </Provider>
  </React.StrictMode>
);
