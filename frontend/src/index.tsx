import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import { AuthContextrovider } from "context/authContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextrovider>
      <App />
    </AuthContextrovider>
  </React.StrictMode>,
  document.getElementById("root")
);
