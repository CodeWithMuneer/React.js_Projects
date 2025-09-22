import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import "./App.css";
import TodoList from "./components/TodoList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodo(storedTodos);
  }, []);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
    };

    // naya array banao (purane todos ko copy karke)
    const updatedTodos = [newTask, ...todo];

    setTodo(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    toast.success("New Task Added.");
  };

  const deleteTask = (id) => {
    const filteredTodos = todo.filter((item) => item.id !== id);
    setTodo(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
    toast.success("Task Deleted");
  };

  return (
    <>
      <Navbar />
      <TodoForm addTask={addTask} />
      <TodoList todo={todo} deleteTask={deleteTask} />
      <ToastContainer position="top-right" theme="dark" />
    </>
  );
};

export default App;
