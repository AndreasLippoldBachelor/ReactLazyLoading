import React from "react";
import ReactDOM from "react-dom";
import { TodoListApp } from "./todolist";
import "./index.css";

const App = () => (
   <TodoListApp></TodoListApp>
  
);
ReactDOM.render(<App />, document.getElementById("app"));
