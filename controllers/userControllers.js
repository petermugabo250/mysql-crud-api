//Controllers are responsible for handling incoming HTTP requests, 
// processing them, and sending back the appropriate HTTP responses.
import pool from "../config/db.js";
// Function to retrieve all users
export  const getAllUsers = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM `accounts`");
    res.status(201).json({
      status: "success",
      message: "All users retrieved",
      data: rows,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Function that retrieve user by ID

export const getUserById = async(req,res)=>{
  const {id }= req.params;
  //Object Destructing : is a  way to extract values 
  // from objects and assign them to variables in JavaScript.
  
  // Req.params is an object that contains route parameters.
  //  These parameters are named segments in the URL of a route that the user defined.
  try {
    const [row]= await pool.query('SELECT * FROM accounts WHERE id= ?',[id]);
    if(row.length===0)
    {
      res.status(401).json({
        message:'user not found'
      });

    }
    res.status(200).json({
      message:'user found',
      data:row
    })
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}
// Function that create a New user
export const createUser= async(req,res)=>{
  const {name,email,age}=req.body;
  // validate input
  if(!email){
    res.status(400).json({
      message:"Email is reuired"
    })
  }

  // check if email is exist
  const [existingUser] = await pool.query(' SELECT email FROM accounts WHERE email =?', [email])
  if(existingUser.length>0){
    res.status(409).json({
      message:"Email arleady Exist"
    })
  }
  
  try {
    const [result] = await pool.query( 'INSERT INTO accounts (name, email, age) VALUES (?, ?, ?)',
      [name, email, age]
  );
    res.status(201).json({
      id:result.insertId,
      name,
      email,
      age
    })
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

// function To Update user

export const updateUser = async(req,res)=>{
  const {id}=req.params;
  const {name,email,age} = req.body;
try {
  const [update]= await pool.query('UPDATE accounts SET name=?,email=?,age=? WHERE id=? ',
     [name,email,age,id])

     if(update.affectedRows===0)
     {
      res.status(401).json({
        message: "user not found"
      })
     }

     res.status(201).json({
      status:"success",
      message:"User updated successfully",
      id,
      name,
      email,
      age
     })
} catch (error) {
  res.status(500).json({
    error: error.message
  })
}
}
// function which removes user from the database

export const deleteUser = async(req,res)=>{

  const {id}= req.params;
try {
  const del= await pool.query('DELETE  FROM accounts WHERE id=?',[id])

  if(del.affectedRows===0)
  {
    res.status(401).json({
        message: "user not found"
    })
  }
  res.status(201).json({
    message:`User with ID : ${id} deleted successfully`,
  })
} catch (error) {
  
}

}