const express = require("express")
const cors = require("cors");
const app =express();

app.use(cors());


const tasks=[
          { id : 1, title :"Learn DSA" , description :"Basics of DSA" ,status :"Pending"},
          { id : 2, title :"Learn react" , description :"Learn React fundamentals", status :"Completed"},
          
      ];


      app.get("/api/tasks" ,(req,res)=>{
        res.json(tasks)
    });
  

app.get("/",(req,res)=> {
    res.send("Backend is Working!")
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});