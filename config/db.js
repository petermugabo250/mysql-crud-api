// import mysql
import mysql from "mysql2";
 //create a connection pool : a group of database connections that can be reused. 
 // This avoids the overhead of repeatedly creating and 
 // closing database connections for each query.
 const pool = mysql.createPool({ 
host:'127.0.0.1',
user:'root',
password:'',
database:'node_crud',
waitForConnections:true, // Ensures that if all connections are in use, 
// new requests will wait in a queue until a connection becomes available.
connectionLimit:10,
queueLimit:0 
 });
 if(pool){
    console.log("database connected");
    
 }
 export default pool.promise()

