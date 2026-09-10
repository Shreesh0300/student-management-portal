import { useState } from "react";
function AddTask(props)
{
    const[title,SetTitle]=useState("");
    const[description,SetDescription]=useState("");
    
    function handleSubmit(e){
        e.preventDefault();
        const newTask ={ 
            id:Date.now(),
            title : title,
            description:description,
            status:"Pending",
        };
        console.log("object:",newTask);
        props.onAddTask(newTask);
    }
    return(

        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
            <label> Add Title </label>
            <input type="text"
            value={title}
            onChange={(e)=> SetTitle(e.target.value)}

            />

            <br></br>
            
            <label> Add Description </label>
            <input type="text"
            value={description}
            onChange={(e)=> SetDescription(e.target.value)}
            />

            <button type = "submit">Add Task</button>
            </form>
            

            
        </div>


        
    );

}

export default AddTask;