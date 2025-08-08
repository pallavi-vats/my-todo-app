import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, toggleComplete, deleteTodo, editTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id} // Unique key for each item
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
}

export default ToDoList;