import Taskform from "./component/Taskform";
import Tasklist from "./component/Tasklist";
import Progresstracker from "./component/Progresstracker";
import { useEffect, useState } from "react";


export default function App() {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem
    ("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }
  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly Task Manager</p>
      <Taskform addTask = {addTask}/>
      <Tasklist />
      <Progresstracker />
      <button>Clear all Task</button>
    </div>
  )
}
