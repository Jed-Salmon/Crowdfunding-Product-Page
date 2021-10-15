import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BackingProvider from "./store/backingContext/BackingProvider";
import ModalProvider from "./store/modalContext/ModalProvider";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BackingProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </BackingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
