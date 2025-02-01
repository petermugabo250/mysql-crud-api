import express from "express";
const app = express();
const port = 3001;
import userRoutes from "./routes/userRoutes.js";
// Middleware
app.use(express.json());  // No need for bodyParser.json() since express.json() is built-in
// app.use(express.urlencoded({ extended: true }));
// Routes
app.get('/',(req,res) =>{
  res.status(200).json({
    status: "Welcome",
    author: "MUGABO John Peter",
    message: "Welcome To My API",
  });
});
app.use("/api/users", userRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
