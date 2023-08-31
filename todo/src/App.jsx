import React from "react";
import ReactDOM from "react-dom";
import { TodoApp } from "./todo";
import "./index.css";

const App = () => (
  <TodoApp></TodoApp>
);
ReactDOM.render(<App />, document.getElementById("app"));
