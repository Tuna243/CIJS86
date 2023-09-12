// TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onEdit, onDelete }) => {
  return (
    <li className="todo-item">
      <input
        type="text"
        value={todo.text}
        onChange={(e) => onEdit(todo.id, e.target.value)}
      />
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
