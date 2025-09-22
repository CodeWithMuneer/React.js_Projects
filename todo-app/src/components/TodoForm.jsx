import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // agar input khali ho to kuch na kare
    addTask(text);
    setText(""); // input clear
  };

  return (
    <div className="todo-form">
      <h1>Add New Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          style={{width: "700px", marginRight: "20px"}}
          onChange={(e) => setText(e.target.value)}
          placeholder="Todo Task"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TodoForm;

