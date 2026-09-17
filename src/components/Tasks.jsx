import TaskCard from "./TaskCard";

function Tasks(props) {
    function toggleTask(id) {
        props.setTasks(
            props.tasks.map((task) => {
                if (task._id === id) {
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
        props.setTasks(prevTasks => prevTasks.filter(task => task._id !== id));
    }

    return (
        <div className="Dashboard">
            <h2>Tasks Page</h2>
            
            <div className="task-list">
                {props.tasks.map(task => (
                    <TaskCard 
                        key={task._id}
                        id={task._id}
                        title={task.title}
                        description={task.description} 
                        status={task.status}
                        onToggle={() => toggleTask(task._id)}
                        onDelete={() => deleteTask(task._id)} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Tasks;