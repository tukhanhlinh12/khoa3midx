import React, { useState, useEffect } from "react";
import TodoListHeader from "./TodoListHeader";
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";


const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [showOnlyNotFinished, setShowOnlyNotFinished] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, done: false };
    setTasks([...tasks, newTask]);
    updateLocalStorage([...tasks, newTask]);
  };

  const toggleTaskStatus = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const toggleShowOnlyNotFinished = () => {
    setShowOnlyNotFinished(!showOnlyNotFinished);
  };

  const updateLocalStorage = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const filteredTasks = showOnlyNotFinished
    ? tasks.filter((task) => !task.done)
    : tasks;

  const reorderTasks = (startIndex, endIndex) => {
    const updatedTasks = Array.from(tasks);
    const [removed] = updatedTasks.splice(startIndex, 1);
    updatedTasks.splice(endIndex, 0, removed);
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const toggleAllTasks = () => {
    const allTasksDone = tasks.every((task) => task.done);
    const updatedTasks = tasks.map((task) => ({ ...task, done: !allTasksDone }));
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // Implement logic to change the language in your app
  };

  return (
    <div className="App">
      <div className="container">
        <TodoListHeader
          showOnlyNotFinished={showOnlyNotFinished}
          toggleShowOnlyNotFinished={toggleShowOnlyNotFinished}
        />
        <TodoList
          tasks={filteredTasks}
          toggleTaskStatus={toggleTaskStatus}
          toggleAllTasks={toggleAllTasks}
          reorderTasks={reorderTasks}
        />
        <Form addTask={addTask} />
      </div>
      <Footer
        selectedLanguage={selectedLanguage}
        handleLanguageChange={handleLanguageChange}
      />
    </div>
  );
};

export default Home;
