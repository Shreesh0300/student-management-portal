import {useParams, useSearchParams } from "react-router-dom";
function TaskDetails(props) {
    const{id}=useParams();
    const tasks=props.tasks.find((tasks) => tasks.id===Number(id));
    if(!tasks){
         return <div>Task Not Found!</div>
    }
    return (
        <div className="Dashboard">
            <h1>Task Details</h1>
            <h2>{tasks.title}</h2>
            <p>{tasks.description}</p>
            <p> Status:{tasks.status}</p>
            <p> Task ID:{id}</p>
        </div>
    );
}
export default TaskDetails;