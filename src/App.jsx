import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import './App.css';
import {Routes,Route} from "react-router-dom";
import Tasks from "./components/Tasks";
import TaskDetails from "./components/TaskDetails";
import { useState  } from "react";
function App() {

  const[tasks, setTasks] = useState([
          { id : 1, title :"Learn DSA" , description :"Basics of DSA" ,status :"Pending"},
          { id : 2, title :"Learn react" , description :"Learn React fundamentals", status :"Completed"},
          { id : 3, title :"Build a project" , description :"Build a simple React project" ,status :"Pending"},
          { id : 4, title :"Learn Django" , description :"Build a simple Django project" ,status :"Pending"}
      ]);
  
  return (
    <div>
      
      <Navbar />  
      <Routes>
        <Route>
          <Route path="/" element={<><Welcome/><Dashboard tasks={tasks} setTasks={setTasks}/></>}/>
          <Route path ="/tasks" element={<Tasks tasks={tasks} setTasks={setTasks} />}/>
          <Route path ="/tasks/:id" element={<TaskDetails tasks={tasks}/>}/>
        </Route>
      </Routes>
    </div>
  

  );
}

export default App;