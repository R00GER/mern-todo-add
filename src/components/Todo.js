import React, { useState } from "react";

const todoStyles = {
  background: "#1E1E1E",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginBottom: ".5rem",
  padding: "1rem",
  borderRadius: "4px",
};

const todoHeader = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: "1.5rem",
  fontWeight: "bold",
  actions: {
    cursor: "pointer",
  },
};

const todoBody = {
  padding: ".5rem 0 1rem 0",
};

const button = {
  //   background: "#F65E13",
  background: "#EFD81D",
  color: "#121212",
  border: "1px solid #1E1E1E",
  padding: ".5rem 1rem",
  borderRadius: "4px",
  cursor: "pointer",
  marginRight: ".5rem",
};

const updateContainer = {
  width: "100%",
  margin: "1rem 0",
};

const textArea = {
  width: "60%",
  padding: ".5rem",
  background: "#272727",
  color: "#f6f6f6",
  border: "1px solid #1E1E1E",
  borderRadius: 4,
  resize: "none",
  fontFamily: "inherit",
};

const Todo = ({ todo, removeTodo, toggleComplete, updateTodo }) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedTodoTask, setUpdatedTodoTask] = useState("");

  const handleUpdateTodo = () => {
    const newTodo = {
      ...todo,
      task: updatedTodoTask,
    };

    updateTodo(newTodo);
  };

  return (
    <div style={todoStyles}>
      <div style={todoHeader}>
        <div>{todo.user}</div>
        <div style={todoHeader.actions} onClick={() => toggleComplete(todo.id)}>
          {todo.completed ? <p>👍</p> : <p>👎</p>}
        </div>
      </div>
      {isUpdating ? (
        <div style={updateContainer}>
          <textarea
            style={textArea}
            value={updatedTodoTask || todo.task}
            rows="6"
            onChange={(e) => setUpdatedTodoTask(e.target.value)}
          />
        </div>
      ) : (
        <div style={todoBody}>{todo.task}</div>
      )}
      <div>
        <button style={button} onClick={() => removeTodo(todo.id)}>
          Poista
        </button>
        <button
          style={button}
          onClick={() => {
            if (!isUpdating) setIsUpdating(true);
            else {
              handleUpdateTodo();
              setIsUpdating(false);
            }
          }}
        >
          {isUpdating ? "Tallenna" : "Muokkaa"}
        </button>
        {isUpdating && (
          <button style={button} onClick={() => setIsUpdating(false)}>
            Peruuta
          </button>
        )}
      </div>
    </div>
  );
};

export default Todo;
