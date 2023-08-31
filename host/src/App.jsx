import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link, Outlet } from "react-router-dom"; 
import "./app.css";


const  TodoComponent =lazy(()=> import("./todoComponent")) ;
const  TodoListComponent =lazy(()=> import("./TodoListComponent")) ;

const App = () => {
  
    const [selectedMicrofrontend, setSelectedMicrofrontend] = useState();

  const handleSelectTodoApp = () => {
    setSelectedMicrofrontend("TodoComponent");
  };

  const handleSelectTodoListApp = () => {
    setSelectedMicrofrontend("TodoListComponent");
  };

  return (
    <div className="app-container">
     <nav className="navbar">
  <ul>
    <li onClick={handleSelectTodoApp} className={selectedMicrofrontend === "TodoComponent" ? "selected" : ""}>Todo</li>
    <li onClick={handleSelectTodoListApp} className={selectedMicrofrontend === "TodoListComponent" ? "selected" : ""}>TodoList</li>
  </ul>
</nav>

{/* Render the selected microfrontend */}
<Suspense fallback={<div>Komponente wird geladen </div>}>
<div className="microfrontend-container">
  {selectedMicrofrontend === "TodoComponent" ? <TodoComponent /> : <TodoListComponent />}
</div>
</Suspense>
    </div>
     
    
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
