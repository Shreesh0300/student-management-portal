import StatCard from "./StatCard";
import TaskCard from "./TaskCard";
import { useState } from "react";
import AddTask from "./AddTask";

function Dashboard() {
    const[tasks, setTasks] = useState([
        { id : 1, title :"Learn DSA" , value :"Basics of DSA" ,status :"Pending"},
        { id : 2, title :"Learn react" , value :"Learn React fundamentals", status :"Completed"},
        { id : 3, title :"Build a project" , value :"Build a simple React project" ,status :"Pending"},
        { id : 4, title :"Learn Django" , value :"Build a simple Django project" ,status :"Pending"}
    ]);

    function toggleTask(id){
        setTasks(
            tasks.map((tasks) => {
                if(tasks.id === id){
                    return {...tasks, 
                        status: tasks.status === "Completed" ? "Pending" : "Completed"
                    };
                }
                return tasks;
            })
        );
    }

    function handleAddTask(newTask) {
        setTasks([...tasks, newTask]);
    }
    return (
        <main className="Dashboard">
            <header className="dashboard-header"></header>

            <div className="stats-grid">
                <StatCard title = {"total tasks"}  value ={"10"}/>
                <StatCard title = {"completed tasks"} value ={"7"}/>
                <StatCard title = {"pending tasks"} value ={"3"}/>
            </div>

            <section className="task-section">
            <AddTask onAddTask={handleAddTask}/>
            

                <h2>Recent Tasks</h2>
                <div className="task-list">
                    {tasks.map(tasks => (
                        <TaskCard key={tasks.id} title={tasks.title} value={tasks.value} status={tasks.status} 
                        onToggle={()=>toggleTask(tasks.id)}/>
                        
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Dashboard;