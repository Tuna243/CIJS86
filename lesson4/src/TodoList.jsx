import React, { useState } from 'react';
import TodoItem from './TodoItem';
const TodoList = () => {
    //
  const [todos, setTodos] = useState([]);
  //
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
  };

  const addTodo = () => {

  };

  const editTodo = (id, newText) => {

  };

  const deleteTodo = (id) => {

  };

  return (
    <div>
    <h1>Todo List App</h1>
    <div className="add-todo">
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo..."
      />
      <button onClick={addTodo}>Add Todo</button>
    </div>
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={editTodo}
          onDelete={deleteTodo}
        />
      ))}
    </ul>
  </div>
  );
};

export default TodoList;
