import { useState } from "react";
function AddTask(props)
{
    const[title,SetTitle]=useState("");
    const[description,SetDescription]=useState("");
    
    async function handleSubmit(e){
        e.preventDefault();
        const newTask ={ 
            id:Date.now(),
            title : title,
            description:description,
            status:"Pending",
        };
        console.log("object:",newTask);
        

        try{

        


        const response=await fetch("http://localhost:5000/api/tasks", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newTask)
    });

    const data =await response.json();
    props.onAddTask(data);
}
    catch(error){
        console.log(error);
    }
    }
    

    
    return(

        <div>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Add Title </label>
                    <input type="text"
                    value={title}
                    onChange={(e)=> SetTitle(e.target.value)}
                    />
                </div>

                <div>
                    <label> Add Description </label>
                    <input type="text"
                    value={description}
                    onChange={(e)=> SetDescription(e.target.value)}
                    />
                </div>

                <button type="submit">Add Task</button>
            </form>
            

            
        </div>


        
    );

}

export default AddTask;