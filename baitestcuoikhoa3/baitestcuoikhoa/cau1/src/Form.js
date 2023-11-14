import React, { useState } from "react";

const Form = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Enter task ..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
