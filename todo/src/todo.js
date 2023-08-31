// src/App.js (Microfrontend "todo")
import React, { useState } from 'react';
import './todo.css';

const TodoApp = () => {
  return (
    <div className="app-container">
      <h1>Todos</h1>
      <form className="todo-form">      
      <input placeholder='Neues Todo erstellen'></input>
        <button type="submit">Hinzufügen</button>
      </form>
    </div>
  );
};

export  {TodoApp};