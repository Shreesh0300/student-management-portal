require("dotenv").config();

// bring express in Node.js
const express = require("express");

const mongoose = require("mongoose");

const bcrypt=require("bcrypt");

const jwt = require("jsonwebtoken");
// installing cors middleware
const cors = require("cors");

// create express app using what we imported
const app = express();

const Task = require("./models/Task");

const User = require("./models/Users");

// use cors middleware to handle requests
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDb Connection Sucessfull!");
    }).catch((error) => {
        console.log("MongoDb Connection Failed:", error.message);
    })



app.get("/api/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch Tasks!" });
    }

});


app.get("/api/tasks/:id", async (req, res) => {
    try {



        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: "Task not found!" });
        }
        res.json(task);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch tasks!" });
    }
})

app.put("/api/tasks/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: "Task Not Found" })
        }
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: "Failed to update task!" });
    }
})

app.delete("/api/tasks/:id", async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return res.status(404).json({ message: "Task Not Found" });
        }
        res.json(deletedTask);
    } catch (error) {
        res.status(500).json({ message: "Failed to delete task!" });
    }
})

app.post("/api/tasks", async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).json(newTask);
    } catch (error) {
        res.status(500).json({ message: "Failed to create task!" });
    }
})

// API Route (Testing Backend)
app.get("/", (req, res) => {
    res.send("Backend is Working!!")
});


app.post("/api/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User Registered successfully",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Failed to create user!" });
    }
});


app.post("/api/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Invalid Password"
            });
        }


        const token = jwt.sign(
            { userId: user._id },
            "mysecretkey",
            {expiresIn: "1h"}
        );

        

        res.json({
            message: "Login Sucessful",
            token:token
        });
    } catch (error) {
        res.status(500).json({
            message: "Login Failed"
        });
    }
});

// start the server and listen to port 5000
app.listen(5000, () => {
    console.log("Server is Running on port 5000");
});