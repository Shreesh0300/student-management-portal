import StatCard from "./StatCard";
import TaskCard from "./TaskCard";

function Dashbord() {
    const task =[{ id : 1, title :"Learn DSA" , value :"Basics of DSA" ,status :"in progress"},
        { id : 2, title :"Learn react" , value :"Learn React fundamentals", status :"completed"},
        { id : 3, title :"Build a project" , value :"Build a simple React project" ,status :"pending"},
        { id : 4, title :"Learn Django" , value :"Build a simple Django project" ,status :"pending"}
    ];
    return (
        <main className="dashboard">
            <header className="dashboard-header">
                
            </header>
            

            <div className="stats-grid">
                <StatCard title = {"total tasks"}  value ={"10"}/>
                <StatCard title = {"completed tasks"} value ={"7"}/>
                <StatCard title = {"pending tasks"} value ={"3"}/>
            </div>

            <section className="task-section">
                <h2>Recent Tasks</h2>
                <div className="task-list">
                    {task.map(task => (
                        <TaskCard key={task.id} title={task.title} value={task.value} status={task.status} />
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Dashbord;