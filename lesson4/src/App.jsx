// App.js (or index.js)
import React from 'react';
import TodoList from './TodoList';
const App = () => {
  return (
    <div className="container">
      <h1>Todo List Application</h1>
      <TodoList />
    </div>
  );
};

export default App;
