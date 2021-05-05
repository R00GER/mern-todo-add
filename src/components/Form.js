import React, { useState } from "react";

const formContainer = {
  padding: "2rem",
  width: "100%",
};

const form = {
  width: "100%",
  display: "flex",
};

const input = {
  width: "85%",
  padding: ".5rem 1rem",
  border: "none",
  borderTopLeftRadius: "4px",
  borderBottomLeftRadius: "4px",
  background: "#1E1E1E",
  color: "#F6F6F6",
};

const submitButton = {
  padding: ".5rem 1rem",
  flex: 1,
  background: "#EFD81D",
  color: "#121212",
  border: "none",
  borderTopRightRadius: "4px",
  borderBottomRightRadius: "4px",
  cursor: "pointer",
};

const Form = ({ inputRef, addNewTodo }) => {
  const [task, setTask] = useState("");

  const handleTaskChange = (task) => setTask(task);

  return (
    <div style={formContainer}>
      <form
        style={form}
        onSubmit={(event) => {
          addNewTodo(event, task);
          setTask("");
        }}
      >
        <input
          style={input}
          id="new-todo-input"
          name="task"
          value={task}
          onChange={(event) => handleTaskChange(event.target.value)}
          placeholder="Lisää muistiinpano"
        />
        <button style={submitButton} type="submit">
          Add new ToDo
        </button>
      </form>
    </div>
  );
};

export default Form;
