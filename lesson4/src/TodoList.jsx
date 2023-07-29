import React, { useState } from 'react';
import TodoItem from './TodoItem';
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() === '') return; // Prevent adding empty todos
//' abcd 
    const newTodoItem = {
      id: Date.now(),
      text: newTodo.trim(),
    };
const currentList = todos
    setTodos([...todos, newTodoItem]);
const newList = [...currentList,newTodoItem]
    setTodos[newList];
    setNewTodo('');
  };

  const editTodo = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    // 
    
    setTodos(updatedTodos);
  };

  return (
    <div>
    <h1>Todo List App</h1>
    <div className="add-todo">
      {/* Input nhap du lieu */}
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo..."
      />
      {/* Button add to do */}
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
