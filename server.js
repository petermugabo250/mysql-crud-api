import express from "express";
const app = express();
const port = 3001;
import userRoutes from "./routes/userRoutes.js";
import { encryptedData, decryptedData } from "./cryptoHelper.js";

// Middleware
app.use(express.json());  
// Routes
app.get('/',(req,res) =>{
  let mesg = "Hello"; // Original message
  let encryptedText = encryptedData(mesg); // Encrypting the message
  let decryptedText = decryptedData(encryptedText); // Decrypting the message
  res.status(200).json({
      status: "Welcome",
      author: "MUGABO John Peter",
      encryptedMessage: encryptedText,
      decryptedMessage: decryptedText
  });
});
app.use("/api/users", userRoutes);
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
