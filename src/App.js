import React, { useState, useRef } from "react";
import Header from "./components/Header";
import Todos from "./components/Todos";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App = () => {
  const inputRef = useRef("");
  const [todos, setTodos] = useState([
    {
      id: "1",
      user: "Liisa",
      task: "Opiskele ohjelmointia",
      completed: false,
    },
    {
      id: "2",
      user: "Pauli",
      task: "Käy kaupassa",
      completed: true,
    },
  ]);

  const addNewTodo = (event, user, task) => {
    event.preventDefault();

    const newTodo = {
      id: todos.length + 1,
      user: "Anna",
      task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    const foundedTodo = todos.find((todo) => todo.id === id);

    const updatedTodo = {
      ...foundedTodo,
      completed: !foundedTodo.completed,
    };

    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  return (
    <div className="App">
      <Header text="MERN-todos" />
      <Form inputRef={inputRef} addNewTodo={addNewTodo} />
      <Todos
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        updateTodo={updateTodo}
      />
      <Footer todos={todos} />
    </div>
  );
};

export default App;
