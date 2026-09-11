import {useParams, useSearchParams } from "react-router-dom";
function TaskDetails() {
    const{id}=useParams();
    return (
        <div>
            <h1>Task Details</h1>
            <p>This page will show details of all our tasks</p>
            <p> Task ID:{id}</p>
        </div>
    );
}
export default TaskDetails;