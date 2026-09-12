import TaskCard from "./TaskCard";

function Tasks(props) {
    function toggleTask(id) {
        props.setTasks(
            props.tasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        status: task.status === "Completed" ? "Pending" : "Completed"
                    };
                }
                return task;
            })
        );
    }

    function deleteTask(id) {
        props.setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    }

    return (
        <div className="Dashboard">
            <h2>Tasks Page</h2>
            
            <div className="task-list">
                {props.tasks.map(task => (
                    <TaskCard 
                        key={task.id}
                        id={task.id}
                        title={task.title}
                        description={task.description} 
                        status={task.status}
                        onToggle={() => toggleTask(task.id)}
                        onDelete={() => deleteTask(task.id)} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Tasks;