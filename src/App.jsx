import Taskform from "./component/Taskform";
import Tasklist from "./component/Tasklist";
import Progresstracker from "./component/Progresstracker";


export default function App() {
  return(
    <div>
      <h1>Task Focus</h1>
      <p>Our friendly Task Manager</p>
      <Taskform />
      <Tasklist />
      <Progresstracker/>
      <button>Clear all Task</button>
    </div>
  )
}
