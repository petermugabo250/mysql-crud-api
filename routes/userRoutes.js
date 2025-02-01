import express from "express";
import {getAllUsers,getUserById,createUser,updateUser,deleteUser} from "../controllers/userControllers.js";  // Import the corrected function name

const userRoutes = express.Router(); // a router is a mechanism that helps organize and manage 
// routes in your application. It allows you to group related routes together,
//  making your code more modular and easier to maintain.

//ROUTE: is a defined path on a web server that responds to specific HTTP requests.
//  Routes determine how an application responds to client requests for specific endpoints,
//  which are URLs (or paths) within the web application.

// Use GET for retrieving data
userRoutes.get("/Allusers", getAllUsers);
userRoutes.get("/:id", getUserById);
userRoutes.post("/create", createUser);
userRoutes.put("/update/:id",updateUser);
userRoutes.delete("/delete/:id",deleteUser)

export default userRoutes;
