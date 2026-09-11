import StatCard from "./StatCard";
import TaskCard from "./TaskCard";
import { useState } from "react";
import AddTask from "./AddTask";


function Dashboard(props) {
    

    function toggleTask(id){
        props.setTasks(
            props.tasks.map((task) => {
                if(task.id === id){
                    return {...task, 
                        status: task.status === "Completed" ? "Pending" : "Completed"
                    };
                }
                return task;            })
        );
    }

    function handleAddTask(newTask) {
        props.setTasks([...props.tasks, newTask]);
    }


    function deleteTask(id) {
        props.setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
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
                    {props.tasks.map(tasks => (
                        <TaskCard key={tasks.id}
                        id = {tasks.id}
                         title={tasks.title} 
                         description={tasks.description} status={tasks.status} 
                        onToggle={()=>toggleTask(tasks.id)}
                        onDelete={()=>deleteTask(tasks.id)}/>
                        
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Dashboard;