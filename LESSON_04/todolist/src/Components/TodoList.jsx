import React, { useState } from 'react';
import TodoItem from './TodoItem';
import './asset/TodoList.css'
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() === '')return;
    else {

      setTodos([...todos,newTodo]);
      setNewTodo('');
    }
  };
  const onChangeHandler = (newText) =>{
    setTodos(newText)
  }

  const editTodo = (id, newText) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === newText.id ? { ...todo, title: newText } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    const updatedList = todos.slice(id,-1);
    setTodos(updatedList);
  };

  return (
    <div>
    <div className="add-todo">
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo..."
      />
      <button onClick={addTodo}>Add</button>
    </div>
    <ul className="todo-list">
      { todos.map((todo) => (
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
