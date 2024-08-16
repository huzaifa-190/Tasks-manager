import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import TaskInfoModal from "./components/TaskInfoModal";

import { ToDoProvider, useToDoContext } from "./contexts/ToDoContext";

import { ToastContainer, toast } from 'react-toastify';
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title:
        "Edit youtube clips Edit youtube clips Edit youtube clips Edit youtube clips",
      completed: false,
      tag:"work",
      tagColor:"#11fd0d"

    },
    { id: 2, title: "Gym workout", completed: false,tag:"personal",
      tagColor:"#f2ff38" },
    {
      id: 3,
      title:
        "Learn web concepts Learn web concepts Learn web concepts Learn web concepts",
      completed: false,tag:"work",
      tagColor:"#11fd0d"
    },
    {
      id: 4,
      title:
        "Respond emails Respond emails Respond emails Respond emails  Respond emails",
      completed: true,tag:"work",
      tagColor:"#11fd0d"
    },
    { id: 5, title: "Car service", completed: true ,tag:"family",
      tagColor:"#ffffff"},
  ]);

  // Search query state
  // const [searchQuery, setSearchQuery] = useState("");

  // Filtered tasks based on search query
  // const filteredTasks = tasks.filter((task) =>
  //   task.title.toLowerCase().includes(searchQuery.toLowerCase()) 
  // );

  const AddTask = (task) => {
    setTasks((prev) => [{ id: Date.now, ...task }, ...prev]);
  };
  const RemoveTask = (id) => {
    console.log("Removing task ...");
    setTasks((prev) => prev.filter((prevTask) => prevTask.id !== id));
  };
  const UpdateTask = ({ id, task }) => {
    setTasks((prev) =>
      prev.map((prevTask) => (prevTask.id === id ? task : prevTask))
    );
  };
  const toggleComplete = (id) => {
    // setTasks((prev)=> prev.map(prevTask => prevTask.id === id ? prevTask.completed=!prevTask.completed : prevTask))

    setTasks((prev) =>
      prev.map((prevTask) =>
        prevTask.id === id
          ? { ...prevTask, completed: !prevTask.completed }
          : prevTask
      )
    );
  };

  useEffect(() => {
    console.log("Useeffect [] calling ...")
    const todos = JSON.parse(localStorage.getItem("toDos"));
    if (todos && todos.length > 0) {
      setTasks(todos);
    }
  }, []);

  useEffect (()=>{
      localStorage.setItem('toDos', JSON.stringify(tasks));
    },[AddTask,UpdateTask,RemoveTask,toggleComplete])
    useEffect(() => {
    console.log("Useeffect [tasks] calling ...")
    localStorage.setItem("toDos", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <ToDoProvider
      value={{
        tasks,
        setTasks,
        AddTask,
        UpdateTask,
        RemoveTask,
        toggleComplete,
      }}
    >
      {/* <TaskInfoModal /> */}
      <Home />
      <ToastContainer />
      {/* <SignUp /> */}
    </ToDoProvider>
  );
}

export default App;
