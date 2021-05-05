import React from "react";
import Todo from "../components/Todo";

const todoContainerStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "2rem",
};

const Todos = ({ todos, removeTodo, toggleComplete, updateTodo }) => (
  <div style={todoContainerStyles}>
    {todos.map((todo) => (
      <Todo
        key={todo.id}
        todo={todo}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        updateTodo={updateTodo}
      />
    ))}
  </div>
);

export default Todos;
