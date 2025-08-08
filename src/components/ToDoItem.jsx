import React, { useState } from 'react';

function ToDoItem({ todo, toggleComplete, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-item-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="edit-input"
          />
        ) : (
          <span>{todo.text}</span>
        )}
      </div>
      <div className="todo-item-buttons">
        <button onClick={handleEdit} className="edit-btn">
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;